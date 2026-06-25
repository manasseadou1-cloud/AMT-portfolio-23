(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ui/Reveal/Reveal.module.css [app-client] (css module)", ((__turbopack_context__) => {

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
"[project]/components/ui/Reveal/Reveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Reveal",
    ()=>Reveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2f$Reveal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/ui/Reveal/Reveal.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Reveal({ children, width = "100%", delay = 0, direction = "up" }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Reveal.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "Reveal.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        // Once visible, stop observing to keep rendering performant
                        if (ref.current) {
                            observer.unobserve(ref.current);
                        }
                    }
                }
            }["Reveal.useEffect"], {
                threshold: 0.05
            });
            if (ref.current) {
                observer.observe(ref.current);
            }
            return ({
                "Reveal.useEffect": ()=>{
                    observer.disconnect();
                }
            })["Reveal.useEffect"];
        }
    }["Reveal.useEffect"], []);
    const directionClass = direction === "up" ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2f$Reveal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slideUp : direction === "down" ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2f$Reveal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slideDown : direction === "left" ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2f$Reveal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slideLeft : direction === "right" ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2f$Reveal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slideRight : __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2f$Reveal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fadeOnly;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        style: {
            width,
            position: "relative",
            display: width === "fit-content" ? "inline-block" : "block"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2f$Reveal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].revealContent} ${isVisible ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2f$Reveal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].visible : __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2f$Reveal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hidden} ${directionClass}`,
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
_s(Reveal, "Wk8baY7uc+CWSrD2kMBp+I8qtIg=");
_c = Reveal;
var _c;
__turbopack_context__.k.register(_c, "Reveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/SectionHeader/SectionHeader.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "description": "SectionHeader-module__23Ai0q__description",
  "header": "SectionHeader-module__23Ai0q__header",
  "label": "SectionHeader-module__23Ai0q__label",
});
}),
"[project]/components/ui/SectionHeader/SectionHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SectionHeader",
    ()=>SectionHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Reveal/Reveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$SectionHeader$2f$SectionHeader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/ui/SectionHeader/SectionHeader.module.css [app-client] (css module)");
;
;
;
function SectionHeader({ label, title, description }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$SectionHeader$2f$SectionHeader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                direction: "up",
                delay: 0,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$SectionHeader$2f$SectionHeader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                direction: "up",
                delay: 150,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
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
            description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                direction: "up",
                delay: 300,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$SectionHeader$2f$SectionHeader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].description,
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
_c = SectionHeader;
var _c;
__turbopack_context__.k.register(_c, "SectionHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/portfolio.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
        result: "Projet utile pour montrer mon autonomie sur une interface frontend moderne."
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
        result: "Projet important pour progresser sur Laravel, le backend et le travail d'équipe."
    },
    {
        name: "YOWL",
        category: "Commentaires web",
        stack: [
            "Vue.js",
            "Pinia",
            "Vue Router"
        ],
        description: "Plateforme de commentaires construite en équipe avec gestion de navigation, état global et composants réutilisables.",
        result: "Renforcement de mes bases Vue et de ma capacité à collaborer sur une interface complète."
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
        result: "Projet fondateur pour comprendre un flux e-commerce complet, de la base de données à l'interface utilisateur."
    },
    {
        name: "Show Time",
        category: "Plateforme événements",
        stack: [
            "React",
            "REST API",
            "JavaScript",
            "CSS"
        ],
        description: "Plateforme de découverte d'événements et spectacles avec intégration d'API externe, filtres de recherche et affichage dynamique des données.",
        result: "Renforcement de mes compétences sur la consommation d'API et la gestion de données dynamiques côté frontend."
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
        featured: true
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
        result: "Premier contact avec une architecture orientée services et la composition d'interfaces dynamiques pilotées par API."
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
        result: "Mise en pratique d'une intégration API externe complète côté front et back, avec gestion de rôles utilisateur/admin."
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
        result: "Approfondissement du développement backend modulaire avec Nest.js et la modélisation de données NoSQL avec MongoDB."
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
        result: "Collaboration frontend/backend à grande échelle sur un produit avec cahier des charges client réel."
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/ContactSection/ContactSection.module.css [app-client] (css module)", ((__turbopack_context__) => {

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
"[project]/components/sections/ContactSection/ContactSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContactSection",
    ()=>ContactSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$SectionHeader$2f$SectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/SectionHeader/SectionHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Reveal/Reveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/portfolio.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/sections/ContactSection/ContactSection.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function ContactSection() {
    _s();
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [copyStatus, setCopyStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Copier le lien");
    const shareSubject = encodeURIComponent(`Portfolio de ${__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].fullName}`);
    const shareBody = encodeURIComponent(`${__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].fullName} - ${__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].role}`);
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
        if ("TURBOPACK compile-time truthy", 1) {
            navigator.clipboard.writeText(window.location.href);
            setCopyStatus("Lien copié ! ✓");
            setTimeout(()=>setCopyStatus("Copier le lien"), 2000);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                direction: "right",
                delay: 100,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].infoCol,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$SectionHeader$2f$SectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeader"], {
                            label: "Contact",
                            title: "Prêt à apprendre, contribuer et progresser.",
                            description: "Je suis disponible pour discuter d'une opportunité, d'un stage, d'un projet ou d'une collaboration autour du développement web, mobile, des réseaux ou de la cybersécurité."
                        }, void 0, false, {
                            fileName: "[project]/components/sections/ContactSection/ContactSection.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contactCards,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].email}`,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardLink,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardType,
                                            children: "Email"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/ContactSection/ContactSection.tsx",
                                            lineNumber: 77,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardValue,
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].email
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].phoneLink}`,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardLink,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardType,
                                            children: "Téléphone"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/ContactSection/ContactSection.tsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardValue,
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].phone
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardInfo,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardType,
                                            children: "Localisation"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/ContactSection/ContactSection.tsx",
                                            lineNumber: 85,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardValue,
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].location
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardInfo,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardType,
                                            children: "LinkedIn"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/ContactSection/ContactSection.tsx",
                                            lineNumber: 89,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardValue,
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].socialName
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                direction: "left",
                delay: 200,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].form,
                    onSubmit: handleSubmit,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "form-name",
                                    children: "Nom"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/ContactSection/ContactSection.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "form-email",
                                    children: "Email"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/ContactSection/ContactSection.tsx",
                                    lineNumber: 104,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "form-message",
                                    children: "Message"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/ContactSection/ContactSection.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: isSubmitting,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].submitBtn,
                            children: isSubmitting ? "Envoi en cours..." : "Envoyer le message"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/ContactSection/ContactSection.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this),
                        status ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].status,
                            children: status
                        }, void 0, false, {
                            fileName: "[project]/components/sections/ContactSection/ContactSection.tsx",
                            lineNumber: 117,
                            columnNumber: 21
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].shareBox,
                            "aria-label": "Partager le portfolio",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Partager ce portfolio"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/ContactSection/ContactSection.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].shareButtons,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: handleCopy,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].copyBtn,
                                            children: copyStatus
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/ContactSection/ContactSection.tsx",
                                            lineNumber: 122,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `mailto:?subject=${shareSubject}&body=${shareBody}`,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].emailBtn,
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
_s(ContactSection, "U2EDryFyMEyYIV7EMvRKx3LGOD8=");
_c = ContactSection;
var _c;
__turbopack_context__.k.register(_c, "ContactSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/ProjectsSection/ProjectsSection.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "activePage": "ProjectsSection-module__VNyN-a__activePage",
  "card": "ProjectsSection-module__VNyN-a__card",
  "cardFeatured": "ProjectsSection-module__VNyN-a__cardFeatured",
  "cardNumber": "ProjectsSection-module__VNyN-a__cardNumber",
  "category": "ProjectsSection-module__VNyN-a__category",
  "content": "ProjectsSection-module__VNyN-a__content",
  "description": "ProjectsSection-module__VNyN-a__description",
  "featuredBadge": "ProjectsSection-module__VNyN-a__featuredBadge",
  "grid": "ProjectsSection-module__VNyN-a__grid",
  "headerBlock": "ProjectsSection-module__VNyN-a__headerBlock",
  "navButton": "ProjectsSection-module__VNyN-a__navButton",
  "pageButton": "ProjectsSection-module__VNyN-a__pageButton",
  "pageNumbers": "ProjectsSection-module__VNyN-a__pageNumbers",
  "pagination": "ProjectsSection-module__VNyN-a__pagination",
  "projectScan": "ProjectsSection-module__VNyN-a__projectScan",
  "resultBox": "ProjectsSection-module__VNyN-a__resultBox",
  "resultLabel": "ProjectsSection-module__VNyN-a__resultLabel",
  "resultText": "ProjectsSection-module__VNyN-a__resultText",
  "scanLine": "ProjectsSection-module__VNyN-a__scanLine",
  "section": "ProjectsSection-module__VNyN-a__section",
  "stack": "ProjectsSection-module__VNyN-a__stack",
  "visual": "ProjectsSection-module__VNyN-a__visual",
  "visualGrid": "ProjectsSection-module__VNyN-a__visualGrid",
});
}),
"[project]/components/sections/ProjectsSection/ProjectsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectsSection",
    ()=>ProjectsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$SectionHeader$2f$SectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/SectionHeader/SectionHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Reveal/Reveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/portfolio.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectsSection$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/sections/ProjectsSection/ProjectsSection.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const PROJECTS_PER_PAGE = 6;
function ProjectsSection() {
    _s();
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const totalPages = Math.ceil(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"].length / PROJECTS_PER_PAGE);
    const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
    const currentProjects = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"].slice(startIndex, startIndex + PROJECTS_PER_PAGE);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "projets",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectsSection$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$SectionHeader$2f$SectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeader"], {
                label: "Projets",
                title: "Des réalisations concrètes qui montrent ma progression.",
                description: "Chaque projet représente une compétence travaillée : autonomie, logique backend, interface, gestion des données ou collaboration en équipe."
            }, void 0, false, {
                fileName: "[project]/components/sections/ProjectsSection/ProjectsSection.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectsSection$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid,
                children: currentProjects.map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        direction: "up",
                        delay: index * 100,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectsSection$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card} ${"featured" in project && project.featured ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectsSection$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardFeatured : ""}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectsSection$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scanLine
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/ProjectsSection/ProjectsSection.tsx",
                                    lineNumber: 31,
                                    columnNumber: 15
                                }, this),
                                "featured" in project && project.featured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectsSection$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featuredBadge,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "⭐ Projet phare"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/ProjectsSection/ProjectsSection.tsx",
                                        lineNumber: 35,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/ProjectsSection/ProjectsSection.tsx",
                                    lineNumber: 34,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectsSection$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].visual,
                                    "aria-hidden": "true",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectsSection$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardNumber,
                                            children: String(startIndex + index + 1).padStart(2, "0")
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/ProjectsSection/ProjectsSection.tsx",
                                            lineNumber: 40,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectsSection$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].visualGrid
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/ProjectsSection/ProjectsSection.tsx",
                                            lineNumber: 41,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/ProjectsSection/ProjectsSection.tsx",
                                    lineNumber: 39,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectsSection$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectsSection$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headerBlock,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectsSection$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].category,
                                                    children: project.category
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/ProjectsSection/ProjectsSection.tsx",
                                                    lineNumber: 46,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    children: project.name
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/ProjectsSection/ProjectsSection.tsx",
                                                    lineNumber: 47,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectsSection$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].description,
                                                    children: project.description
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/ProjectsSection/ProjectsSection.tsx",
                                                    lineNumber: 48,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/ProjectsSection/ProjectsSection.tsx",
                                            lineNumber: 45,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectsSection$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stack,
                                            children: project.stack.map((technology)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: technology
                                                }, technology, false, {
                                                    fileName: "[project]/components/sections/ProjectsSection/ProjectsSection.tsx",
                                                    lineNumber: 53,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/ProjectsSection/ProjectsSection.tsx",
                                            lineNumber: 51,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectsSection$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].resultBox,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectsSection$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].resultLabel,
                                                    children: "Résultat :"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/ProjectsSection/ProjectsSection.tsx",
                                                    lineNumber: 58,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectsSection$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].resultText,
                                                    children: project.result
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/ProjectsSection/ProjectsSection.tsx",
                                                    lineNumber: 59,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/ProjectsSection/ProjectsSection.tsx",
                                            lineNumber: 57,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/ProjectsSection/ProjectsSection.tsx",
                                    lineNumber: 44,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/ProjectsSection/ProjectsSection.tsx",
                            lineNumber: 29,
                            columnNumber: 13
                        }, this)
                    }, project.name, false, {
                        fileName: "[project]/components/sections/ProjectsSection/ProjectsSection.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this))
            }, currentPage, false, {
                fileName: "[project]/components/sections/ProjectsSection/ProjectsSection.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectsSection$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pagination,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setCurrentPage((prev)=>Math.max(prev - 1, 1)),
                        disabled: currentPage === 1,
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectsSection$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageButton} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectsSection$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navButton}`,
                        "aria-label": "Page précédente",
                        children: "← Précédent"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/ProjectsSection/ProjectsSection.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectsSection$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageNumbers,
                        children: Array.from({
                            length: totalPages
                        }, (_, i)=>i + 1).map((page)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setCurrentPage(page),
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectsSection$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageButton} ${currentPage === page ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectsSection$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].activePage : ""}`,
                                "aria-label": `Aller à la page ${page}`,
                                children: page
                            }, page, false, {
                                fileName: "[project]/components/sections/ProjectsSection/ProjectsSection.tsx",
                                lineNumber: 80,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/sections/ProjectsSection/ProjectsSection.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setCurrentPage((prev)=>Math.min(prev + 1, totalPages)),
                        disabled: currentPage === totalPages,
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectsSection$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageButton} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectsSection$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navButton}`,
                        "aria-label": "Page suivante",
                        children: "Suivant →"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/ProjectsSection/ProjectsSection.tsx",
                        lineNumber: 91,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/ProjectsSection/ProjectsSection.tsx",
                lineNumber: 68,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/ProjectsSection/ProjectsSection.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(ProjectsSection, "6xAUoJ2motYJ38x4zeUWisA+X/4=");
_c = ProjectsSection;
var _c;
__turbopack_context__.k.register(_c, "ProjectsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_02kaimt._.js.map