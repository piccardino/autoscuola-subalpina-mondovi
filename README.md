# Autoscuola Subalpina Mondovì

Sito statico dell’autoscuola con informazioni su corsi, patenti, rinnovi e contatti. [Apri il sito](https://piccardino.github.io/autoscuola-subalpina-mondovi/).

## Anteprima locale

Con Node.js 24 e Python 3 disponibili, esegui:

```powershell
node src/build.mjs
py -3 -m http.server 8174 --bind 127.0.0.1 --directory dist
```

Apri [l’anteprima locale](http://127.0.0.1:8174/). Su Windows puoi avviare il server anche con `ANTEPRIMA.bat`.

## Modifiche e pubblicazione

I contenuti e i template sono in `src/`. Fogli di stile, script, foto e font sono in `dist/assets/`. Il build genera le pagine HTML in `dist/`. GitHub Actions esegue il build e pubblica `dist/` su GitHub Pages a ogni push su `main`.

I moduli inviano le richieste al servizio Contact Form 7 del sito dell’autoscuola.
