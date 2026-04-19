export interface Service {
  id: string;
  title: string;
  category: string;
  desc: string;
  tags: string[];
  fullDescription: string;
  benefits: string[];
  process: { step: string; desc: string }[];
  techStack: string[];
  deliverables: string[];
}

export const servicesData: Service[] = [
  {
    id: "web-apps",
    title: "Applications Web",
    category: "Développement",
    desc: "Création d'applications web sur-mesure, performantes et sécurisées. Du prototype au déploiement, nous utilisons les meilleurs frameworks actuels.",
    tags: ["React", "Node.js", "Architecture Scalable"],
    fullDescription: "Nous concevons des plateformes robustes taillées pour votre activité. Nos applications web sont pensées pour être évolutives, sécurisées, et offrir des performances de premier ordre sur tous les appareils.",
    benefits: ["Technologies modernes (React, Next.js, Node.js)", "Hébergement scalable et sécurisé", "Interfaces fluides et réactives (SPA)"],
    process: [
      { step: "Cadrage technique", desc: "Analyse des besoins et choix de l'architecture logicielle optimale." },
      { step: "Prototypage", desc: "Création des premiers écrans et validation des parcours utilisateurs." },
      { step: "Développement", desc: "Production du code (Front-end & Back-end) selon les normes Clean Code." },
      { step: "Recette & Déploiement", desc: "Tests approfondis et mise en production sur infrastructure Cloud." }
    ],
    techStack: ["React", "Next.js", "Node.js", "PostgreSQL", "TailwindCSS", "AWS/Vercel"],
    deliverables: ["Code source documenté", "Application déployée", "Back-office sur-mesure", "Formation de vos équipes"]
  },
  {
    id: "intelligence-artificielle",
    title: "Intelligence Artificielle",
    category: "Innovation",
    desc: "Intégration de briques d'IA pour enrichir vos outils : LLM personnalisés, analyse de données, générateurs de contenus et chatbots intelligents.",
    tags: ["Machine Learning", "LLM", "Data Analysis"],
    fullDescription: "L'Intelligence Artificielle n'est plus le futur, c'est le présent. Nous identifions avec vous les cas d'usage pertinents et développons des solutions sur-mesure combinant LLMs, modèles prédictifs et automatisation intelligente.",
    benefits: ["Chatbots et assistants virtuels", "Génération automatique de contenu", "Connexion à vos bases de connaissances privées (RAG)"],
    process: [
      { step: "Audit Data", desc: "Analyse de vos données internes et de leur potentiel." },
      { step: "Proof of Concept (POC)", desc: "Développement d'un prototype pour valider la faisabilité." },
      { step: "Intégration métier", desc: "Développement complet et connexion de l'IA à vos outils métiers." },
      { step: "Scalabilité & Suivi", desc: "Déploiement à grande échelle et suivi des performances des modèles." }
    ],
    techStack: ["OpenAI (GPT-4)", "Anthropic / Claude", "Python", "LangChain", "Vector DB (Pinecone)"],
    deliverables: ["Modèle et prompts optimisés", "API IA dédiée", "Interface d'administration", "Monitoring de consommation"]
  },
  {
    id: "sites-web",
    title: "Sites Web & Plateformes",
    category: "Digital",
    desc: "Conception de sites vitrines, e-commerce et portails web. Une présence en ligne optimisée pour le SEO et parfaitement responsive.",
    tags: ["Site Vitrine", "E-commerce", "SEO"],
    fullDescription: "Votre site internet est le reflet de votre marque. Que vous ayez besoin d'une vitrine élégante ou d'une boutique en ligne complexe, nous nous assurons que l'expérience soit irréprochable et performante.",
    benefits: ["Design exclusif et responsive", "Optimisation avancée pour le référencement (SEO)", "Performances premium (Core Web Vitals)"],
    process: [
      { step: "Stratégie digitale", desc: "Définition des objectifs et de l'arborescence (Sitemap)." },
      { step: "Webdesign", desc: "Création graphique des pages en alignement avec votre marque." },
      { step: "Intégration Custom", desc: "Développement front-end pixel-perfect et animations." },
      { step: "Optimisation & Lancement", desc: "Réglages SEO, optimisation de la vitesse et mise en ligne." }
    ],
    techStack: ["Webflow", "Next.js", "WordPress / Headless", "Shopify", "TailwindCSS"],
    deliverables: ["Site web performant en ligne", "Setup technique SEO", "Outils d'Analytics configurés", "Formation CMS (Gestion)"]
  },
  {
    id: "design-ux-ui",
    title: "Design UX/UI",
    category: "Création",
    desc: "Design d'interfaces ergonomiques et esthétiques. Nous transformons la complexité en parcours utilisateurs simples, fluides et mémorables.",
    tags: ["Prototypage", "Wireframes", "Design System"],
    fullDescription: "Parce qu'un bon produit est avant tout un produit facile à utiliser. Nous analysons vos utilisateurs et concevons des parcours fluides (UX) couplés à une identité visuelle marquante (UI).",
    benefits: ["Conception centrée utilisateur", "Systèmes de composants (Design System)", "Tests utilisateurs et itérations"],
    process: [
      { step: "Recherche UX", desc: "Interviews utilisateurs, Benchmark et définition des personas." },
      { step: "Wireframing", desc: "Création des parcours et de la structure des pages sans habillage." },
      { step: "Direction Artistique", desc: "Création de l'identité visuelle (couleurs, typo, moodboard)." },
      { step: "Prototypage UI", desc: "Design final interactif et création du système de composants." }
    ],
    techStack: ["Figma", "Adobe Creative Cloud", "Framer", "Miro / FigJam"],
    deliverables: ["Maquettes haute fidélité", "Prototype interactif", "Design System complet", "Assets exportés"]
  },
  {
    id: "automatisation",
    title: "Automatisation",
    category: "Productivité",
    desc: "Optimisation de vos processus métiers grâce à l'automatisation. Connectez vos outils entre eux pour gagner un temps précieux au quotidien.",
    tags: ["Make/Zapier", "Scripts Custom", "API"],
    fullDescription: "Ne perdez plus de temps sur les tâches répétitives. Nous synchronisons vos logiciels (CRM, ERP, emails...) pour générer des workflows sans faille qui libèrent votre équipe.",
    benefits: ["Suppression des saisies manuelles", "Développement d'APIs sur-mesure", "Outils No-Code/Low-Code (Make, Zapier)"],
    process: [
      { step: "Cartographie", desc: "Analyse de vos processus actuels et identification des goulets d'étranglement." },
      { step: "Logiciel & Setup", desc: "Sélection des meilleurs outils tiers pour résoudre le problème." },
      { step: "Création des Workflows", desc: "Connexion des APIs et création des scénarios d'automatisation." },
      { step: "Monitoring", desc: "Phase de test, détection des pannes et maintenance préventive." }
    ],
    techStack: ["Make (ex-Integromat)", "Zapier", "n8n", "Node.js (Scripts)", "API REST/GraphQL"],
    deliverables: ["Scénarios actifs et testés", "Documentation des flux", "Dashboard de monitoring", "Alerting en cas d'erreur"]
  }
];
