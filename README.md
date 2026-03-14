# Snack House — Sito di prova

Sito statico per il locale **Snack House**, realizzato con solo HTML, CSS e JavaScript. Pensato per imparare a usare **Cursor**, **GitHub** e **Vercel**.

---

## A cosa serve ogni file

| File | A cosa serve |
|------|----------------|
| **index.html** | Struttura della pagina: titoli, paragrafi, sezioni (Hero, Chi siamo, Menu, Perché sceglierci, Contatti, Footer). Il browser legge questo file e mostra il contenuto. |
| **style.css** | Aspetto del sito: colori, font, spaziatura, layout e comportamento su telefono e computer (responsive). Separare CSS permette di modificare il design senza toccare l’HTML. |
| **script.js** | Comportamento interattivo: ad esempio lo scroll fluido quando clicchi su "Scopri il menu". Il codice è commentato per capire ogni parte. |
| **README.md** | Istruzioni e spiegazioni del progetto (questo file). Su GitHub viene mostrato nella home del repository. |

Nessun altro file è obbligatorio per far funzionare il sito. Non sono usate librerie esterne.

---

## Come vedere il sito in locale

1. Apri la cartella del progetto in Cursor (o nel file manager).
2. **Opzione A:** Doppio clic su `index.html` per aprirlo nel browser.
3. **Opzione B:** Da terminale nella cartella del progetto:
   - Con Python: `python -m http.server 8000` → apri http://localhost:8000
   - Con Node: `npx serve` → segui l’indirizzo indicato (es. http://localhost:3000)

---

## Caricare su GitHub

1. Crea un account su [github.com](https://github.com) se non ce l’hai.
2. Clicca **New repository**, nome es. `snack-house`, lascia vuoto "Add .gitignore" e "Add a README", poi **Create repository**.
3. Apri il terminale nella cartella del progetto (dove si trovano `index.html`, `style.css`, `script.js`) e esegui:

```bash
git init
git add .
git commit -m "Primo commit: sito Snack House"
git branch -M main
git remote add origin https://github.com/TUO-USERNAME/snack-house.git
git push -u origin main
```

Sostituisci `TUO-USERNAME` e `snack-house` con il tuo username e il nome del repo. Se GitHub ti chiede di fare login, segui le istruzioni (token o SSH).

Dopo il push, il codice sarà su GitHub e potrai modificarlo da Cursor e aggiornare con `git add .`, `git commit -m "messaggio"`, `git push`.

---

## Pubblicare su Vercel

1. Vai su [vercel.com](https://vercel.com) e accedi (puoi usare "Continue with GitHub").
2. Clicca **Add New…** → **Project**.
3. Importa il repository GitHub del progetto (es. `snack-house`). Se non lo vedi, autorizza Vercel ad accedere ai repo.
4. Lascia le impostazioni di default (Vercel riconosce un sito statico): **Framework Preset** può restare "Other" o "None".
5. Clicca **Deploy**. In pochi secondi avrai un link tipo `https://snack-house-xxx.vercel.app`.
6. Ogni successivo push su `main` su GitHub aggiornerà automaticamente il sito su Vercel.

Non serve un file di configurazione particolare: con solo HTML, CSS e JS nella root, Vercel pubblica il sito così com’è.

---

## Struttura del progetto

```
Nuova cartella/
├── index.html    ← Pagina principale
├── style.css     ← Stili
├── script.js     ← Interattività
├── README.md     ← Istruzioni (questo file)
└── .gitignore    ← (opzionale) Esclude file inutili da Git
```

---

## Requisiti rispettati

- Solo HTML, CSS e JavaScript (nessuna libreria esterna).
- Sezioni: Hero con titolo, sottotitolo e bottone "Scopri il menu"; Chi siamo; Menu (3 card: Panini, Bevande, Dolci); Perché sceglierci; Contatti (indirizzo, telefono, email, WhatsApp); Footer.
- Responsive e design moderno su telefono e computer.
- Testi in italiano.
- File separati: `index.html`, `style.css`, `script.js`.
- Commenti nel codice per spiegare le varie parti.
- Struttura semplice adatta a un principiante.

Modifica i testi e i numeri di telefono/WhatsApp in `index.html` con i dati reali del locale quando sei pronto.
