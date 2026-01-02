# Deploying with the included script

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy `.env.example` to `.env` and fill in your FTP credentials.

3. Run the deploy script:

   ```bash
   npm run deploy
   ```

Notes:
- The script uploads files from `FTP_LOCAL_DIR` (default `.`) and skips `node_modules`, `.git`, `.vscode`, `.env`.
- This uses `basic-ftp` to perform the transfer. If your server only supports SFTP (SSH File Transfer), use an SFTP client or a different script.
- Do not commit your `.env` file containing credentials. It's already in `.gitignore`.
