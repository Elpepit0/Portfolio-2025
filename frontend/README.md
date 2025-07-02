# Portfolio Personnel

Ce projet est un portfolio personnel moderne et interactif, conçu pour présenter les compétences et les projets d'un développeur full-stack. Il est construit avec React et TypeScript pour le frontend, stylisé avec Tailwind CSS, et intègre des animations fluides grâce à Framer Motion.

## Fonctionnalités

*   **Design Responsive:** Optimisé pour une expérience utilisateur fluide sur les appareils mobiles et de bureau.
*   **Navigation Animée:** Une barre de navigation dynamique qui met en évidence la section active et s'adapte au défilement.
*   **Galerie de Projets Interactive:** Chaque carte de projet ouvre une modale détaillée avec une description, une liste de technologies, un lien vers le projet, et une galerie d'images navigable.
*   **Visionneuse d'Images (Lightbox):** Cliquez sur une image dans la modale pour l'afficher en plein écran avec des contrôles de navigation.
*   **Formulaire de Contact:** Un formulaire fonctionnel pour permettre aux visiteurs de me contacter directement.
*   **Animations Fluides:** Utilisation de Framer Motion pour des transitions et des interactions visuellement attrayantes.
*   **Curseur Personnalisé:** Un curseur interactif qui change d'apparence en fonction des éléments survolés.

## Technologies Utilisées

*   **Frontend:**
    *   React.js
    *   TypeScript
    *   Tailwind CSS
    *   Framer Motion
    *   Vite (pour le build)
    *   EmailJS (pour le formulaire de contact)
    *   Lucide React (icônes)
    *   React Icons (icônes)

## Installation et Démarrage

Suivez ces étapes pour configurer et exécuter le projet en local.

### Prérequis

Assurez-vous d'avoir Node.js et npm (ou Yarn) installés sur votre machine.

*   [Node.js](https://nodejs.org/)

### Étapes

1.  **Cloner le dépôt (si applicable):**
    ```bash
    git clone <URL_DU_DEPOT>
    cd <NOM_DU_DOSSIER_DU_DEPOT>
    ```

2.  **Naviguer vers le dossier `frontend`:**
    ```bash
    cd frontend
    ```

3.  **Installer les dépendances:**
    ```bash
    npm install
    # ou
    yarn install
    ```

4.  **Configuration des variables d'environnement (pour EmailJS):**
    Créez un fichier `.env` à la racine du dossier `frontend` et ajoutez vos clés EmailJS :
    ```
    VITE_EMAILJS_SERVICE_ID=your_service_id
    VITE_EMAILJS_TEMPLATE_ID=your_template_id
    VITE_EMAILJS_PUBLIC_KEY=your_public_key
    ```
    Vous pouvez obtenir ces clés en vous inscrivant sur [EmailJS](https://www.emailjs.com/).

5.  **Démarrer le serveur de développement:**
    ```bash
    npm run dev
    # ou
    yarn dev
    ```

    L'application sera accessible à l'adresse `http://localhost:5173` (ou un autre port disponible).

6.  **Construire l'application pour la production:**
    ```bash
    npm run build
    # ou
    yarn build
    ```
    Cela créera une version optimisée de l'application dans le dossier `dist`.

## Structure du Projet

```
. 
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/             # Images et autres ressources statiques
│   │   ├── components/         # Composants réutilisables (Navbar, ProjectCard, ProjectModal, etc.)
│   │   ├── context/            # Contextes React (ex: CursorContext)
│   │   ├── hooks/              # Hooks personnalisés (ex: useTilt)
│   │   ├── pages/              # Pages principales de l'application (Home, About, Projects, Contact)
│   │   ├── App.tsx             # Composant racine de l'application
│   │   ├── main.tsx            # Point d'entrée de l'application
│   │   ├── index.css           # Styles globaux et imports Tailwind
│   │   └── ...
│   ├── package.json
│   ├── tailwind.config.js
│   ├── vite.config.ts
│   └── ...
├── package.json
├── package-lock.json
└── README.md
```

## Contribution

Les contributions sont les bienvenues ! Si vous avez des suggestions ou des améliorations, n'hésitez pas à ouvrir une issue ou à soumettre une pull request.

## Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails. (Note: Un fichier LICENSE n'est pas inclus dans ce dépôt, mais il est recommandé d'en ajouter un.)
