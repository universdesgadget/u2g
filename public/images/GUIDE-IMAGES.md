# Guide — Où placer vos images

Placez toutes les images directement dans `public/images/`.

## Chemins des fichiers

| Fichier | Usage |
|---------|-------|
| `carousel-1.jpg` à `carousel-5.jpg` | Diaporama page d'accueil |
| `temoignage-1.jpg` à `temoignage-4.jpg` | Photos des clients (témoignages) |
| `temoignages-bg.jpg` | Fond de la section Témoignages |
| `contact-bg.jpg` | Fond du formulaire de contact |
| `a-propos-bg.jpg` | Fond de la page À propos |
| `partners/partner-1.png` … `partner-8.png` | Logos entreprises partenaires (fond transparent de préférence) |

## Logo navbar (inchangé)

| Fichier | Usage |
|---------|-------|
| `public/logo.png` | Logo dans la barre de navigation uniquement |

Recommandé : hauteur ~80–120 px, fond transparent si possible.

## Icône onglet navigateur (favicon)

| Fichier | Usage |
|---------|-------|
| `public/logo.png` | Logo **navbar** uniquement |
| `public/logo 3.png` | Fichier source de l’icône onglet (votre visuel) |
| `public/favicon.png` | Icône **onglet** servie par le site (copie de `logo 3.png`) |

Pour changer l’icône onglet : remplacez `logo 3.png`, puis recopiez-le en `favicon.png` (ou remplacez directement `favicon.png`).

**Important :** ne créez pas de `favicon.ico` en renommant un PNG.

## Structure du dossier

```
public/
  images/
    carousel-1.jpg
    carousel-2.jpg
    carousel-3.jpg
    carousel-4.jpg
    carousel-5.jpg
    temoignage-1.jpg
    temoignage-2.jpg
    temoignage-3.jpg
    temoignage-4.jpg
    temoignages-bg.jpg
    contact-bg.jpg
    a-propos-bg.jpg
    partners/
      partner-1.png
      partner-2.png
      …
      partner-8.png
```

## Formats recommandés

- **Carousel** : 1920×1080 px
- **Témoignages (avatars)** : 200×200 px (carré)
- **temoignages-bg** : 1920×800 px
- **contact-bg** : 1920×1000 px
- **a-propos-bg** : 1920×600 px
- **Logos partenaires** : 200–400 px de large, PNG avec fond transparent

**Note :** Si une image est manquante, le site utilisera `/og-image.jpg` comme image de secours.
