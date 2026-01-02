# Lesen lernen — Demo

Kleine responsive Web-App, mit der Kinder Großbuchstaben-Wörter sehen und nach Klick/Leertaste ein Bild als Lösung angezeigt bekommen.

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

Nächste Schritte: Punkte, Spracheingabe (SpeechRecognition).

Hinweis: Beim ersten Klick / Leertaste wird das Bild angezeigt und das Wort wird vorgelesen (de-DE),
die Reihenfolge der Wörter ist zufällig und wiederholt sich erst, wenn alle Wörter gezeigt wurden.

Die Wortliste wurde erweitert und enthält jetzt deutlich mehr Begriffe (ca. 100 insgesamt).

Timer-Verhalten:
- Beim Erscheinen eines neuen Wortes ist die Interaktion für **10 Sekunden** gesperrt (Countdown sichtbar unter der Anleitung).
- Nach diesen 10 Sekunden kann geklickt oder die Leertaste gedrückt werden, um das Bild zu zeigen und das Wort vorzulesen.
- Nach dem Aufdecken läuft ein weiterer **10‑Sekunden** Countdown; danach wird automatisch das nächste Wort geladen.