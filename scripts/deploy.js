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
    // FTP_SECURE can be:
    // - 'false' (default) -> plain FTP
    // - 'true' or 'explicit' -> explicit FTPS (AUTH TLS)
    // - 'implicit' -> implicit FTPS (TLS from the start)
    const secureEnv = (process.env.FTP_SECURE || '').toLowerCase();
    let secure;
    if (secureEnv === 'implicit') {
      secure = 'implicit';
    } else if (secureEnv === 'true' || secureEnv === 'explicit') {
      secure = true;
    } else {
      secure = false;
    }

    // TLS options (min version can be configured via FTP_TLS_MIN_VERSION, defaults to TLSv1.2)
    const tlsMin = process.env.FTP_TLS_MIN_VERSION || 'TLSv1.2';
    const secureOptions = { minVersion: tlsMin };

    const remoteRoot = process.env.FTP_PATH || '/';
    const localRoot = path.resolve(process.env.FTP_LOCAL_DIR || '.');

    if (!host || !user) {
      throw new Error('Missing FTP_HOST or FTP_USER in environment. See .env.example');
    }

    console.log('Connecting to FTP host', host, 'secure=', secure, 'port=', port);
    try {
      await client.access({ host, port, user, password, secure, secureOptions });
    } catch (err) {
      const msg = String(err.message || err);
      // If the server refuses cleartext or weak ciphers, try implicit FTPS as a fallback
      if (msg.includes('cleartext') || msg.includes('weak ciphers') || msg.includes('421') || msg.includes('421-')) {
        console.warn('Server rejected cleartext or weak ciphers. Retrying with implicit FTPS (secure=implicit)...');
        try {
          await client.access({ host, port, user, password, secure: 'implicit', secureOptions });
        } catch (err2) {
          console.error('Retry with implicit FTPS failed:', err2);
          throw err2;
        }
      } else {
        throw err;
      }
    }

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
