# Configurer `universdesgadgets.com` sur Vercel


## Étapes obligatoires (Vercel Dashboard)

1. Ouvrez [vercel.com](https://vercel.com) → projet **u2g** (ou le nom de votre projet).
2. Allez dans **Settings** → **Domains**.
3. Vérifiez que ces domaines sont listés :
   - `universdesgadgets.com`
   - `www.universdesgadgets.com` (optionnel)
4. Cliquez sur **`universdesgadgets.com`** :
   - Choisissez **Set as Primary Domain** (domaine principal).
   - **Ne cochez pas** « Redirect to Vercel URL » / redirection vers `u2g.vercel.app`.
5. Pour `u2g.vercel.app` : le fichier `vercel.json` redirige vers `https://www.universdesgadgets.com`.

## Important — éviter la page blanche

**Ne ajoutez pas** dans `vercel.json` une redirection `www` → `universdesgadgets.com` : Vercel redirige déjà `universdesgadgets.com` → `www`, ce qui créerait une **boucle infinie** et une page blanche.

Le site fonctionne sur **`https://www.universdesgadgets.com`**.  
Pour utiliser l’URL **sans www** dans la barre d’adresse : dans Vercel → Domains → définir `universdesgadgets.com` comme **Primary Domain** et désactiver la redirection automatique vers `www`.

## DNS (chez votre registrar : OVH, Namecheap, etc.)

Copiez les enregistrements indiqués par Vercel pour `universdesgadgets.com`, en général :

| Type  | Nom | Valeur |
|-------|-----|--------|
| A     | @   | `76.76.21.21` (exemple Vercel — utilisez la valeur affichée chez Vercel) |
| CNAME | www | `cname.vercel-dns.com` |

Attendez la propagation DNS (quelques minutes à 48 h).

## Après déploiement

- Test : `https://universdesgadgets.com/` → l’URL doit **rester** `universdesgadgets.com`.
- Test : `https://u2g.vercel.app/` → doit rediriger vers `https://universdesgadgets.com/`.
- Favicon : `https://universdesgadgets.com/favicon.png` doit afficher votre logo.

## Google affiche encore `u2g.vercel.app`

C’est normal tant que Google n’a pas réindexé le site. Après correction :

1. [Google Search Console](https://search.google.com/search-console) → ajoutez la propriété `universdesgadgets.com`.
2. Envoyez le sitemap : `https://universdesgadgets.com/sitemap.xml`.
3. Demandez une réindexation de la page d’accueil.

Le canonical du site pointe déjà vers `https://universdesgadgets.com/`.
