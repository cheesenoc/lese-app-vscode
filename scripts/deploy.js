#!/usr/bin/env node
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const ftp = require('basic-ftp');

const IGNORES = new Set([
  '.git',
  'node_modules',
  '.vscode',
  '.github',
  '.env',
  '.DS_Store'
]);

async function walkFiles(dir) {
  const files = [];
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (IGNORES.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walkFiles(full)));
    } else if (entry.isFile()) {
      files.push(full);
    }
  }
  return files;
}

(async () => {
  const client = new ftp.Client();
  client.ftp.verbose = process.env.FTP_DEBUG === 'true';

  try {
    const host = process.env.FTP_HOST;
    const user = process.env.FTP_USER;
    const password = process.env.FTP_PASSWORD;
    const port = process.env.FTP_PORT ? parseInt(process.env.FTP_PORT, 10) : undefined;
    const secure = (process.env.FTP_SECURE || '') === 'true';
    const remoteRoot = process.env.FTP_PATH || '/';
    const localRoot = path.resolve(process.env.FTP_LOCAL_DIR || '.');

    if (!host || !user) {
      throw new Error('Missing FTP_HOST or FTP_USER in environment. See .env.example');
    }

    await client.access({ host, port, user, password, secure });

    const files = await walkFiles(localRoot);
    for (const f of files) {
      const rel = path.relative(localRoot, f).split(path.sep).join('/');
      const remoteFile = path.posix.join(remoteRoot, rel);
      const remoteDir = path.posix.dirname(remoteFile);
      await client.ensureDir(remoteDir);
      await client.uploadFrom(f, remoteFile);
      console.log('Uploaded:', rel);
    }

    console.log('\nDeploy complete ✅');
  } catch (err) {
    console.error('\nDeploy failed:', err);
    process.exitCode = 1;
  } finally {
    client.close();
  }
})();
