export const profile = {
  firstName: "Manasse",
  fullName: "ADOU Thecle Manasse",
  role: "Développeur Fullstack | Passionné Réseaux & Sécurité",
  email: "manasse.adou@epitech.eu",
  phone: "+225 07 97 41 44 38",
  phoneLink: "+2250797414438",
  location: "Abidjan, Koumassi - Côte d'Ivoire",
  socialName: "Manasse Thecle ADOU",
  headline:
    "Je conçois des applications web simples et structurées, avec une attention particulière pour la sécurité, les réseaux et la lisibilité du code.",
  shortPitch:
    "Développeur Fullstack ayant récemment terminé ma formation, je combine mes bases en développement web (React, Vue, Laravel) et en réseaux pour construire des projets claires, fiables et faciles à utiliser.",
};

export const navigationItems = [
  { label: "Profil", href: "#profil" },
  { label: "Compétences", href: "#competences" },
  { label: "Projets", href: "#projets" },
  { label: "Parcours", href: "#parcours" },
  { label: "Contact", href: "#contact" },
];

export const highlights = [
  { value: "6 mois", label: "Formation intensive fullstack" },
  { value: "10", label: "Projets académiques réalisés" },
  { value: "3", label: "Axes forts : web, mobile, sécurité" },
];

export const aboutTexts = [
  "Je viens de finaliser mon parcours de formation de développeur au sein de la Coding Academy by Epitech (WE.CODE), en parallèle avec mon cursus en Réseaux & Sécurité à l'Université Virtuelle de Côte d'Ivoire. Cette double approche me permet de comprendre le fonctionnement d'une application, de son interface jusqu'à son environnement technique.",
  "Conscient d'être au début de ma carrière, j'avance avec une logique simple : coder proprement, respecter les standards et apprendre continuellement. Je cherche à intégrer une équipe bienveillante où je pourrai consolider mes bases, progresser rapidement et apporter ma motivation au quotidien.",
];

export const skillGroups = [
  {
    title: "Frontend",
    description: "Création d'interfaces modernes, accessibles et adaptées aux écrans mobiles.",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "Vue.js", "React.js", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    description: "Construction d'applications côté serveur, gestion des routes, sessions et données.",
    skills: ["PHP", "Laravel", "Python", "Flask", "Nest.js", "PDO", "Eloquent ORM"],
  },
  {
    title: "Données & outils",
    description: "Organisation des données, versioning et travail sur des projets en équipe.",
    skills: ["MySQL", "MongoDB", "SQLite", "Git", "GitHub", "Vite", "Pinia", "Vue Router"],
  },
  {
    title: "Réseau & sécurité",
    description: "Bases réseau, cybersécurité, support, configuration et compréhension des systèmes.",
    skills: ["Cybersécurité", "Adressage réseau", "Support réseau", "Systèmes d'exploitation", "Configuration initiale"],
  },
];

export const projects = [
  {
    name: "MyContacts",
    category: "Gestion de contacts",
    stack: ["Vue 3", "TypeScript", "Vite"],
    description:
      "Application solo permettant d'organiser des contacts avec une interface claire, une logique de composants et une base TypeScript.",
    result: "Projet utile pour montrer mon autonomie sur une interface frontend moderne.",
  },
  {
    name: "FreeAds",
    category: "Annonces classées",
    stack: ["Laravel 11", "Eloquent ORM", "Blade"],
    description:
      "Plateforme d'annonces réalisée en groupe avec gestion des routes, modèles, vues et interactions autour des annonces.",
    result: "Projet important pour progresser sur Laravel, le backend et le travail d'équipe.",
  },
  {
    name: "YOWL",
    category: "Commentaires web",
    stack: ["Vue.js", "Pinia", "Vue Router"],
    description:
      "Plateforme de commentaires construite en équipe avec gestion de navigation, état global et composants réutilisables.",
    result: "Renforcement de mes bases Vue et de ma capacité à collaborer sur une interface complète.",
  },
  {
    name: "My Shop",
    category: "E-commerce",
    stack: ["JavaScript", "PHP", "MySQL", "HTML/CSS"],
    description:
      "Application e-commerce avec catalogue produits, panier et système de commande, développée en équipe. Travail sur la logique métier complète : du backend au frontend.",
    result: "Projet fondateur pour comprendre un flux e-commerce complet, de la base de données à l'interface utilisateur.",
  },
  {
    name: "Show Time",
    category: "Plateforme événements",
    stack: ["React", "REST API", "JavaScript", "CSS"],
    description:
      "Plateforme de découverte d'événements et spectacles avec intégration d'API externe, filtres de recherche et affichage dynamique des données.",
    result: "Renforcement de mes compétences sur la consommation d'API et la gestion de données dynamiques côté frontend.",
  },
  {
    name: "Trello Clone",
    category: "Application mobile",
    stack: ["React Native", "Expo SDK 54", "TypeScript", "OAuth2", "Trello API"],
    description:
      "App mobile de gestion de projet type Trello, développée en équipe de 4. Responsable de l'auth OAuth2 via Trello API, du CRUD des workspaces et du stockage sécurisé des tokens.",
    result: "Premier projet mobile complet, avec gestion d'authentification complexe cross-plateforme iOS/Android.",
    featured: true,
  },
  {
    name: "Dashboard",
    category: "Architecture microservices",
    stack: ["React", "Vue", "Docker", "OAuth2"],
    description:
      "Web app type Netvibes permettant à l'utilisateur de s'abonner à des Services (météo, RSS, Reddit...) et de composer son propre tableau de bord avec des widgets configurables et rafraîchis en temps réel. Authentification classique + OAuth2. Projet de groupe, conteneurisé avec Docker.",
    result: "Premier contact avec une architecture orientée services et la composition d'interfaces dynamiques pilotées par API.",
  },
  {
    name: "My Rotten Tomatoes",
    category: "Plateforme de critiques films",
    stack: ["Next.js", "TMDB API", "TypeScript"],
    description:
      "Site de présentation et critique de films inspiré de Rotten Tomatoes, avec intégration de The Movie Database API. Gestion de favoris, notes, commentaires, filtres par genre/date/réalisateur, et back-office admin complet (gestion films, comptes, statistiques). Projet de groupe.",
    result: "Mise en pratique d'une intégration API externe complète côté front et back, avec gestion de rôles utilisateur/admin.",
  },
  {
    name: "My Show Time",
    category: "Réservation de billets",
    stack: ["Nest.js", "MongoDB", "Node.js"],
    description:
      "Site de réservation de billets de concerts/festivals en full Nest.js, avec MongoDB. Recherche, wishlist, réservation avec génération de QR code, notifications sur les artistes favoris, et panel admin pour la gestion des concerts et statistiques. Projet de groupe.",
    result: "Approfondissement du développement backend modulaire avec Nest.js et la modélisation de données NoSQL avec MongoDB.",
  },
  {
    name: "YOWL",
    category: "Commentaires web",
    stack: ["Vue.js", "Laravel", "Docker"],
    description:
      "Application web pour centraliser et partager des commentaires sur n'importe quel contenu du web, avec une approche façon OSINT. Authentification sécurisée, conteneurisation Docker. Responsable de la partie frontend (Vue.js), connecté à l'API Laravel développée par l'équipe backend. Projet de groupe.",
    result: "Collaboration frontend/backend à grande échelle sur un produit avec cahier des charges client réel.",
  },
];

export const training = [
  {
    title: "Formation intensive développeur fullstack",
    school: "Coding Academy by Epitech - WE.CODE",
    period: "01/2026 - 06/2026",
    details:
      "PHP, Laravel, Python, Flask, JavaScript, Vue.js, React, Next.js, Nest.js, bases de données, projets web complets, projet mobile, Git et GitHub.",
  },
  {
    title: "Informatique - Réseaux & Sécurité",
    school: "Université Virtuelle de Côte d'Ivoire",
    period: "2025 - 2026",
    details:
      "Parcours orienté réseaux, cybersécurité, systèmes et compréhension des environnements informatiques.",
  },
  {
    title: "Informatique",
    school: "Université Virtuelle de Côte d'Ivoire",
    period: "2024 - 2025",
    details: "Bases en informatique, logique technique et premières compétences dans les outils numériques.",
  },
];

export const certifications = [
  "Introduction à la cybersécurité",
  "Adressage réseau et résolution de problèmes",
  "Support et sécurité des réseaux",
  "Principes de base de la mise en réseau",
  "Périphériques réseau et configuration initiale",
  "Notions de base des systèmes d'exploitation",
];

export const languages = [
  { name: "Français", level: "Courant" },
  { name: "Anglais", level: "Niveau moyen, en progression" },
];

export const interests = ["Nouvelles technologies", "Cybersécurité", "Réseaux", "Basketball", "Football", "Course", "Musique"];
