module.exports = [
"[project]/components/ui/Reveal/Reveal.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "fadeOnly": "Reveal-module__dJ2w7W__fadeOnly",
  "hidden": "Reveal-module__dJ2w7W__hidden",
  "revealContent": "Reveal-module__dJ2w7W__revealContent",
  "slideDown": "Reveal-module__dJ2w7W__slideDown",
  "slideLeft": "Reveal-module__dJ2w7W__slideLeft",
  "slideRight": "Reveal-module__dJ2w7W__slideRight",
  "slideUp": "Reveal-module__dJ2w7W__slideUp",
  "visible": "Reveal-module__dJ2w7W__visible",
});
}),
"[project]/components/ui/Reveal/Reveal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Reveal",
    ()=>Reveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2f$Reveal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/ui/Reveal/Reveal.module.css [app-ssr] (css module)");
"use client";
;
;
;
function Reveal({ children, width = "100%", delay = 0, direction = "up" }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const observer = new IntersectionObserver(([entry])=>{
            if (entry.isIntersecting) {
                setIsVisible(true);
                // Once visible, stop observing to keep rendering performant
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            }
        }, {
            threshold: 0.05
        });
        if (ref.current) {
            observer.observe(ref.current);
        }
        return ()=>{
            observer.disconnect();
        };
    }, []);
    const directionClass = direction === "up" ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2f$Reveal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].slideUp : direction === "down" ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2f$Reveal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].slideDown : direction === "left" ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2f$Reveal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].slideLeft : direction === "right" ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2f$Reveal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].slideRight : __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2f$Reveal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fadeOnly;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        style: {
            width,
            position: "relative",
            display: width === "fit-content" ? "inline-block" : "block"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2f$Reveal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].revealContent} ${isVisible ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2f$Reveal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].visible : __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2f$Reveal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hidden} ${directionClass}`,
            style: {
                transitionDelay: `${delay}ms`
            },
            children: children
        }, void 0, false, {
            fileName: "[project]/components/ui/Reveal/Reveal.tsx",
            lineNumber: 62,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/Reveal/Reveal.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ui/SectionHeader/SectionHeader.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "description": "SectionHeader-module__23Ai0q__description",
  "header": "SectionHeader-module__23Ai0q__header",
  "label": "SectionHeader-module__23Ai0q__label",
});
}),
"[project]/components/ui/SectionHeader/SectionHeader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SectionHeader",
    ()=>SectionHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Reveal/Reveal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$SectionHeader$2f$SectionHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/ui/SectionHeader/SectionHeader.module.css [app-ssr] (css module)");
;
;
;
function SectionHeader({ label, title, description }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$SectionHeader$2f$SectionHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                direction: "up",
                delay: 0,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$SectionHeader$2f$SectionHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                    children: label
                }, void 0, false, {
                    fileName: "[project]/components/ui/SectionHeader/SectionHeader.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/SectionHeader/SectionHeader.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                direction: "up",
                delay: 150,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    children: title
                }, void 0, false, {
                    fileName: "[project]/components/ui/SectionHeader/SectionHeader.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/SectionHeader/SectionHeader.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                direction: "up",
                delay: 300,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$SectionHeader$2f$SectionHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].description,
                    children: description
                }, void 0, false, {
                    fileName: "[project]/components/ui/SectionHeader/SectionHeader.tsx",
                    lineNumber: 23,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/SectionHeader/SectionHeader.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/SectionHeader/SectionHeader.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/data/portfolio.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "aboutTexts",
    ()=>aboutTexts,
    "certifications",
    ()=>certifications,
    "highlights",
    ()=>highlights,
    "interests",
    ()=>interests,
    "languages",
    ()=>languages,
    "navigationItems",
    ()=>navigationItems,
    "profile",
    ()=>profile,
    "projects",
    ()=>projects,
    "skillGroups",
    ()=>skillGroups,
    "training",
    ()=>training
]);
const profile = {
    firstName: "Manasse",
    fullName: "ADOU Thecle Manasse",
    role: "Développeur Fullstack | Passionné Réseaux & Sécurité",
    email: "manasse.adou@epitech.eu",
    phone: "+225 07 97 41 44 38",
    phoneLink: "+2250797414438",
    location: "Abidjan, Koumassi - Côte d'Ivoire",
    socialName: "Manasse Thecle ADOU",
    headline: "Je conçois des applications web simples et structurées, avec une attention particulière pour la sécurité, les réseaux et la lisibilité du code.",
    shortPitch: "Développeur Fullstack ayant récemment terminé ma formation, je combine mes bases en développement web (React, Vue, Laravel) et en réseaux pour construire des projets claires, fiables et faciles à utiliser."
};
const navigationItems = [
    {
        label: "Profil",
        href: "#profil"
    },
    {
        label: "Compétences",
        href: "#competences"
    },
    {
        label: "Projets",
        href: "#projets"
    },
    {
        label: "Parcours",
        href: "#parcours"
    },
    {
        label: "Contact",
        href: "#contact"
    }
];
const highlights = [
    {
        value: "6 mois",
        label: "Formation intensive fullstack"
    },
    {
        value: "10",
        label: "Projets académiques réalisés"
    },
    {
        value: "3",
        label: "Axes forts : web, mobile, sécurité"
    }
];
const aboutTexts = [
    "Je viens de finaliser mon parcours de formation de développeur au sein de la Coding Academy by Epitech (WE.CODE), en parallèle avec mon cursus en Réseaux & Sécurité à l'Université Virtuelle de Côte d'Ivoire. Cette double approche me permet de comprendre le fonctionnement d'une application, de son interface jusqu'à son environnement technique.",
    "Conscient d'être au début de ma carrière, j'avance avec une logique simple : coder proprement, respecter les standards et apprendre continuellement. Je cherche à intégrer une équipe bienveillante où je pourrai consolider mes bases, progresser rapidement et apporter ma motivation au quotidien."
];
const skillGroups = [
    {
        title: "Frontend",
        description: "Création d'interfaces modernes, accessibles et adaptées aux écrans mobiles.",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "Vue.js",
            "React.js",
            "Next.js",
            "Tailwind CSS"
        ]
    },
    {
        title: "Backend",
        description: "Construction d'applications côté serveur, gestion des routes, sessions et données.",
        skills: [
            "PHP",
            "Laravel",
            "Python",
            "Flask",
            "Nest.js",
            "PDO",
            "Eloquent ORM"
        ]
    },
    {
        title: "Données & outils",
        description: "Organisation des données, versioning et travail sur des projets en équipe.",
        skills: [
            "MySQL",
            "MongoDB",
            "SQLite",
            "Git",
            "GitHub",
            "Vite",
            "Pinia",
            "Vue Router"
        ]
    },
    {
        title: "Réseau & sécurité",
        description: "Bases réseau, cybersécurité, support, configuration et compréhension des systèmes.",
        skills: [
            "Cybersécurité",
            "Adressage réseau",
            "Support réseau",
            "Systèmes d'exploitation",
            "Configuration initiale"
        ]
    }
];
const projects = [
    {
        name: "MyContacts",
        category: "Gestion de contacts",
        stack: [
            "Vue 3",
            "TypeScript",
            "Vite"
        ],
        description: "Application solo permettant d'organiser des contacts avec une interface claire, une logique de composants et une base TypeScript.",
        result: "Projet utile pour montrer mon autonomie sur une interface frontend moderne.",
        image: undefined,
        demoUrl: undefined
    },
    {
        name: "FreeAds",
        category: "Annonces classées",
        stack: [
            "Laravel 11",
            "Eloquent ORM",
            "Blade"
        ],
        description: "Plateforme d'annonces réalisée en groupe avec gestion des routes, modèles, vues et interactions autour des annonces.",
        result: "Projet important pour progresser sur Laravel, le backend et le travail d'équipe.",
        image: undefined,
        demoUrl: undefined
    },
    {
        name: "PostIt",
        category: "Gestion de notes",
        stack: [
            "Vue.js",
            "Vuex",
            "Vue Router",
            "API REST"
        ],
        description: "Application Vue.js de gestion de post-it, développée en solo. Utilisation du Vue Router officiel, de Vuex pour la gestion d'état, et d'une API REST (fetch) pour la persistance des données, remplaçant le localStorage initial.",
        result: "Premier projet solo en Vue.js, de la logique locale (localStorage) à une vraie architecture avec state management et API.",
        image: "/Postit.png",
        demoUrl: "https://post-it-eta-seven.vercel.app/"
    },
    {
        name: "My Shop",
        category: "E-commerce",
        stack: [
            "JavaScript",
            "PHP",
            "MySQL",
            "HTML/CSS"
        ],
        description: "Application e-commerce avec catalogue produits, panier et système de commande, développée en équipe. Travail sur la logique métier complète : du backend au frontend.",
        result: "Projet fondateur pour comprendre un flux e-commerce complet, de la base de données à l'interface utilisateur.",
        image: "/MyShop.png",
        demoUrl: "https://mymarketplaceonline.xo.je/?i=1"
    },
    {
        name: "My Shop — Intégration",
        category: "Intégration HTML/CSS",
        stack: [
            "HTML5",
            "CSS3",
            "SEO"
        ],
        description: "Intégration complète d'une maquette de boutique en ligne, desktop et mobile, en HTML5/CSS3 strict respect des standards W3C, avec optimisation SEO (Google Lighthouse) et usage de grilles CSS pour le responsive. Premier projet de la formation.",
        result: "Bases solides en intégration web pure, sans framework, respect des standards et premiers réflexes SEO.",
        image: undefined,
        demoUrl: undefined
    },
    {
        name: "Trello Clone",
        category: "Application mobile",
        stack: [
            "React Native",
            "Expo SDK 54",
            "TypeScript",
            "OAuth2",
            "Trello API"
        ],
        description: "App mobile de gestion de projet type Trello, développée en équipe de 4. Responsable de l'auth OAuth2 via Trello API, du CRUD des workspaces et du stockage sécurisé des tokens.",
        result: "Premier projet mobile complet, avec gestion d'authentification complexe cross-plateforme iOS/Android.",
        featured: true,
        image: "/TrelloClone.jpeg",
        demoUrl: "https://expo.dev/accounts/mateo_dev007/projects/mobilapp101/builds/930fbd57-6b17-44cc-af9d-e7162aede31f"
    },
    {
        name: "Dashboard",
        category: "Architecture microservices",
        stack: [
            "React",
            "Vue",
            "Docker",
            "OAuth2"
        ],
        description: "Web app type Netvibes permettant à l'utilisateur de s'abonner à des Services (météo, RSS, Reddit...) et de composer son propre tableau de bord avec des widgets configurables et rafraîchis en temps réel. Authentification classique + OAuth2. Projet de groupe, conteneurisé avec Docker.",
        result: "Premier contact avec une architecture orientée services et la composition d'interfaces dynamiques pilotées par API.",
        image: undefined,
        demoUrl: undefined
    },
    {
        name: "My Rotten Tomatoes",
        category: "Plateforme de critiques films",
        stack: [
            "Next.js",
            "TMDB API",
            "TypeScript"
        ],
        description: "Site de présentation et critique de films inspiré de Rotten Tomatoes, avec intégration de The Movie Database API. Gestion de favoris, notes, commentaires, filtres par genre/date/réalisateur, et back-office admin complet (gestion films, comptes, statistiques). Projet de groupe.",
        result: "Mise en pratique d'une intégration API externe complète côté front et back, avec gestion de rôles utilisateur/admin.",
        image: undefined,
        demoUrl: undefined
    },
    {
        name: "My Show Time",
        category: "Réservation de billets",
        stack: [
            "Nest.js",
            "MongoDB",
            "Node.js"
        ],
        description: "Site de réservation de billets de concerts/festivals en full Nest.js, avec MongoDB. Recherche, wishlist, réservation avec génération de QR code, notifications sur les artistes favoris, et panel admin pour la gestion des concerts et statistiques. Projet de groupe.",
        result: "Approfondissement du développement backend modulaire avec Nest.js et la modélisation de données NoSQL avec MongoDB.",
        image: undefined,
        demoUrl: undefined
    },
    {
        name: "YOWL",
        category: "Commentaires web",
        stack: [
            "Vue.js",
            "Laravel",
            "Docker"
        ],
        description: "Application web pour centraliser et partager des commentaires sur n'importe quel contenu du web, avec une approche façon OSINT. Authentification sécurisée, conteneurisation Docker. Responsable de la partie frontend (Vue.js), connecté à l'API Laravel développée par l'équipe backend. Projet de groupe.",
        result: "Collaboration frontend/backend à grande échelle sur un produit avec cahier des charges client réel.",
        image: undefined,
        demoUrl: undefined
    }
];
const training = [
    {
        title: "Formation intensive développeur fullstack",
        school: "Coding Academy by Epitech - WE.CODE",
        period: "01/2026 - 06/2026",
        details: "PHP, Laravel, Python, Flask, JavaScript, Vue.js, React, Next.js, Nest.js, bases de données, projets web complets, projet mobile, Git et GitHub."
    },
    {
        title: "Informatique - Réseaux & Sécurité",
        school: "Université Virtuelle de Côte d'Ivoire",
        period: "2025 - 2026",
        details: "Parcours orienté réseaux, cybersécurité, systèmes et compréhension des environnements informatiques."
    },
    {
        title: "Informatique",
        school: "Université Virtuelle de Côte d'Ivoire",
        period: "2024 - 2025",
        details: "Bases en informatique, logique technique et premières compétences dans les outils numériques."
    }
];
const certifications = [
    "Introduction à la cybersécurité",
    "Adressage réseau et résolution de problèmes",
    "Support et sécurité des réseaux",
    "Principes de base de la mise en réseau",
    "Périphériques réseau et configuration initiale",
    "Notions de base des systèmes d'exploitation"
];
const languages = [
    {
        name: "Français",
        level: "Courant"
    },
    {
        name: "Anglais",
        level: "Niveau moyen, en progression"
    }
];
const interests = [
    "Nouvelles technologies",
    "Cybersécurité",
    "Réseaux",
    "Basketball",
    "Football",
    "Course",
    "Musique"
];
}),
"[project]/components/sections/ContactSection/ContactSection.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "cardInfo": "ContactSection-module__htPsaW__cardInfo",
  "cardLink": "ContactSection-module__htPsaW__cardLink",
  "cardType": "ContactSection-module__htPsaW__cardType",
  "cardValue": "ContactSection-module__htPsaW__cardValue",
  "contactCards": "ContactSection-module__htPsaW__contactCards",
  "copyBtn": "ContactSection-module__htPsaW__copyBtn",
  "emailBtn": "ContactSection-module__htPsaW__emailBtn",
  "fadeIn": "ContactSection-module__htPsaW__fadeIn",
  "form": "ContactSection-module__htPsaW__form",
  "infoCol": "ContactSection-module__htPsaW__infoCol",
  "inputGroup": "ContactSection-module__htPsaW__inputGroup",
  "section": "ContactSection-module__htPsaW__section",
  "shareBox": "ContactSection-module__htPsaW__shareBox",
  "shareButtons": "ContactSection-module__htPsaW__shareButtons",
  "status": "ContactSection-module__htPsaW__status",
  "submitBtn": "ContactSection-module__htPsaW__submitBtn",
});
}),
"[project]/components/sections/ContactSection/ContactSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContactSection",
    ()=>ContactSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$SectionHeader$2f$SectionHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/SectionHeader/SectionHeader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Reveal/Reveal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/portfolio.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/sections/ContactSection/ContactSection.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
;
;
function ContactSection() {
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [copyStatus, setCopyStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Copier le lien");
    const shareSubject = encodeURIComponent(`Portfolio de ${__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].fullName}`);
    const shareBody = encodeURIComponent(`${__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].fullName} - ${__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].role}`);
    async function handleSubmit(event) {
        event.preventDefault();
        setIsSubmitting(true);
        setStatus("Envoi en cours...");
        const form = event.currentTarget;
        const formData = new FormData(form);
        // Ajout de votre clé d'accès publique Web3Forms
        formData.append("access_key", "d36b17be-4416-40a3-80b7-522f6f0daa20");
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            });
            const result = await response.json();
            if (result.success) {
                setStatus("Merci ! Votre message a bien été envoyé. Je vous répondrai très bientôt.");
                form.reset(); // Vide les champs du formulaire après envoi réussi
            } else {
                setStatus("Une erreur est survenue lors de l'envoi. Veuillez réessayer.");
            }
        } catch (error) {
            console.error(error);
            setStatus("Impossible de contacter le serveur d'envoi. Vérifiez votre connexion.");
        } finally{
            setIsSubmitting(false);
        }
    }
    function handleCopy() {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                direction: "right",
                delay: 100,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].infoCol,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$SectionHeader$2f$SectionHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SectionHeader"], {
                            label: "Contact",
                            title: "Prêt à apprendre, contribuer et progresser.",
                            description: "Je suis disponible pour discuter d'une opportunité, d'un stage, d'un projet ou d'une collaboration autour du développement web, mobile, des réseaux ou de la cybersécurité."
                        }, void 0, false, {
                            fileName: "[project]/components/sections/ContactSection/ContactSection.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contactCards,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].email}`,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardLink,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardType,
                                            children: "Email"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/ContactSection/ContactSection.tsx",
                                            lineNumber: 77,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardValue,
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].email
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/ContactSection/ContactSection.tsx",
                                            lineNumber: 78,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/ContactSection/ContactSection.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].phoneLink}`,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardLink,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardType,
                                            children: "Téléphone"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/ContactSection/ContactSection.tsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardValue,
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].phone
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/ContactSection/ContactSection.tsx",
                                            lineNumber: 82,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/ContactSection/ContactSection.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardInfo,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardType,
                                            children: "Localisation"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/ContactSection/ContactSection.tsx",
                                            lineNumber: 85,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardValue,
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].location
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/ContactSection/ContactSection.tsx",
                                            lineNumber: 86,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/ContactSection/ContactSection.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardInfo,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardType,
                                            children: "LinkedIn"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/ContactSection/ContactSection.tsx",
                                            lineNumber: 89,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardValue,
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].socialName
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/ContactSection/ContactSection.tsx",
                                            lineNumber: 90,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/ContactSection/ContactSection.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/ContactSection/ContactSection.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/ContactSection/ContactSection.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/ContactSection/ContactSection.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                direction: "left",
                delay: 200,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].form,
                    onSubmit: handleSubmit,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "form-name",
                                    children: "Nom"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/ContactSection/ContactSection.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "form-name",
                                    name: "name",
                                    type: "text",
                                    placeholder: "Votre nom",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/ContactSection/ContactSection.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/ContactSection/ContactSection.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "form-email",
                                    children: "Email"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/ContactSection/ContactSection.tsx",
                                    lineNumber: 104,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "form-email",
                                    name: "email",
                                    type: "email",
                                    placeholder: "votre.email@exemple.com",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/ContactSection/ContactSection.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/ContactSection/ContactSection.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "form-message",
                                    children: "Message"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/ContactSection/ContactSection.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    id: "form-message",
                                    name: "message",
                                    rows: 5,
                                    placeholder: "Écrivez votre message ici",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/ContactSection/ContactSection.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/ContactSection/ContactSection.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: isSubmitting,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].submitBtn,
                            children: isSubmitting ? "Envoi en cours..." : "Envoyer le message"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/ContactSection/ContactSection.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this),
                        status ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].status,
                            children: status
                        }, void 0, false, {
                            fileName: "[project]/components/sections/ContactSection/ContactSection.tsx",
                            lineNumber: 117,
                            columnNumber: 21
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].shareBox,
                            "aria-label": "Partager le portfolio",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Partager ce portfolio"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/ContactSection/ContactSection.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].shareButtons,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: handleCopy,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].copyBtn,
                                            children: copyStatus
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/ContactSection/ContactSection.tsx",
                                            lineNumber: 122,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `mailto:?subject=${shareSubject}&body=${shareBody}`,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].emailBtn,
                                            children: "Partager par mail"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/ContactSection/ContactSection.tsx",
                                            lineNumber: 125,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/ContactSection/ContactSection.tsx",
                                    lineNumber: 121,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/ContactSection/ContactSection.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/ContactSection/ContactSection.tsx",
                    lineNumber: 97,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/ContactSection/ContactSection.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/ContactSection/ContactSection.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/sections/ProjectsSection/ProjectsSection.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "activePage": "ProjectsSection-module__VNyN-a__activePage",
  "card": "ProjectsSection-module__VNyN-a__card",
  "cardFeatured": "ProjectsSection-module__VNyN-a__cardFeatured",
  "cardImage": "ProjectsSection-module__VNyN-a__cardImage",
  "cardLink": "ProjectsSection-module__VNyN-a__cardLink",
  "cardNumber": "ProjectsSection-module__VNyN-a__cardNumber",
  "category": "ProjectsSection-module__VNyN-a__category",
  "content": "ProjectsSection-module__VNyN-a__content",
  "demoBadge": "ProjectsSection-module__VNyN-a__demoBadge",
  "description": "ProjectsSection-module__VNyN-a__description",
  "featuredBadge": "ProjectsSection-module__VNyN-a__featuredBadge",
  "grid": "ProjectsSection-module__VNyN-a__grid",
  "imageContainer": "ProjectsSection-module__VNyN-a__imageContainer",
  "imagePlaceholder": "ProjectsSection-module__VNyN-a__imagePlaceholder",
  "navButton": "ProjectsSection-module__VNyN-a__navButton",
  "pageButton": "ProjectsSection-module__VNyN-a__pageButton",
  "pageNumbers": "ProjectsSection-module__VNyN-a__pageNumbers",
  "pagination": "ProjectsSection-module__VNyN-a__pagination",
  "placeholderGrid": "ProjectsSection-module__VNyN-a__placeholderGrid",
  "placeholderText": "ProjectsSection-module__VNyN-a__placeholderText",
  "projectScan": "ProjectsSection-module__VNyN-a__projectScan",
  "resultBox": "ProjectsSection-module__VNyN-a__resultBox",
  "resultLabel": "ProjectsSection-module__VNyN-a__resultLabel",
  "resultText": "ProjectsSection-module__VNyN-a__resultText",
  "scanLine": "ProjectsSection-module__VNyN-a__scanLine",
  "section": "ProjectsSection-module__VNyN-a__section",
  "stack": "ProjectsSection-module__VNyN-a__stack",
});
}),
"[project]/components/sections/ProjectsSection/ProjectsSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectsSection",
    ()=>ProjectsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$SectionHeader$2f$SectionHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/SectionHeader/SectionHeader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Reveal/Reveal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/portfolio.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectsSection$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/sections/ProjectsSection/ProjectsSection.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
;
;
const PROJECTS_PER_PAGE = 6;
function ProjectsSection() {
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const totalPages = Math.ceil(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projects"].length / PROJECTS_PER_PAGE);
    const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
    const currentProjects = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projects"].slice(startIndex, startIndex + PROJECTS_PER_PAGE);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "projets",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectsSection$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$SectionHeader$2f$SectionHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SectionHeader"], {
                label: "Projets",
                title: "Des réalisations concrètes qui montrent ma progression.",
                description: "Chaque projet représente une compétence travaillée : autonomie, logique backend, interface, gestion des données ou collaboration en équipe."
            }, void 0, false, {
                fileName: "[project]/components/sections/ProjectsSection/ProjectsSection.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectsSection$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].grid,
                children: currentProjects.map((project, index)=>{
                    const CardWrapper = project.demoUrl ? "a" : "article";
                    const cardProps = project.demoUrl ? {
                        href: project.demoUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectsSection$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectsSection$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardLink} ${"featured" in project && project.featured ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectsSection$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardFeatured : ""}`
                    } : {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectsSection$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card} ${"featured" in project && project.featured ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectsSection$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardFeatured : ""}`
                    };
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                        direction: "up",
                        delay: index * 100,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CardWrapper, {
                            ...cardProps,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectsSection$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].scanLine
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/ProjectsSection/ProjectsSection.tsx",
                                    lineNumber: 45,
                                    columnNumber: 17
                                }, this),
                                "featured" in project && project.featured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectsSection$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].featuredBadge,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "⭐ Projet phare"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/ProjectsSection/ProjectsSection.tsx",
                                        lineNumber: 49,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/ProjectsSection/ProjectsSection.tsx",
                                    lineNumber: 48,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectsSection$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].imageContainer,
                                    children: [
                                        project.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: project.image,
                                            alt: `Capture d'écran de ${project.name}`,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectsSection$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardImage
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/ProjectsSection/ProjectsSection.tsx",
                                            lineNumber: 55,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectsSection$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].imagePlaceholder,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectsSection$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].placeholderGrid
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/ProjectsSection/ProjectsSection.tsx",
                                                    lineNumber: 62,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectsSection$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].placeholderText,
                                                    children: project.name.substring(0, 2).toUpperCase()
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/ProjectsSection/ProjectsSection.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/ProjectsSection/ProjectsSection.tsx",
                                            lineNumber: 61,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectsSection$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardNumber,
                                            children: String(startIndex + index + 1).padStart(2, "0")
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/ProjectsSection/ProjectsSection.tsx",
                                            lineNumber: 70,
                                            columnNumber: 19
                                        }, this),
                                        project.demoUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectsSection$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].demoBadge,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Démo Live ↗"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/ProjectsSection/ProjectsSection.tsx",
                                                lineNumber: 75,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/ProjectsSection/ProjectsSection.tsx",
                                            lineNumber: 74,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/ProjectsSection/ProjectsSection.tsx",
                                    lineNumber: 53,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectsSection$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].content,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectsSection$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].headerBlock,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectsSection$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].category,
                                                    children: project.category
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/ProjectsSection/ProjectsSection.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    children: project.name
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/ProjectsSection/ProjectsSection.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectsSection$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].description,
                                                    children: project.description
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/ProjectsSection/ProjectsSection.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/ProjectsSection/ProjectsSection.tsx",
                                            lineNumber: 81,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectsSection$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stack,
                                            children: project.stack.map((technology)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: technology
                                                }, technology, false, {
                                                    fileName: "[project]/components/sections/ProjectsSection/ProjectsSection.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/ProjectsSection/ProjectsSection.tsx",
                                            lineNumber: 87,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectsSection$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].resultBox,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectsSection$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].resultLabel,
                                                    children: "Résultat :"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/ProjectsSection/ProjectsSection.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectsSection$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].resultText,
                                                    children: project.result
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/ProjectsSection/ProjectsSection.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/ProjectsSection/ProjectsSection.tsx",
                                            lineNumber: 93,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/ProjectsSection/ProjectsSection.tsx",
                                    lineNumber: 80,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/ProjectsSection/ProjectsSection.tsx",
                            lineNumber: 43,
                            columnNumber: 15
                        }, this)
                    }, project.name, false, {
                        fileName: "[project]/components/sections/ProjectsSection/ProjectsSection.tsx",
                        lineNumber: 41,
                        columnNumber: 13
                    }, this);
                })
            }, currentPage, false, {
                fileName: "[project]/components/sections/ProjectsSection/ProjectsSection.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectsSection$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pagination,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setCurrentPage((prev)=>Math.max(prev - 1, 1)),
                        disabled: currentPage === 1,
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectsSection$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pageButton} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectsSection$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navButton}`,
                        "aria-label": "Page précédente",
                        children: "← Précédent"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/ProjectsSection/ProjectsSection.tsx",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectsSection$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pageNumbers,
                        children: Array.from({
                            length: totalPages
                        }, (_, i)=>i + 1).map((page)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setCurrentPage(page),
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectsSection$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pageButton} ${currentPage === page ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectsSection$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].activePage : ""}`,
                                "aria-label": `Aller à la page ${page}`,
                                children: page
                            }, page, false, {
                                fileName: "[project]/components/sections/ProjectsSection/ProjectsSection.tsx",
                                lineNumber: 117,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/sections/ProjectsSection/ProjectsSection.tsx",
                        lineNumber: 115,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setCurrentPage((prev)=>Math.min(prev + 1, totalPages)),
                        disabled: currentPage === totalPages,
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectsSection$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pageButton} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectsSection$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navButton}`,
                        "aria-label": "Page suivante",
                        children: "Suivant →"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/ProjectsSection/ProjectsSection.tsx",
                        lineNumber: 128,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/ProjectsSection/ProjectsSection.tsx",
                lineNumber: 105,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/ProjectsSection/ProjectsSection.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
];

//# sourceMappingURL=_064bfia._.js.map