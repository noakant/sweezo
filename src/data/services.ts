export interface Service {
  id: string;
  title: string;
  category: string;
  desc: string;
  tags: string[];
  fullDescription: string;
  benefits: string[];
}

export const servicesData: Service[] = [
  {
    id: "web-apps",
    title: "Applications Web",
    category: "Développement",
    desc: "Création d'applications web sur-mesure, performantes et sécurisées. Du prototype au déploiement, nous utilisons les meilleurs frameworks actuels.",
    tags: ["React", "Node.js", "Architecture Scalable"],
    fullDescription: "Nous concevons des plateformes robustes taillées pour votre activité. Nos applications web sont pensées pour être évolutives, sécurisées, et offrir des performances de premier ordre sur tous les appareils.",
    benefits: ["Technologies modernes (React, Next.js, Node.js)", "Hébergement scalable et sécurisé", "Interfaces fluides et réactives (SPA)"]
  },
  {
    id: "intelligence-artificielle",
    title: "Intelligence Artificielle",
    category: "Innovation",
    desc: "Intégration de briques d'IA pour enrichir vos outils : LLM personnalisés, analyse de données, générateurs de contenus et chatbots intelligents.",
    tags: ["Machine Learning", "LLM", "Data Analysis"],
    fullDescription: "L'Intelligence Artificielle n'est plus le futur, c'est le présent. Nous identifions avec vous les cas d'usage pertinents et développons des solutions sur-mesure combinant LLMs, modèles prédictifs et automatisation intelligente.",
    benefits: ["Chatbots et assistants virtuels", "Génération automatique de contenu", "Connexion à vos bases de connaissances privées (RAG)"]
  },
  {
    id: "sites-web",
    title: "Sites Web & Plateformes",
    category: "Digital",
    desc: "Conception de sites vitrines, e-commerce et portails web. Une présence en ligne optimisée pour le SEO et parfaitement responsive.",
    tags: ["Site Vitrine", "E-commerce", "SEO"],
    fullDescription: "Votre site internet est le reflet de votre marque. Que vous ayez besoin d'une vitrine élégante ou d'une boutique en ligne complexe, nous nous assurons que l'expérience soit irréprochable et performante.",
    benefits: ["Design exclusif et responsive", "Optimisation avancée pour le référencement (SEO)", "Performances premium (Core Web Vitals)"]
  },
  {
    id: "design-ux-ui",
    title: "Design UX/UI",
    category: "Création",
    desc: "Design d'interfaces ergonomiques et esthétiques. Nous transformons la complexité en parcours utilisateurs simples, fluides et mémorables.",
    tags: ["Prototypage", "Wireframes", "Design System"],
    fullDescription: "Parce qu'un bon produit est avant tout un produit facile à utiliser. Nous analysons vos utilisateurs et concevons des parcours fluides (UX) couplés à une identité visuelle marquante (UI).",
    benefits: ["Conception centrée utilisateur", "Systèmes de composants (Design System)", "Tests utilisateurs et itérations"]
  },
  {
    id: "automatisation",
    title: "Automatisation",
    category: "Productivité",
    desc: "Optimisation de vos processus métiers grâce à l'automatisation. Connectez vos outils entre eux pour gagner un temps précieux au quotidien.",
    tags: ["Make/Zapier", "Scripts Custom", "API"],
    fullDescription: "Ne perdez plus de temps sur les tâches répétitives. Nous synchronisons vos logiciels (CRM, ERP, emails...) pour générer des workflows sans faille qui libèrent votre équipe.",
    benefits: ["Suppression des saisies manuelles", "Développement d'APIs sur-mesure", "Outils No-Code/Low-Code (Make, Zapier)"]
  }
];
