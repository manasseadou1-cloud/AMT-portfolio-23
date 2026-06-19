module.exports = [
"[project]/Downloads/projectportfolio-1/projectportfolio/components/ui/Reveal/Reveal.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "fadeOnly": "Reveal-module__Dc3HxW__fadeOnly",
  "hidden": "Reveal-module__Dc3HxW__hidden",
  "revealContent": "Reveal-module__Dc3HxW__revealContent",
  "slideDown": "Reveal-module__Dc3HxW__slideDown",
  "slideLeft": "Reveal-module__Dc3HxW__slideLeft",
  "slideRight": "Reveal-module__Dc3HxW__slideRight",
  "slideUp": "Reveal-module__Dc3HxW__slideUp",
  "visible": "Reveal-module__Dc3HxW__visible",
});
}),
"[project]/Downloads/projectportfolio-1/projectportfolio/components/ui/Reveal/Reveal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Reveal",
    ()=>Reveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/projectportfolio-1/projectportfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/projectportfolio-1/projectportfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$components$2f$ui$2f$Reveal$2f$Reveal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Downloads/projectportfolio-1/projectportfolio/components/ui/Reveal/Reveal.module.css [app-ssr] (css module)");
"use client";
;
;
;
function Reveal({ children, width = "100%", delay = 0, direction = "up" }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
    const directionClass = direction === "up" ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$components$2f$ui$2f$Reveal$2f$Reveal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].slideUp : direction === "down" ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$components$2f$ui$2f$Reveal$2f$Reveal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].slideDown : direction === "left" ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$components$2f$ui$2f$Reveal$2f$Reveal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].slideLeft : direction === "right" ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$components$2f$ui$2f$Reveal$2f$Reveal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].slideRight : __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$components$2f$ui$2f$Reveal$2f$Reveal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fadeOnly;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        style: {
            width,
            position: "relative",
            display: width === "fit-content" ? "inline-block" : "block"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$components$2f$ui$2f$Reveal$2f$Reveal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].revealContent} ${isVisible ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$components$2f$ui$2f$Reveal$2f$Reveal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].visible : __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$components$2f$ui$2f$Reveal$2f$Reveal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hidden} ${directionClass}`,
            style: {
                transitionDelay: `${delay}ms`
            },
            children: children
        }, void 0, false, {
            fileName: "[project]/Downloads/projectportfolio-1/projectportfolio/components/ui/Reveal/Reveal.tsx",
            lineNumber: 62,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/projectportfolio-1/projectportfolio/components/ui/Reveal/Reveal.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/projectportfolio-1/projectportfolio/components/ui/SectionHeader/SectionHeader.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "description": "SectionHeader-module__2c5q8W__description",
  "header": "SectionHeader-module__2c5q8W__header",
  "label": "SectionHeader-module__2c5q8W__label",
});
}),
"[project]/Downloads/projectportfolio-1/projectportfolio/components/ui/SectionHeader/SectionHeader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SectionHeader",
    ()=>SectionHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/projectportfolio-1/projectportfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$components$2f$ui$2f$Reveal$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/projectportfolio-1/projectportfolio/components/ui/Reveal/Reveal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$components$2f$ui$2f$SectionHeader$2f$SectionHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Downloads/projectportfolio-1/projectportfolio/components/ui/SectionHeader/SectionHeader.module.css [app-ssr] (css module)");
;
;
;
function SectionHeader({ label, title, description }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$components$2f$ui$2f$SectionHeader$2f$SectionHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$components$2f$ui$2f$Reveal$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                direction: "up",
                delay: 0,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$components$2f$ui$2f$SectionHeader$2f$SectionHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                    children: label
                }, void 0, false, {
                    fileName: "[project]/Downloads/projectportfolio-1/projectportfolio/components/ui/SectionHeader/SectionHeader.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/projectportfolio-1/projectportfolio/components/ui/SectionHeader/SectionHeader.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$components$2f$ui$2f$Reveal$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                direction: "up",
                delay: 150,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    children: title
                }, void 0, false, {
                    fileName: "[project]/Downloads/projectportfolio-1/projectportfolio/components/ui/SectionHeader/SectionHeader.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/projectportfolio-1/projectportfolio/components/ui/SectionHeader/SectionHeader.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$components$2f$ui$2f$Reveal$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                direction: "up",
                delay: 300,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$components$2f$ui$2f$SectionHeader$2f$SectionHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].description,
                    children: description
                }, void 0, false, {
                    fileName: "[project]/Downloads/projectportfolio-1/projectportfolio/components/ui/SectionHeader/SectionHeader.tsx",
                    lineNumber: 23,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/projectportfolio-1/projectportfolio/components/ui/SectionHeader/SectionHeader.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/projectportfolio-1/projectportfolio/components/ui/SectionHeader/SectionHeader.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/projectportfolio-1/projectportfolio/data/portfolio.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    role: "Développeur Fullstack Junior | Passionné Réseaux & Sécurité",
    email: "manasse.adou@epitech.eu",
    phone: "+225 07 97 41 44 38",
    phoneLink: "+2250797414438",
    location: "Abidjan, Koumassi - Côte d'Ivoire",
    socialName: "Manasse Thecle ADOU",
    headline: "Je conçois des applications web simples et structurées, avec une attention particulière pour la sécurité, les réseaux et la lisibilité du code.",
    shortPitch: "Développeur junior ayant récemment terminé ma formation, je combine mes bases en développement web (React, Vue, Laravel) et en réseaux pour construire des projets claires, fiables et faciles à utiliser."
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
        value: "5+",
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
        name: "Projet Mobile",
        category: "Application mobile",
        stack: [
            "Mobile",
            "UI",
            "Logique utilisateur"
        ],
        description: "Application réalisée pendant la formation WE.CODE / Epitech pour pratiquer la structure d'écrans, la navigation et la logique d'une application mobile.",
        result: "Mise en pratique du développement mobile dans un contexte de formation intensive."
    },
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
        name: "La Boutique",
        category: "E-commerce",
        stack: [
            "PHP natif",
            "PDO",
            "Sessions"
        ],
        description: "Site e-commerce solo avec authentification, sessions utilisateur et accès aux données grâce à PDO.",
        result: "Projet fondateur pour comprendre le fonctionnement complet d'une application web sans framework."
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
"[project]/Downloads/projectportfolio-1/projectportfolio/components/sections/ContactSection/ContactSection.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "cardInfo": "ContactSection-module__ZIL-Cq__cardInfo",
  "cardLink": "ContactSection-module__ZIL-Cq__cardLink",
  "cardType": "ContactSection-module__ZIL-Cq__cardType",
  "cardValue": "ContactSection-module__ZIL-Cq__cardValue",
  "contactCards": "ContactSection-module__ZIL-Cq__contactCards",
  "copyBtn": "ContactSection-module__ZIL-Cq__copyBtn",
  "emailBtn": "ContactSection-module__ZIL-Cq__emailBtn",
  "fadeIn": "ContactSection-module__ZIL-Cq__fadeIn",
  "form": "ContactSection-module__ZIL-Cq__form",
  "infoCol": "ContactSection-module__ZIL-Cq__infoCol",
  "inputGroup": "ContactSection-module__ZIL-Cq__inputGroup",
  "section": "ContactSection-module__ZIL-Cq__section",
  "shareBox": "ContactSection-module__ZIL-Cq__shareBox",
  "shareButtons": "ContactSection-module__ZIL-Cq__shareButtons",
  "status": "ContactSection-module__ZIL-Cq__status",
  "submitBtn": "ContactSection-module__ZIL-Cq__submitBtn",
});
}),
"[project]/Downloads/projectportfolio-1/projectportfolio/components/sections/ContactSection/ContactSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContactSection",
    ()=>ContactSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/projectportfolio-1/projectportfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/projectportfolio-1/projectportfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$components$2f$ui$2f$SectionHeader$2f$SectionHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/projectportfolio-1/projectportfolio/components/ui/SectionHeader/SectionHeader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$components$2f$ui$2f$Reveal$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/projectportfolio-1/projectportfolio/components/ui/Reveal/Reveal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/projectportfolio-1/projectportfolio/data/portfolio.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Downloads/projectportfolio-1/projectportfolio/components/sections/ContactSection/ContactSection.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
;
;
function ContactSection() {
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [copyStatus, setCopyStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Copier le lien");
    const shareSubject = encodeURIComponent(`Portfolio de ${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].fullName}`);
    const shareBody = encodeURIComponent(`${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].fullName} - ${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].role}`);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$components$2f$ui$2f$Reveal$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                direction: "right",
                delay: 100,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].infoCol,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$components$2f$ui$2f$SectionHeader$2f$SectionHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SectionHeader"], {
                            label: "Contact",
                            title: "Prêt à apprendre, contribuer et progresser.",
                            description: "Je suis disponible pour discuter d'une opportunité, d'un stage, d'un projet ou d'une collaboration autour du développement web, mobile, des réseaux ou de la cybersécurité."
                        }, void 0, false, {
                            fileName: "[project]/Downloads/projectportfolio-1/projectportfolio/components/sections/ContactSection/ContactSection.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contactCards,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].email}`,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardLink,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardType,
                                            children: "Email"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/projectportfolio-1/projectportfolio/components/sections/ContactSection/ContactSection.tsx",
                                            lineNumber: 77,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardValue,
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].email
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/projectportfolio-1/projectportfolio/components/sections/ContactSection/ContactSection.tsx",
                                            lineNumber: 78,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/projectportfolio-1/projectportfolio/components/sections/ContactSection/ContactSection.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].phoneLink}`,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardLink,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardType,
                                            children: "Téléphone"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/projectportfolio-1/projectportfolio/components/sections/ContactSection/ContactSection.tsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardValue,
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].phone
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/projectportfolio-1/projectportfolio/components/sections/ContactSection/ContactSection.tsx",
                                            lineNumber: 82,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/projectportfolio-1/projectportfolio/components/sections/ContactSection/ContactSection.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardInfo,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardType,
                                            children: "Localisation"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/projectportfolio-1/projectportfolio/components/sections/ContactSection/ContactSection.tsx",
                                            lineNumber: 85,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardValue,
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].location
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/projectportfolio-1/projectportfolio/components/sections/ContactSection/ContactSection.tsx",
                                            lineNumber: 86,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/projectportfolio-1/projectportfolio/components/sections/ContactSection/ContactSection.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardInfo,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardType,
                                            children: "LinkedIn"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/projectportfolio-1/projectportfolio/components/sections/ContactSection/ContactSection.tsx",
                                            lineNumber: 89,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardValue,
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].socialName
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/projectportfolio-1/projectportfolio/components/sections/ContactSection/ContactSection.tsx",
                                            lineNumber: 90,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/projectportfolio-1/projectportfolio/components/sections/ContactSection/ContactSection.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/projectportfolio-1/projectportfolio/components/sections/ContactSection/ContactSection.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/projectportfolio-1/projectportfolio/components/sections/ContactSection/ContactSection.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/projectportfolio-1/projectportfolio/components/sections/ContactSection/ContactSection.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$components$2f$ui$2f$Reveal$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                direction: "left",
                delay: 200,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].form,
                    onSubmit: handleSubmit,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "form-name",
                                    children: "Nom"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/projectportfolio-1/projectportfolio/components/sections/ContactSection/ContactSection.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "form-name",
                                    name: "name",
                                    type: "text",
                                    placeholder: "Votre nom",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/projectportfolio-1/projectportfolio/components/sections/ContactSection/ContactSection.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/projectportfolio-1/projectportfolio/components/sections/ContactSection/ContactSection.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "form-email",
                                    children: "Email"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/projectportfolio-1/projectportfolio/components/sections/ContactSection/ContactSection.tsx",
                                    lineNumber: 104,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "form-email",
                                    name: "email",
                                    type: "email",
                                    placeholder: "votre.email@exemple.com",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/projectportfolio-1/projectportfolio/components/sections/ContactSection/ContactSection.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/projectportfolio-1/projectportfolio/components/sections/ContactSection/ContactSection.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "form-message",
                                    children: "Message"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/projectportfolio-1/projectportfolio/components/sections/ContactSection/ContactSection.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    id: "form-message",
                                    name: "message",
                                    rows: 5,
                                    placeholder: "Écrivez votre message ici",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/projectportfolio-1/projectportfolio/components/sections/ContactSection/ContactSection.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/projectportfolio-1/projectportfolio/components/sections/ContactSection/ContactSection.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: isSubmitting,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].submitBtn,
                            children: isSubmitting ? "Envoi en cours..." : "Envoyer le message"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/projectportfolio-1/projectportfolio/components/sections/ContactSection/ContactSection.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this),
                        status ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].status,
                            children: status
                        }, void 0, false, {
                            fileName: "[project]/Downloads/projectportfolio-1/projectportfolio/components/sections/ContactSection/ContactSection.tsx",
                            lineNumber: 117,
                            columnNumber: 21
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].shareBox,
                            "aria-label": "Partager le portfolio",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Partager ce portfolio"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/projectportfolio-1/projectportfolio/components/sections/ContactSection/ContactSection.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].shareButtons,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: handleCopy,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].copyBtn,
                                            children: copyStatus
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/projectportfolio-1/projectportfolio/components/sections/ContactSection/ContactSection.tsx",
                                            lineNumber: 122,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `mailto:?subject=${shareSubject}&body=${shareBody}`,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$projectportfolio$2d$1$2f$projectportfolio$2f$components$2f$sections$2f$ContactSection$2f$ContactSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].emailBtn,
                                            children: "Partager par mail"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/projectportfolio-1/projectportfolio/components/sections/ContactSection/ContactSection.tsx",
                                            lineNumber: 125,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/projectportfolio-1/projectportfolio/components/sections/ContactSection/ContactSection.tsx",
                                    lineNumber: 121,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/projectportfolio-1/projectportfolio/components/sections/ContactSection/ContactSection.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/projectportfolio-1/projectportfolio/components/sections/ContactSection/ContactSection.tsx",
                    lineNumber: 97,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/projectportfolio-1/projectportfolio/components/sections/ContactSection/ContactSection.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/projectportfolio-1/projectportfolio/components/sections/ContactSection/ContactSection.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/projectportfolio-1/projectportfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Downloads/projectportfolio-1/projectportfolio/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
];

//# sourceMappingURL=Downloads_projectportfolio-1_projectportfolio_0o67cc3._.js.map