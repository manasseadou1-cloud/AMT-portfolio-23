# Portfolio de ADOU Thecle Manasse

Ce projet est un portfolio professionnel réalisé avec Next.js. Il présente le profil, les compétences, les projets, le parcours, les certifications et les informations de contact de Manasse dans une interface noire et verte, moderne, responsive et facile à comprendre.

## Lancer le projet

```bash
npm install
npm run dev
```

Ensuite, ouvre l'adresse affichée dans le terminal, souvent `http://localhost:3000`.

## Structure professionnelle du projet

Le projet est découpé pour être plus propre et plus facile à maintenir.

`app/page.tsx` assemble les grandes sections du portfolio.

`app/layout.tsx` définit la structure HTML générale et les informations SEO.

`app/globals.css` contient seulement les styles globaux : couleurs, police, fond, comportements de base.

`app/page.module.css` contient le style spécifique de la page principale.

`data/portfolio.ts` contient les textes et les listes affichées dans le site.

`components/` contient les composants réutilisables du portfolio.

Chaque dossier de composant contient un fichier `.tsx` pour la structure et un fichier `.module.css` pour son style.

## Pourquoi cette structure est meilleure

Dans la première version, presque tout était dans `app/page.tsx` et `app/globals.css`.

Dans cette version, chaque partie a un rôle clair :

`Navigation` gère le menu.

`HeroSection` gère la première section avec le nom, le titre, les boutons et la place pour la photo.

`AboutSection` gère la présentation personnelle.

`SkillsSection` gère les compétences.

`ProjectsSection` gère les projets.

`TrainingSection` gère les formations, certifications, langues et centres d'intérêt.

`ContactSection` gère les informations de contact et le formulaire.

`Footer` gère le bas de page.

Cette organisation montre que tu sais structurer un projet comme un vrai développeur : une page principale légère, des composants séparés, des données centralisées et des styles rangés.

## Explication de `app/page.tsx`

Le fichier commence par importer les composants :

```tsx
import { AboutSection } from "@/components/AboutSection/AboutSection";
```

Le symbole `@` représente la racine du projet. Il permet d'éviter les chemins longs comme `../../components/...`.

La fonction `Home` représente la page d'accueil du portfolio.

Dans le `<main>`, chaque composant correspond à une section complète du site.

Le fichier reste très court parce que sa mission n'est pas de contenir toute la logique. Sa mission est d'organiser la page.

## Explication de `data/portfolio.ts`

Ce fichier contient les informations affichées sur le site.

`profile` contient les informations principales : nom, rôle, email, téléphone, localisation et phrase d'accroche.

`navigationItems` contient les liens du menu.

`highlights` contient les petits chiffres importants affichés dans la section d'accueil.

`aboutTexts` contient les paragraphes de présentation.

`skillGroups` contient les groupes de compétences : frontend, backend, données, réseau et sécurité.

`projects` contient la liste des projets. Chaque projet possède un nom, une catégorie, une stack, une description et un résultat.

`training` contient les formations.

`certifications` contient les certifications.

`languages` contient les langues.

`interests` contient les centres d'intérêt.

L'intérêt de ce fichier est simple : si tu veux changer un texte ou ajouter un projet, tu modifies les données sans toucher à la structure des composants.

## Explication des composants

`Navigation.tsx` affiche le menu. Il utilise `navigationItems.map(...)` pour créer les liens automatiquement.

`HeroSection.tsx` affiche la première section. Elle contient le nom, la phrase d'accroche, les boutons et la carte prévue pour la photo.

`AboutSection.tsx` affiche le profil. Il récupère les textes depuis `data/portfolio.ts`.

`SkillsSection.tsx` affiche les compétences par groupe. La méthode `map` permet de créer une carte pour chaque groupe.

`ProjectsSection.tsx` affiche les projets sous forme de cartes. Chaque carte montre la catégorie, le nom, la description, les technologies et le résultat du projet.

`TrainingSection.tsx` affiche le parcours, les certifications, les langues et les centres d'intérêt.

`ContactSection.tsx` contient `"use client"` parce que le formulaire utilise `useState`. Dans Next.js, un composant qui utilise une interaction côté navigateur doit être un composant client.

Ce composant contient aussi deux actions de partage : copier le lien du portfolio et partager par email.

`Footer.tsx` affiche le bas de page avec le nom et les liens de navigation.

## Explication du style

`app/globals.css` garde seulement les règles communes à tout le site.

Les variables comme `--color-primary`, `--color-background` et `--color-muted` servent à garder une identité visuelle cohérente.

Les fichiers `.module.css` évitent de mélanger tous les styles au même endroit.

Par exemple, `HeroSection.module.css` ne concerne que la section d'accueil.

`ProjectsSection.module.css` ne concerne que les cartes de projets.

Cette méthode limite les conflits de style et rend le projet plus professionnel.

## Comment ajouter ta photo

Crée un dossier `public` à la racine du projet.

Ajoute ta photo dedans, par exemple `public/manasse.jpg`.

Dans `components/HeroSection/HeroSection.tsx`, remplace le bloc :

```tsx
<div className={styles.photoBox}>
  <span>Photo</span>
  <small>Emplacement prévu pour ton image</small>
</div>
```

par :

```tsx
<div className={styles.photoBox}>
  <img src="/manasse.jpg" alt="Photo de ADOU Thecle Manasse" />
</div>
```

Puis ajoute dans `components/HeroSection/HeroSection.module.css` :

```css
.photoBox img {
  width: 100%;
  height: 100%;
  border-radius: var(--radius);
  object-fit: cover;
}
```

## Comment modifier le contenu

Pour changer ton email, modifie `profile.email` dans `data/portfolio.ts`.

Pour ajouter une compétence, ajoute un élément dans le bon groupe de `skillGroups`.

Pour ajouter un projet, ajoute un nouvel objet dans `projects`.

Pour changer une couleur, modifie les variables dans `app/globals.css`.

Pour modifier le style d'une section, ouvre le fichier `.module.css` du composant concerné.

## Points demandés par le sujet

Le portfolio contient une page d'accueil engageante.

Il contient une section profil.

Il contient une galerie de projets.

Il contient des animations légères.

Il contient une section compétences.

Il contient un formulaire de contact interactif.

Il contient des actions de partage.

Il contient une navigation claire.

Il est responsive pour mobile.

Il utilise des métadonnées SEO dans `app/layout.tsx`.

Il respecte une structure accessible avec des sections, des liens, des labels et des textes lisibles.
