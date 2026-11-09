# Musée Vitra — site de réouverture (prototype)

Prototype pédagogique (BUT MMI 3, atelier de communication publique).
Ville de Valmont-sur-Rive, adresse, courriels et conditions de réouverture **fictifs**.

## Lancer le projet

Prérequis : Node.js 18 ou plus récent.

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # version de production dans dist/ (à servir par un serveur web)
npm run build:autonome   # dist-autonome/musee-vitra.html : un seul fichier, s'ouvre par double-clic
```

Pour une présentation sans installation : ouvrir `dist-autonome/musee-vitra.html` dans Chrome, Firefox, Edge ou Safari.

## Deux versions (avant / après réouverture)

Le sélecteur « Version » en pied de page bascule entre :

- **Avant réouverture** : campagne annonçant le 2 février 2027 (compte à rebours, questionnaire fermé).
- **Après réouverture** : rubrique « Votre avis » dans le menu, appel au questionnaire sur l'accueil, questionnaire actif.

On peut aussi forcer l'état par l'adresse : `?phase=avant` ou `?phase=apres`
(ex. `http://localhost:5173/?phase=apres#/avis`). Valeur par défaut et barre de démonstration en haut de page (masquée, `AFFICHER_BARRE_DEMO`) : `src/config.js`.

## Où modifier quoi

| Besoin | Fichier |
|---|---|
| Couleurs de la charte (source unique) | `src/styles/tokens.css` |
| Horaires, tarifs, accès, conditions officielles | `src/data/musee.js` |
| Programmation (rendez-vous) | `src/data/programme.js` |
| Textes des trois piliers | `src/data/piliers.js` |
| Photographies | `src/data/images.js` + fichiers dans `public/photos/` |
| Vidéos Vitra TV | `src/data/vitratv.js` + fichiers dans `public/videos/` |
| Courriel de réservation prérempli | `src/lib/reservation.js` |

### Remplacer une photographie

1. Copier le fichier dans `public/photos/` (ex. `public/photos/facade.jpg`).
2. Dans `src/data/images.js`, à l'emplacement voulu : `src: 'photos/facade.jpg'` et vérifier le texte `alt`.

3. Supprimer `demo: true` sur cet emplacement.

**Photos intégrées (novembre 2026)** : `src/assets/photos/` (WebP, sans métadonnées GPS). La photo du hero (`musee-etang-jour.webp`) est une photo de l'équipe ; les vues de nuit et la vue de jour retouchée portent la mention discrète « Visuel d'illustration » (champ `mention` dans `images.js`, à retirer si ce sont des photos documentaires). Le champ `position` règle le cadrage quand l'image est recadrée.

Pour les emplacements encore sans photo (intérieur, objets des collections, atelier, convivialité), chaque emplacement affiche une **illustration graphique de démonstration** (SVG aux couleurs de la charte, dans `src/assets/demo/`, générées par `scripts/visuels-demo.py`). Elles portent la mention « Illustration de démo · photo à venir » et leur texte alternatif le précise : ce ne sont pas des photographies du musée.
Si `src` vaut `null`, un placeholder « Photo à venir » s'affiche à la place.
Aucune photo trouvée sur Internet n'a été intégrée par nos soins (droits non vérifiables).
Emplacements : `hero-architecture`, `reouverture-architecture`, `architecture-detail-1/2`, `espace-interieur`,
`collection-objet-1/2/3`, `experience-decouvrir/participer/retrouver`, `convivialite`.

### Ajouter une vidéo à Vitra TV

Déposer la vidéo (MP4 H.264) dans `public/videos/`, puis renseigner `src: 'videos/mon-fichier.mp4'`
(et éventuellement `poster`, `sousTitres` pour un fichier .vtt) dans `src/data/vitratv.js`.
La carte passe automatiquement de « Vidéo à venir » à « Lire » et ouvre le lecteur.
N'ajouter que des captations réellement tournées et autorisées.

## Choix techniques

- **React 18 + Vite** : composants réutilisables, lancement instantané, aucune dépendance serveur.
- **Tailwind CSS 3** : les couleurs de la charte sont des tokens (`jaune`, `rouge`, `nuit`, `creme`, `anthracite`, `gris`).
- **React Router (HashRouter)** : URLs du type `#/agenda`, qui fonctionnent sur n'importe quel hébergement statique et en fichier local.
- **Lucide** pour les pictogrammes ; polices League Spartan et Inter embarquées (Fontsource), sans appel à Google.
- **Pas de Framer Motion** : les animations (apparition des sections, formes qui flottent, survols) sont en CSS + IntersectionObserver, plus légères, et désactivées si l'utilisateur a demandé à réduire les animations.

## Ce que le prototype ne fait pas (volontairement)

- Aucune billetterie ni paiement en ligne ; aucune réservation enregistrée. Les boutons « Contacter le musée pour réserver » ouvrent un courriel prérempli vers musee@valmont.example, avec la mention « Votre réservation sera effective après confirmation par le musée ».
- Le questionnaire n'envoie rien : les réponses restent dans le navigateur (localStorage) et peuvent être effacées depuis la page.
- Vitra TV est présentée comme un projet proposé à la municipalité ; aucune vidéo n'est annoncée comme disponible.
- Aucune carte géographique, aucune invitation à une inauguration, aucun nom d'intervenant ou d'artiste.

Le document `CHOIX-UX-UI.md` présente l'arborescence, les parcours et la direction graphique.
