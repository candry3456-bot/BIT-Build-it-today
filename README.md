# BIT — BUILD IT TODAY

A responsive static website for the BIT educational initiative.

## Files

- `index.html` — page structure and content
- `styles.css` — responsive visual design
- `script.js` — navigation, animations and form validation

## Customize

### Mentor photos
In `index.html`, replace each `.photo-placeholder` block with an image, for example:

```html
<img src="images/mentor-1.jpg" alt="Mentor Name">
```

Create an `images/` folder and add your real photos.

### Mentor information
Search for `[MENTOR NAME]` and the editable description text in `index.html`.

### Contact/social links
Replace the footer placeholders only after you have the real URLs.

### Application form
The form currently performs client-side validation and displays a success state, but it does **not** send data anywhere. Connect a backend/form service before using it for real applications.

## Free deployment with GitHub Pages

1. Create a GitHub account.
2. Create a new repository, e.g. `bit-build-it-today`.
3. Upload `index.html`, `styles.css`, `script.js` and `README.md`.
4. In the repository open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select the `main` branch and `/ (root)`.
7. Save.
8. GitHub will publish the site at a free `github.io` address.

No software needs to be installed on your computer.
