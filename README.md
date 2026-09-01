# BIT — BUILD IT TODAY FOR TOMORROW

Versiune statică, în limba română, pregătită pentru GitHub Pages.

## Ce conține

- `index.html` — structura și textele site-ului
- `styles.css` — designul responsive
- `script.js` — meniul mobil și efectele de navigare
- `images/bit-build-it-today.png` — prima imagine furnizată, folosită exact ca imagine în HTML

## Google Forms

Butonul „APLICĂ AICI” deschide formularul:
https://forms.gle/ADwuibj2Q8HQBjyE8

Dacă schimbi formularul în viitor, deschide `index.html` și înlocuiește linkul `forms.gle/...` în cele două locuri în care apare.

## Poze mentori

În `index.html`, caută `POZĂ MENTOR`. Poți înlocui acel placeholder cu:

```html
<img src="images/mentor-vlad.jpg" alt="Vlad Rotar">
```

Pune imaginea în folderul `images`.

## GitHub Pages

1. Deschide repository-ul tău GitHub.
2. Intră la `Add file` → `Upload files`.
3. Încarcă **conținutul acestui folder**, nu ZIP-ul:
   - `index.html`
   - `styles.css`
   - `script.js`
   - folderul `images` cu imaginea din interior
4. Apasă `Commit changes`.
5. GitHub Pages va folosi `index.html` din branch-ul `main` și folderul root.

Important: imaginea este deja inclusă în folder, deci trebuie încărcat și folderul `images`.

## Personalizare

Poți modifica direct textele din `index.html`. Culorile principale sunt definite la începutul `styles.css`:

- `--navy`
- `--navy-2`
- `--blue`
- `--cyan`
- `--green`
- `--orange`

Nu există backend pentru formular pe site: înscrierea este gestionată de Google Forms.
