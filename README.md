# antl - Site Web Externe

Site vitrine de l'entreprise antl, spécialisée dans l'expérience client et les services de call center.

## 🚀 Stack Technique

- **Frontend** : React 19 + TypeScript + Vite
- **Styling** : SCSS avec variables et mixins
- **Routing** : React Router DOM v6
- **Animations** : AOS (Animate On Scroll)
- **Icônes** : React Icons
- **HTTP** : Axios
- **Déploiement** : Netlify

## 📁 Structure du Projet

```
src/
├── components/       # Composants UI réutilisables
├── views/           # Pages de l'application
├── context/         # React Context providers
├── utils/           # Utilitaires et styles globaux
├── assets/          # Assets statiques
├── App.tsx          # Composant principal avec routing
└── main.tsx         # Point d'entrée
```

## 🛠️ Commandes de Développement

```bash
# Serveur de développement
npm run dev

# Build de production
npm run build

# Linter
npm run lint

# Preview du build
npm run preview
```

## 📄 Pages

- **Accueil** (`/`) - Page d'accueil avec présentation des services
- **À propos** (`/about_us`) - Histoire et valeurs de l'entreprise
- **Contact** (`/contact_us`) - Formulaire de contact
- **Recrutement** (`/join_us`) - Offres d'emploi et candidatures

## 🎨 Composants Principaux

### Navigation
- **Header** - Navigation sticky avec menu mobile
- **Footer** - Pied de page avec liens et réseaux sociaux

### Accueil
- **HeroSection** - Section hero avec CTA
- **CallToAction** - Appel à l'action
- **OurExpertise** - Présentation des domaines d'expertise
- **ClientReviews** - Témoignages clients

### À Propos
- **OurStory** - Timeline de l'histoire de l'entreprise
- **WhatWeStandFor** - Valeurs et principes
- **MeetOurTeam** - Présentation de l'équipe
- **Quote** - Citation mise en avant
- **JoinUs** - Section recrutement

### Contact
- **GetInTouch** - Formulaire de contact + coordonnées

### Recrutement
- **JobApplication** - Offres d'emploi + formulaire de candidature

## 👥 Équipe

Projet développé pour antl - Experts de l'expérience client.

---

**Version** : 1.0
**Dernière mise à jour** : 2026-04-28

## Confidentialité et mesure d’audience

La fenêtre de consentement s’inspire du site personnel `ndecressac.fr`, avec l’identité antl. Accepter et refuser sont proposés au même niveau ; personnalisation sans option précochée. Le bouton « Gérer mes cookies » permet de rouvrir les choix. Le panneau est non bloquant : le fermer ne donne aucun consentement.

Le choix versionné est conservé en local pendant six mois, séparément sur chaque origine. Le stockage indisponible ne bloque pas le site. Google Analytics (`G-47QNW9WCG8`, propriété existante d’antl.fr) et Vercel Web Analytics restent désactivés tant que la mesure d’audience n’est pas acceptée. Les visites des deux sites se distinguent par leur hostname dans Google Analytics. Le retrait arrête Google Analytics, efface ses cookies accessibles et recharge la page pour enlever tous les écouteurs tiers. Les autres onglets du même site suivent le changement de choix.

Les cookies Google sont limités à 180 jours et au hostname du site ; les paramètres d’URL sont retirés des adresses de pages envoyées. Les signaux publicitaires Google sont désactivés. Vercel Web Analytics doit être activé dans le dashboard du projet (Hobby inclus pour le showcase). Les bloqueurs peuvent empêcher la collecte, même après acceptation.

Les informations et liens des fournisseurs figurent sur `https://antl.fr/legal#confidentialite`. Tests : `npm test` ; build : `npm run build`.
