# Google affiche « Vercel » et `u2g.vercel.app` — que faire ?

Google montre encore l’**ancienne** version indexée (hébergement Vercel). Le code du site est déjà configuré pour **Univers des Gadgets** et **www.universdesgadgets.com**. Il faut demander à Google de **mettre à jour** son index.

## 1. Vérifier le site (après déploiement)

Ouvrez en navigation privée :

| Test | OK si… |
|------|--------|
| https://www.universdesgadgets.com/ | Site visible, pas page blanche |
| https://u2g.vercel.app/ | Redirige vers `www.universdesgadgets.com` |
| https://www.universdesgadgets.com/favicon.png | Votre logo U2G |
| https://www.universdesgadgets.com/apple-touch-icon.png | Votre logo (grande taille) |

## 2. Google Search Console (indispensable)

1. Allez sur [Google Search Console](https://search.google.com/search-console).
2. **Ajoutez une propriété** : `https://www.universdesgadgets.com` (préfixe URL).
3. Validez la propriété — **guide complet (LWS + toutes méthodes)** : voir **`GOOGLE-SEARCH-CONSOLE-LWS.md`**.  
   La balise meta Google est déjà dans `index.html` : redéployez puis cliquez sur **Valider**.
4. Menu **Sitemaps** → ajoutez : `https://www.universdesgadgets.com/sitemap.xml`
5. Menu **Inspection de l’URL** → tapez `https://www.universdesgadgets.com/` → **Demander une indexation**.

Répétez pour les pages importantes : `/services`, `/contact`, `/galerie`.

## 3. Ancienne URL `u2g.vercel.app`

- Elle redirige déjà vers votre nouveau domaine (301).
- Dans Search Console, si l’ancienne propriété `u2g.vercel.app` existe : **Paramètres** → **Changement d’adresse** vers `www.universdesgadgets.com` (si l’option est proposée).
- Sinon, attendez que Google réindexe via le sitemap et les redirections (quelques jours à quelques semaines).

## 4. Logo dans les résultats Google

Google choisit le favicon selon [ses règles](https://developers.google.com/search/docs/appearance/favicon-in-search) :

- Fichier accessible : `/favicon.ico` et `/apple-touch-icon.png`
- Format carré, **au moins 48×48 px** (votre `apple-touch-icon.png` convient)
- Même domaine que la page indexée (`www.universdesgadgets.com`)

Le délai de mise à jour du favicon dans Google peut prendre **1 à 4 semaines** après réindexation.

## 5. Fichiers à garder à jour

| Fichier | Rôle |
|---------|------|
| `public/favicon.png` | Onglet navigateur (logo 3) |
| `public/apple-touch-icon.png` | Logo Google / mobile (180×180 px recommandé) |
| `public/favicon.ico` | Généré au build (`npm run build`) |

## 6. Ce que vous verrez dans Google (après mise à jour)

- **Nom** : Univers des Gadgets (plus « Vercel »)
- **URL** : https://www.universdesgadgets.com
- **Icône** : votre logo (plus le cœur Vercel)

Patience : la recherche Google ne change pas instantanément après un déploiement.
