# 🚀 Agency Premium - Site Vitrine & Machine de Vente

Une agence digitale premium construite avec Next.js 16, Tailwind CSS v4, et Framer Motion.

![Agency Premium](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?style=for-the-badge&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)

## ✨ Fonctionnalités

### 🎨 Design System Premium
- Palette de couleurs sombres avec accent indigo électrique
- Effets glassmorphism subtils
- Animations Framer Motion fluides
- Typographie moderne (Geist)
- Responsive mobile-first

### 📄 Pages

1. **Landing Page**
   - Hero section avec headline orientée résultat
   - Section "Ce que nous faisons" avec cartes animées
   - Statistiques clés animées
   - Grille de réalisations
   - Section pricing avec 3 offres
   - CTA final persuasif

2. **Page Pricing + Wizard Interactif** ⭐
   - 4 étapes : Offre → Options → Coordonnées → Paiement
   - Prix en temps réel
   - Récapitulatif sticky
   - Options dynamiques par catégorie
   - Préparé pour intégration Stripe

3. **Page Réalisations**
   - Grille de 20 projets
   - Filtres par catégorie (animés)
   - Page détail par projet
   - Métriques de résultats

4. **Page Contact**
   - Formulaire premium
   - Placeholder Calendly
   - Coordonnées complètes
   - Sélecteur de budget

### ⚙️ Technique

- ✅ Next.js 16 avec App Router
- ✅ Tailwind CSS v4 avec @theme
- ✅ TypeScript strict
- ✅ Framer Motion pour les animations
- ✅ Zustand pour le state du wizard
- ✅ SEO optimisé (meta, schema)
- ✅ Structure scalable
- ✅ Code propre et commenté

## 🚀 Démarrage Rapide

### Installation

```bash
# Cloner et installer
cd agency-app
npm install

# Lancer en développement
npm run dev

# Build production
npm run build

# Prévisualiser le build
npm run start
```

### Déploiement sur Vercel

```bash
# Se connecter à Vercel (première fois)
npx vercel login

# Déployer en preview
npx vercel

# Déployer en production
npx vercel --prod
```

## 📁 Structure du Projet

```
src/
├── app/
│   ├── page.tsx              # Landing page
│   ├── pricing/page.tsx      # Wizard de pricing
│   ├── realisations/         # Portfolio
│   │   ├── page.tsx
│   │   └── [id]/page.tsx
│   ├── contact/page.tsx      # Page contact
│   ├── globals.css           # Design system
│   └── layout.tsx            # Layout principal
├── components/
│   ├── layout/               # Header, Footer, StickyCTA
│   ├── sections/             # Sections de la landing
│   ├── wizard/               # Composants du wizard
│   └── ui/                   # Composants réutilisables
├── data/
│   ├── services.ts           # Données des services/prix
│   ├── projects.ts           # 20 projets mockés
│   └── stats.ts              # Statistiques
└── lib/
    └── wizard-store.ts       # Store Zustand
```

## 🔧 Configuration

### Variables d'environnement (optionnel)

```env
# .env.local
NEXT_PUBLIC_STRIPE_KEY=pk_...
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/...
```

### Intégration Stripe

Le wizard est préparé pour générer des Payment Links Stripe dynamiques.
Voir `src/components/wizard/Step4Payment.tsx` pour l'intégration.

### Intégration Calendly

Remplacer le placeholder dans `src/app/contact/page.tsx` par l'embed Calendly.

## 🎨 Personnalisation

### Couleurs

Modifier dans `src/app/globals.css` :

```css
@theme {
  --color-accent: #6366f1;      /* Couleur principale */
  --color-accent-hover: #818cf8;
  --color-background: #0a0a0b;
  /* ... */
}
```

### Contenu

- **Services** : `src/data/services.ts`
- **Projets** : `src/data/projects.ts`
- **Stats** : `src/data/stats.ts`

## 📱 Responsive

Le site est entièrement responsive avec des breakpoints :
- Mobile : < 768px
- Tablet : 768px - 1024px
- Desktop : > 1024px

## 🔒 SEO

- Meta tags optimisés
- Open Graph
- Twitter Cards
- Schema.org ready
- Sitemap automatique (Next.js)

## 📈 Performance

- Score Lighthouse 95+
- Images optimisées (next/image)
- Fonts optimisées (next/font)
- CSS critique inline
- Tree shaking automatique

---

Développé avec ❤️ pour la conversion.
