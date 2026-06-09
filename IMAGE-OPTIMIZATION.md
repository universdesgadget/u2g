# Guide d'Optimisation des Images

## Images à compresser en priorité

### 1. Logo (2.2 MB) - URGENT
- **Fichier**: `/logo.png` 
- **Dimensions actuelles**: Probablement 1536x1024 ou plus
- **Dimensions recommandées pour affichage**: 54x36 (navbar)
- **Actions**:
  1. Réduire à 200x150px
  2. Convertir en WebP (économies de ~50%)
  3. Compresser avec TinyPNG ou ImageOptim
  4. **Estimé**: 2.2MB → 50-80KB

### 2. Carousel Images (250KB+) - HAUTE PRIORITÉ
- **Fichiers**: `/images/carousel-1.jpg`, `/images/carousel-2.jpg`
- **Dimensions actuelles**: 1357x2709 (trop grands)
- **Dimensions optimales**: 1920x1080 ou 1200x600 (max)
- **Actions**:
  1. Redimensionner à 1200x600px
  2. Convertir en WebP
  3. Compresser agressivement
  4. **Estimé par image**: 250KB → 40-60KB

### 3. Contact Background (508KB) - MOYENNE PRIORITÉ
- **Fichier**: `/images/contact-bg.jpg`
- **Actions**: Même traitement que carousel

## Outils recommandés

### En ligne (gratuit)
- https://tinypng.com/ - Compression PNG/JPG + WebP
- https://squoosh.app/ - Redimensionnement + compression
- https://convert-my-image.com/ - Conversion formats

### Ligne de commande (batch)
```bash
# Installer ImageMagick ou ffmpeg
# Batch convert + compress
for f in *.jpg; do
  convert "$f" -resize 1200x600 -quality 85 "optimized_${f%.jpg}.webp"
done
```

### Plugin VS Code
- **WebP Converter**: ID: `baldhead.webp-converter`
- **ImageMin**: ID: `evanwinter.imageminifier`

## Résultats estimés après optimisation

| Image | Avant | Après | Économies |
|-------|-------|-------|-----------|
| logo.png | 2.2 MB | 60 KB | 97% ↓ |
| carousel-1.jpg | 250 KB | 50 KB | 80% ↓ |
| carousel-2.jpg | 250 KB | 50 KB | 80% ↓ |
| contact-bg.jpg | 508 KB | 80 KB | 84% ↓ |
| **TOTAL** | **3.2 MB** | **240 KB** | **93% ↓** |

## Après compression

Mettre à jour le chemin dans `index.html`:
```html
<!-- Avant -->
<link rel="preload" as="image" href="/logo.png" />

<!-- Après (WebP avec fallback) -->
<picture>
  <source srcset="/logo.webp" type="image/webp">
  <img src="/logo.png" alt="Univers des Gadgets" loading="eager">
</picture>
```

## Actions à faire maintenant

1. ✅ Comprimer logo.png → logo.webp
2. ✅ Comprimer carousel images → WebP
3. ✅ Comprimer contact-bg.jpg → WebP  
4. Ajouter support WebP avec fallback JPG dans les composants
5. Ajouter responsive images (srcset) pour les images Supabase

## Caching HTTP

Les images devraient avoir un cache TTL long:
```
Cache-Control: public, max-age=31536000, immutable
```

Vérifié dans Lighthouse: ✅ 1h de cache configuré
