# Guide — Où placer vos images

Ajoutez les images dans les dossiers suivants (créés sous `public/images/`).

## 1. Carousel (page d'accueil) — 5 images

**Dossier :** `public/images/carousel/`

| Fichier | Description | Format recommandé |
|---------|-------------|-------------------|
| `carousel-1.jpg` | Slide 1 — Accroche principale | 1920×1080 px |
| `carousel-2.jpg` | Slide 2 — Galerie | 1920×1080 px |
| `carousel-3.jpg` | Slide 3 — Qualité | 1920×1080 px |
| `carousel-4.jpg` | Slide 4 — Réalisations | 1920×1080 px |
| `carousel-5.jpg` | Slide 5 — Localisation | 1920×1080 px |

---

## 2. Témoignages — 4 photos + 1 fond

**Dossier :** `public/images/testimonials/`

| Fichier | Description | Format recommandé |
|---------|-------------|-------------------|
| `temoignage-1.jpg` | Photo du client 1 (avatar) | 200×200 px (carré) |
| `temoignage-2.jpg` | Photo du client 2 (avatar) | 200×200 px (carré) |
| `temoignage-3.jpg` | Photo du client 3 (avatar) | 200×200 px (carré) |
| `temoignage-4.jpg` | Photo du client 4 (avatar) | 200×200 px (carré) |
| `temoignages-bg.jpg` | Image de fond de la section | 1920×800 px |

---

## 3. Contact — 1 fond

**Dossier :** `public/images/contact/`

| Fichier | Description | Format recommandé |
|---------|-------------|-------------------|
| `contact-bg.jpg` | Image de fond du formulaire de contact | 1920×1000 px |

---

## 4. Page À propos — 1 fond

**Dossier :** `public/images/about/`

| Fichier | Description | Format recommandé |
|---------|-------------|-------------------|
| `a-propos-bg.jpg` | Image de fond de la page À propos | 1920×600 px |

---

## Récapitulatif des chemins

```
public/
  images/
    carousel/
      carousel-1.jpg
      carousel-2.jpg
      carousel-3.jpg
      carousel-4.jpg
      carousel-5.jpg
    testimonials/
      temoignage-1.jpg
      temoignage-2.jpg
      temoignage-3.jpg
      temoignage-4.jpg
      temoignages-bg.jpg
    contact/
      contact-bg.jpg
    about/
      a-propos-bg.jpg
```

---

**Note :** En attendant vos images, le site affichera des images cassées. Vous pouvez temporairement utiliser `/og-image.jpg` (présent dans `public/`) comme placeholder en modifiant les constantes dans `src/lib/constants.ts`.
