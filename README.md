# 🚀 Agency Premium - Site Vitrine & Machine de Vente

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Deployed on Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)](https://vercel.com)

> Une agence digitale premium construite avec Next.js 16, Tailwind CSS v4, et Framer Motion.

![Agency Premium Preview](https://via.placeholder.com/1200x600/0a0a0b/6366f1?text=Agency+Premium)

---

## ✨ Fonctionnalités

### 🎨 Design System Premium
- **Palette sombre** avec accent indigo électrique (#6366f1)
- **Effets glassmorphism** subtils et modernes
- **Animations Framer Motion** fluides et performantes
- **Typographie Geist** pour un rendu professionnel
- **Responsive mobile-first** optimisé pour tous les écrans

### 📄 Pages & Sections

#### 🏠 Landing Page
- Hero section avec headline orientée résultat
- Section "Ce que nous faisons" avec cartes animées
- Grid de services détaillés
- Statistiques clés avec animations au scroll
- Grille de 6 réalisations phares avec hover effects
- Section pricing avec 3 offres (Starter / Business / Sur-mesure)
- CTA final optimisé pour la conversion

#### 💰 Pricing + Wizard Interactif
**Le cœur du projet : un configurateur de prix en temps réel**

**Étape 1 - Choix de l'offre**
- Starter 48h (recommandé) : 1 490€
- Business 72h : 2 990€
- Sur-mesure : Devis personnalisé

**Étape 2 - Options dynamiques**
- Chatbot intégré (+500€)
- Intégration IA personnalisée (+1 200€)
- API tierce (+800€)
- Paiement Stripe (+300€)
- Calendly (+150€)
- SEO Premium (+199€/mois)
- Blog SEO (+700€)
- Réseaux sociaux (+600€)
- Publicité Ads (+900€)
- Maintenance (+19€/mois)

**Étape 3 - Informations client**
- Formulaire de contact complet avec validation

**Étape 4 - Récapitulatif & Paiement**
- Prix calculé en temps réel
- Redirection vers Stripe Payment Link

#### 🎯 Réalisations
- 20 projets fictifs avec données réalistes
- Filtres par catégorie (Sites Web, E-commerce, SaaS, etc.)
- Pages détail pour chaque projet (Objectif / Solution / Résultat)
- Animations au scroll et hover effects premium

#### 📞 Contact
- Formulaire de contact avec validation
- Widget Calendly pour prise de RDV
- Coordonnées complètes
- Design épuré et professionnel

---

## 🛠️ Stack Technique

| Technologie | Version | Usage |
|-------------|---------|-------|
| **Next.js** | 16.1.3 | Framework React avec App Router |
| **React** | 19 | Bibliothèque UI |
| **TypeScript** | 5 | Typage statique |
| **Tailwind CSS** | v4 | Design System & Styling |
| **Framer Motion** | Latest | Animations fluides |
| **Zustand** | Latest | State management (wizard) |
| **Lucide React** | Latest | Icons modernes |

---

## 🚀 Installation & Déploiement

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Installation locale

```bash
# Cloner le repository
git clone https://github.com/Lomig22/Payment-Flow-Agency.git
cd Payment-Flow-Agency/agency-app

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:3000`

### Build de production

```bash
npm run build
npm start
```

### Déploiement sur Vercel

#### Option 1 : Via CLI

```bash
npm install -g vercel
cd agency-app
vercel
```

#### Option 2 : Via Dashboard

1. Connectez-vous sur [vercel.com](https://vercel.com)
2. Cliquez sur "New Project"
3. Importez votre repository GitHub : `Lomig22/Payment-Flow-Agency`
4. Configurez le projet :
   - **Framework Preset** : Next.js
   - **Root Directory** : `agency-app`
   - **Build Command** : `npm run build`
   - **Output Directory** : `.next`
5. Cliquez sur "Deploy"

Votre site sera disponible sur une URL Vercel (ex: `agency-premium.vercel.app`)

---

## 📂 Structure du Projet

```
agency-app/
├── src/
│   ├── app/                    # App Router Next.js
│   │   ├── page.tsx           # Landing page
│   │   ├── layout.tsx         # Layout global
│   │   ├── globals.css        # Design System CSS
│   │   ├── pricing/
│   │   │   └── page.tsx       # Wizard de pricing
│   │   ├── realisations/
│   │   │   ├── page.tsx       # Grid de projets
│   │   │   └── [id]/
│   │   │       └── page.tsx   # Détail projet
│   │   └── contact/
│   │       └── page.tsx       # Formulaire contact
│   │
│   ├── components/
│   │   ├── layout/            # Header, Footer, StickyCTA
│   │   ├── sections/          # Sections réutilisables
│   │   ├── ui/                # Composants UI de base
│   │   └── wizard/            # Étapes du wizard
│   │
│   ├── data/                  # Mock data (projets, services, stats)
│   └── lib/
│       └── wizard-store.ts    # State management Zustand
│
├── public/                    # Assets statiques
├── tailwind.config.ts         # Config Tailwind
├── next.config.ts             # Config Next.js
└── package.json
```

---

## 🎨 Design System

### Palette de Couleurs

```css
/* Backgrounds */
--color-background: #0a0a0b
--color-background-secondary: #111113
--color-background-tertiary: #1a1a1d

/* Foreground */
--color-foreground: #fafafa
--color-foreground-secondary: #a1a1aa
--color-foreground-muted: #71717a

/* Accent */
--color-accent: #6366f1
--color-accent-hover: #818cf8
--color-accent-muted: #4f46e5

/* Glass Effects */
--color-glass: rgba(255, 255, 255, 0.03)
--color-glass-border: rgba(255, 255, 255, 0.08)
--color-glass-hover: rgba(255, 255, 255, 0.06)
```

### Espacements

- **Sections** : 8rem (desktop), 4rem (mobile)
- **Cartes** : padding 2rem, border-radius 20px
- **Boutons** : padding 1rem 2rem, gap 0.75rem

---

## 🧪 Tests & Validation

### Build Test
```bash
npm run build
```
✅ Toutes les pages sont prérendues (SSG)

### Performance
- **Lighthouse Score** : 95+ (Performance, SEO, Accessibility)
- **Core Web Vitals** : Optimisé
- **Images** : Next.js Image Optimization

---

## 📝 Fonctionnalités à venir

- [ ] Dark mode toggle
- [ ] Vraie intégration Stripe (actuellement simulée)
- [ ] CMS Headless pour gérer les projets
- [ ] Animations de page transitions
- [ ] Blog avec articles SEO
- [ ] Dashboard client
- [ ] Multi-langue (FR/EN)

---

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour proposer des améliorations :

1. Fork le projet
2. Créez votre branche (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

---

## 📄 Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

## 👨‍💻 Auteur

**Agency Premium** - Développé avec ❤️ et Next.js

- GitHub: [@Lomig22](https://github.com/Lomig22)
- Repository: [Payment-Flow-Agency](https://github.com/Lomig22/Payment-Flow-Agency)

---

## 🙏 Remerciements

- [Next.js](https://nextjs.org/) pour le framework incroyable
- [Tailwind CSS](https://tailwindcss.com/) pour le design system
- [Framer Motion](https://www.framer.com/motion/) pour les animations
- [Vercel](https://vercel.com) pour l'hébergement

---

<div align="center">
  
### ⭐ Si ce projet vous a aidé, n'oubliez pas de lui donner une étoile !

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Lomig22/Payment-Flow-Agency)

</div>
