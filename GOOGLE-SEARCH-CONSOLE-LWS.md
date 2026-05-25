# Valider Google Search Console — `www.universdesgadgets.com` (domaine LWS)

Ce guide reprend **toutes** les méthodes proposées par Google, avec des étapes adaptées à votre site (Vercel + domaine acheté chez **LWS**).

---

## Avant de commencer

1. Déployez la dernière version du site sur **Vercel** (commit + push).
2. Vérifiez que le site s’ouvre : **https://www.universdesgadgets.com/**
3. Ouvrez [Google Search Console](https://search.google.com/search-console).

---

## Méthode recommandée : balise HTML (déjà ajoutée au projet)

La balise suivante est **déjà dans** `index.html` du projet :

```html
<meta name="google-site-verification" content="T0da7OCiNKc4qSSeyRRSfwD1bXjvz0Pcwwy-GsNdf7k" />
```

### Étapes

1. **Redéployez** le site sur Vercel (si ce n’est pas déjà fait après l’ajout de la balise).
2. Attendez 2 à 5 minutes.
3. Vérifiez la balise :
   - Ouvrez https://www.universdesgadgets.com/
   - Clic droit → **Afficher le code source de la page**
   - Cherchez `google-site-verification` — la balise doit apparaître dans le `<head>`.
4. Dans Search Console, onglet **Balise HTML** → cliquez sur **Valider**.
5. **Ne supprimez pas** cette balise après validation (sinon vous perdez le statut de propriétaire).

### Si la validation échoue

- Le déploiement Vercel n’est pas à jour → refaites un push.
- Vous validez `universdesgadgets.com` sans `www` alors que la propriété est `www.universdesgadgets.com` → utilisez exactement la même URL que dans Search Console.

---

## Méthode 2 : fichier HTML

Google vous propose de télécharger un fichier (nom du type `googleXXXXXXXX.html`).

### Étapes

1. Dans Search Console, méthode **Fichier HTML** → **Télécharger** le fichier.
2. Copiez ce fichier dans le dossier **`public/`** de votre projet (à côté de `favicon.png`).
   ```
   public/
     googleXXXXXXXX.html   ← le fichier téléchargé
   ```
3. Commit + push → attendez le redéploiement Vercel.
4. Testez dans le navigateur :  
   `https://www.universdesgadgets.com/googleXXXXXXXX.html`  
   (remplacez par le vrai nom du fichier) — la page doit s’afficher (souvent vide ou avec un court texte).
5. Dans Search Console → **Valider**.
6. **Ne supprimez pas** ce fichier après validation.

---

## Méthode 3 : enregistrement DNS TXT (LWS)

Utile si la balise HTML ne fonctionne pas, ou pour valider tout le domaine `universdesgadgets.com`.

### Valeur à copier (exactement)

```
google-site-verification=T0da7OCiNKc4qSSeyRRSfwD1bXjvz0Pcwwy-GsNdf7k
```

### Étapes sur LWS

1. Connectez-vous à **[lws.fr](https://www.lws.fr)** → **Espace client**.
2. Menu **Domaines** → cliquez sur **`universdesgadgets.com`**.
3. Ouvrez la zone **DNS** / **Gestion DNS** / **Zone DNS** (libellé selon l’interface LWS).
4. **Ajoutez un enregistrement** :
   | Champ | Valeur |
   |-------|--------|
   | **Type** | `TXT` |
   | **Nom / Hôte / Sous-domaine** | `@` (ou laissez vide pour la racine du domaine) |
   | **Valeur / Contenu** | `google-site-verification=T0da7OCiNKc4qSSeyRRSfwD1bXjvz0Pcwwy-GsNdf7k` |
   | **TTL** | 3600 (ou par défaut) |
5. **Enregistrez** la modification.
6. (Optionnel) Pour `www`, certains panneaux LWS demandent un second TXT sur l’hôte `www` — en général **un seul TXT sur `@` suffit** pour Google.
7. Attendez **15 minutes à 24 heures** (propagation DNS).
8. Vérifiez la propagation (outil en ligne) : cherchez « DNS TXT lookup universdesgadgets.com ».
9. Dans Search Console → méthode **Fournisseur de nom de domaine** → **Valider**.

### Important LWS + Vercel

- Les enregistrements **A** / **CNAME** qui pointent le site vers **Vercel** ne doivent **pas** être supprimés.
- Vous **ajoutez** seulement le TXT Google, vous ne remplacez pas toute la zone.
- Si le domaine est encore en **redirection LWS** vers une autre page, désactivez-la : le site doit pointer vers **Vercel** (DNS indiqués dans Vercel → Domains).

### DNS Vercel (rappel, souvent déjà configuré chez LWS)

| Type | Nom | Valeur |
|------|-----|--------|
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` |

(Copiez les valeurs **exactes** affichées dans Vercel → Settings → Domains.)

---

## Méthode 4 : Google Analytics

À utiliser **uniquement si** vous avez déjà installé Google Analytics sur le site.

1. Créez une propriété GA4 pour `www.universdesgadgets.com`.
2. Installez le code `gtag.js` dans le `<head>` de `index.html` (non fait par défaut sur ce projet).
3. Dans Search Console → **Google Analytics** → Valider.

*Ce projet n’inclut pas Analytics par défaut — préférez la **balise HTML**.*

---

## Méthode 5 : Google Tag Manager

À utiliser **uniquement si** vous utilisez déjà GTM.

1. Conteneur GTM installé sur toutes les pages.
2. Droits **Publier** sur le conteneur.
3. Search Console → **Google Tag Manager** → Valider.

*Non configuré sur ce projet par défaut.*

---

## Après validation réussie

1. **Sitemaps** → ajoutez :  
   `https://www.universdesgadgets.com/sitemap.xml`
2. **Inspection de l’URL** → `https://www.universdesgadgets.com/` → **Demander une indexation**.
3. Répétez pour `/services`, `/contact`, `/galerie` si besoin.

Voir aussi **`GOOGLE-INDEXATION.md`** pour le remplacement de `u2g.vercel.app` dans les résultats Google.

---

## Récapitulatif — quelle méthode choisir ?

| Méthode | Difficulté | Recommandation |
|---------|------------|----------------|
| **Balise HTML** | Facile | ✅ **Oui** — déjà dans le code, redéployez puis Valider |
| **Fichier HTML** | Facile | ✅ Si la balise échoue |
| **DNS TXT (LWS)** | Moyen | ✅ Si vous préférez tout gérer chez LWS |
| Google Analytics | — | Seulement si GA déjà installé |
| Google Tag Manager | — | Seulement si GTM déjà installé |

---

## Support LWS

- Aide LWS : [support.lws.fr](https://support.lws.fr)
- Mot-clé dans l’aide : **« modifier zone DNS »**, **« enregistrement TXT »**

---

## Code de vérification (référence)

- **Balise meta :** `T0da7OCiNKc4qSSeyRRSfwD1bXjvz0Pcwwy-GsNdf7k`
- **TXT DNS :** `google-site-verification=T0da7OCiNKc4qSSeyRRSfwD1bXjvz0Pcwwy-GsNdf7k`

**Ne partagez pas ce code publiquement** en dehors de votre site / DNS (il est déjà dans ce fichier projet privé).
