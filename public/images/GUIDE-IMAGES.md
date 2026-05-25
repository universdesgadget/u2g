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

## Icône onglet navigateur (favicon — image séparée)

| Fichier | Taille | Usage |
|---------|--------|-------|
| `public/favicon.png` | **32×32 px** (obligatoire) | Onglet du navigateur |
| `public/apple-touch-icon.png` | **180×180 px** (optionnel) | Raccourci écran d’accueil iPhone / iPad |

**Conseils :** image **carrée**, symbole simple et lisible (pas de texte trop petit). PNG avec fond transparent ou fond uni contrasté. Exportez depuis votre logo une version **simplifiée** (icône seule), pas la bannière complète de la navbar.

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
