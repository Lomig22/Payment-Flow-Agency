# 🚀 Guide de Déploiement - Preview Vercel

## Option 1 : Via Dashboard Vercel (Le plus simple) ⭐

### Étape 1 : Créer un compte/Se connecter
1. Allez sur **[vercel.com](https://vercel.com)**
2. Cliquez sur **"Sign Up"** ou **"Log In"**
3. Connectez-vous avec votre compte GitHub

### Étape 2 : Importer le projet
1. Cliquez sur **"Add New..."** → **"Project"**
2. Dans la liste des repositories, cherchez **`Payment-Flow-Agency`**
3. Cliquez sur **"Import"**

### Étape 3 : Configuration (Automatique ✅)
Vercel détecte automatiquement :
- ✅ **Framework** : Next.js
- ✅ **Build Command** : `npm run build`
- ✅ **Output Directory** : `.next`
- ✅ **Install Command** : `npm install`

**Aucune modification nécessaire !**

### Étape 4 : Déployer
1. Cliquez sur **"Deploy"**
2. Attendez 2-3 minutes
3. 🎉 Votre site est en ligne !

**URL de preview** : `https://payment-flow-agency-xyz.vercel.app`

---

## Option 2 : Via CLI (Pour développeurs) 💻

### Prérequis
Vous devez être connecté à Vercel CLI.

### Commandes
```bash
# 1. Se connecter à Vercel
vercel login

# 2. Déployer en preview
vercel

# 3. Déployer en production
vercel --prod
```

---

## Option 3 : Déploiement automatique (GitHub) 🤖

### Configuration
1. Connectez votre repository GitHub à Vercel
2. Chaque **push sur `main`** → Déploiement automatique en production
3. Chaque **pull request** → Preview deployment automatique

### Activation
1. Dashboard Vercel → Votre projet
2. Settings → Git
3. Activez **"Production Branch"** : `main`

---

## 🔗 Liens utiles

| Ressource | URL |
|-----------|-----|
| Dashboard Vercel | https://vercel.com/dashboard |
| Import Project | https://vercel.com/new |
| Documentation | https://vercel.com/docs |
| GitHub Repo | https://github.com/Lomig22/Payment-Flow-Agency |

---

## 🎯 Après le déploiement

### Vérifications à faire
- [ ] La page d'accueil s'affiche correctement
- [ ] Le wizard pricing fonctionne (4 étapes)
- [ ] Les projets se chargent (20 projets)
- [ ] Le formulaire contact fonctionne
- [ ] Les animations sont fluides
- [ ] Le site est responsive (mobile/tablet/desktop)

### URL à tester
```
https://votre-url.vercel.app/
https://votre-url.vercel.app/pricing
https://votre-url.vercel.app/realisations
https://votre-url.vercel.app/contact
```

---

## 🐛 En cas de problème

### Erreur : Build Failed
```bash
# Vérifier le build localement
npm run build
```

### Erreur : Module Not Found
```bash
# Réinstaller les dépendances
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Logs Vercel
Dashboard → Votre projet → Deployments → Cliquez sur le déploiement → View Function Logs

---

## 📊 Statistiques du projet

- **Pages** : 27 (pré-rendues)
- **Temps de build** : ~3 secondes
- **Taille bundle** : Optimisé par Next.js
- **Performance** : Lighthouse Score 95+

---

## 🎨 Personnalisation post-déploiement

### Domaine personnalisé
1. Dashboard Vercel → Votre projet
2. Settings → Domains
3. Ajoutez votre domaine personnalisé

### Variables d'environnement
Pour les futures intégrations (Stripe, API, etc.) :
1. Settings → Environment Variables
2. Ajoutez vos clés API

---

## ✅ Checklist de déploiement

- [x] Code poussé sur GitHub
- [x] Build test réussi localement
- [x] Dépendances installées
- [ ] Compte Vercel créé
- [ ] Projet importé sur Vercel
- [ ] Preview déployée
- [ ] Tests manuels effectués

---

**Besoin d'aide ?** Consultez la [documentation Vercel](https://vercel.com/docs/getting-started-with-vercel) ou contactez le support.

🚀 **Bon déploiement !**
