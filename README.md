# Lesen lernen — Demo

Kleine responsive Web-App, mit der Kinder Großbuchstaben-Wörter sehen und nach Klick/Leertaste ein Bild als Lösung angezeigt bekommen.

Repository: https://github.com/cheesenoc/lese-app-vscode

License: MIT — see `LICENSE`

Demo (GitHub Pages): https://cheesenoc.github.io/lese-app-vscode/

Dateien:
- `index.html` — App
- `styles.css` — Styling
- `app.js` — Logik
- `images/` — optional (enthält Beispiel-SVGs; nicht mehr benötigt)
 - `index.html` — App
 - `styles.css` — Styling
 - `app.js` — Logik (inkl. Vorlesen mit SpeechSynthesis, zufällige Wortfolge)
 - `images/` — optional (enthält Beispiel-SVGs; nicht mehr benötigt)

Starten:
- Einfach `index.html` im Browser öffnen.

Optional (lokaler Server):
```bash
npx http-server -c-1 .
# oder mit Python 3
python -m http.server 8000
```

## FTP-Bereitstellung (automatisch) ✅
Das Repository enthält ein kleines Node-basiertes Deploy-Skript (`scripts/deploy.js`) und eine Beispiel-Datei `.env.example` für FTP/FTPS-Zugangsdaten.

Kurzanleitung:
1. Abhängigkeiten installieren:
```bash
npm install
```
2. `.env.example` kopieren und ausfüllen:
- Unix/macOS: `cp .env.example .env`
- Windows PowerShell: `copy .env.example .env`

Fülle in `.env` mindestens `FTP_HOST`, `FTP_USER`, `FTP_PASSWORD` und `FTP_PATH` aus. Wenn dein Server FTPS (TLS) verlangt, setze `FTP_SECURE=true`.

3. Deploy ausführen:
```bash
npm run deploy
```

Wichtige Hinweise:
- Das Skript nutzt `basic-ftp` (FTPS) und lädt standardmäßig den Inhalt aus `FTP_LOCAL_DIR` (default `.`) hoch.
- Ausgeschlossene Dateien/Ordner: `.git`, `node_modules`, `.vscode`, `.env`.
- Wenn dein Server nur SFTP (SSH) unterstützt, benutze einen SFTP-Client oder sag Bescheid, dann passe ich das Skript an.
- Speichere keine Zugangsdaten im Repo. Die Datei `.env` ist in `.gitignore` enthalten — verwende temporäre Zugangsdaten und lösche oder leere `.env` nach dem Deploy.

Fehlerbehebung (häufige Probleme):
- `421 ... weak ciphers` → Server verlangt FTPS/TLS: setze `FTP_SECURE=true`.
- `550 Can't change directory` → Der in `FTP_PATH` angegebene Ordner existiert nicht; passe `FTP_PATH` an.

Weitere Informationen und Details: siehe `DEPLOY.md`.

Nächste Schritte: Punkte, Spracheingabe (SpeechRecognition).

Hinweis: Beim ersten Klick / Leertaste wird das Bild angezeigt und das Wort wird vorgelesen (de-DE),
die Reihenfolge der Wörter ist zufällig und wiederholt sich erst, wenn alle Wörter gezeigt wurden.

Die Wortliste wurde erweitert und enthält jetzt deutlich mehr Begriffe (ca. 100 insgesamt).

Timer-Verhalten:
- Beim Erscheinen eines neuen Wortes ist die Interaktion für **10 Sekunden** gesperrt (Countdown sichtbar unter der Anleitung).
- Nach diesen 10 Sekunden kann geklickt oder die Leertaste gedrückt werden, um das Bild zu zeigen und das Wort vorzulesen.
- Nach dem Aufdecken läuft ein weiterer **10‑Sekunden** Countdown; danach wird automatisch das nächste Wort geladen.