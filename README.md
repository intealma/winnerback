# Winnerbäck

Designförslag för [winnerback.se](https://winnerback.se/). Samma typsnitt, färger och svartvita bilder som originalet, med tydligare meny, läsbar konsertlista, bildgalleri och mejllistan på startsidan.

Det här är en demo, inte Lars Winnerbäcks officiella webbplats. Sidan visas inte i sökmotorer och formuläret skickar ingenting.

## Filer

| Vad | Fil |
| --- | --- |
| Sidan | `index.html` |
| Utseende | `style.css` |
| Konsertdatum, filter, meny, bildvisare | `app.js` |
| Bilder | `assets/` |

Konsertdatumen ligger överst i `app.js`, kopierade från winnerback.se den 26 oktober 2026. Datum som har passerat döljs automatiskt.

## Bilder och typsnitt

Pressbilderna kommer från United Stages pressrum på [Mynewsdesk](https://www.mynewsdesk.com/se/united-stage/images/tag/lars-winnerbaeck) med licensen Medieanvändning. Foto: Anders Thessing, Karl-Magnus Boske, Knotan och United Stage. Startbilden kommer från winnerback.se.

Typsnittet Tuplet laddas direkt från winnerback.se och ligger inte i repot.

## Köra lokalt

```bash
python3 -m http.server 8083
```

Öppna http://localhost:8083/.
