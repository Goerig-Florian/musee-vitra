# Site du Musée Vitra : choix UX et UI

Prototype de site pour la campagne de réouverture « Vitra, le design se vit. » (réouverture le mardi 2 février 2027 à 10 h).

## 1. Arborescence

Six pages. Les trois piliers organisent les contenus mais ne deviennent pas des rubriques de menu : un visiteur cherche « l'agenda » ou « les horaires », pas « Participer ».

| Page | Rôle | Contenu principal |
|---|---|---|
| **Accueil** | Comprendre le concept et s'orienter | Hero, réouverture, 3 piliers, prochains rendez-vous, nocturnes, infos essentielles, Vitra TV, avis (après réouverture) |
| **Le musée** (Découvrir) | Garder l'identité culturelle | Architecture, collections, visites flash, contenu du billet, rénovation 2026 et financement |
| **Activités & agenda** (Participer + Se retrouver) | Choisir une activité et la réserver | Rendez-vous filtrables, semaine type, atelier du samedi, nocturnes, espace de convivialité |
| **Infos pratiques** | Préparer la visite | Horaires, tarifs, « faut-il réserver ? », accès, accessibilité, contact |
| **Vitra TV** | Présenter le projet de WebTV | Vidéo à la une, catalogue par rubriques, concerts, agenda, objectifs du projet |
| **Votre avis** | Suivi après réouverture | Questionnaire en 8 questions (visible dans le menu en mode « après ») |

Le bouton **« Préparer ma visite »** reste toujours visible dans l'en-tête, et les pages longues ont un sommaire d'ancres fixe.

## 2. Parcours utilisateurs

**Famille de Valmont-sur-Rive.** Accueil → bloc « L'essentiel en un coup d'œil » (gratuit pour les moins de 18 ans) → Infos pratiques, tableau « Faut-il réserver ? » → Agenda, atelier du samedi → courriel prérempli avec la date et le nombre de places. Le tarif de l'atelier (5 €, visite du jour comprise) est répété à côté du bouton pour éviter qu'on ajoute un billet.

**Jeune adulte ou actif.** Accueil → bandeau bleu nuit « Le design se vit aussi le soir » → Agenda, filtre Concerts / Rencontres / Performances → carte du rendez-vous → demande de réservation. Les conditions sont sur la carte : inclus dans le billet, réservation gratuite obligatoire, 60 places, tram T2 jusqu'à 23 h le vendredi.

**Touriste.** En-tête → Infos pratiques : horaires, tarifs identiques pour tous, adresse en grand, tram T2 arrêt Ateliers à 250 m, fréquences. Pas de carte inventée.

**Amateur de design.** Accueil → pilier jaune « Explorer les collections » → Le musée : architecture, collections, visites flash, rénovation (sans nouvelles collections ni nouveaux espaces).

**Visiteur après la réouverture.** Accueil (bloc jaune « Votre visite, votre avis ») → questionnaire. S'il répond « Non » à la question 1, il est orienté vers les infos pratiques au lieu d'évaluer une visite qu'il n'a pas faite.

## 3. Direction UI

- **Grille éditoriale suisse** : 12 colonnes, compositions asymétriques (titre sur 7 à 8 colonnes, texte décalé à droite), filets anthracite, rubriques numérotées comme dans un magazine, marges larges.
- **Typographie** : League Spartan 800 en très grands titres serrés (jusqu'à environ 136 px), Inter pour les textes, les tableaux et les formulaires.
- **Un système de formes pour les piliers**, réutilisable sur les affiches et les réseaux sociaux : cercle jaune = Découvrir, carré rouge = Participer, demi-cercle bleu nuit = Se retrouver (une lune, pour le soir). Les trois formes forment aussi le logo.
- **Aplats francs**, sans ombres, sans effet de verre, sans dégradé ni coins arrondis : blocs jaune, rouge et bleu nuit pleine largeur, cartes délimitées par un filet épais.
- **Animations discrètes** : apparition progressive des sections, formes qui flottent lentement, flèches et formes qui bougent au survol. Elles sont toutes désactivées si l'utilisateur a demandé à réduire les animations.
- **Placeholders photo assumés** : fond gris doux, trame façon planche contact, forme du pilier, et l'étiquette « Photo à venir » avec le nom de l'emplacement. Le site reste présentable avant de recevoir les photos.

## 4. Accessibilité (WCAG 2.2 AA)

- Contrastes calculés : anthracite sur jaune 10,5:1, blanc sur bleu nuit 14:1, anthracite sur crème 14:1. Le blanc sur le rouge #EA463A ne fait que 3,9:1 : il est réservé aux grands titres. Les petits textes posés sur du rouge vont dans un bloc ou une étiquette crème.
- Lien d'évitement, focus très visible (anthracite, ou jaune sur fond sombre), menu mobile au clavier (Échap, focus maintenu dans le menu), titres hiérarchisés, tableaux avec en-têtes, formulaires avec légendes, erreurs annoncées et récapitulatif placé en tête.
- Contrôle automatique axe-core sur toutes les pages, dans les deux modes : aucune violation.

## 5. Garde-fous contre les fonctions trompeuses

- Pas de billetterie : le bouton « Contacter le musée pour réserver » ouvre un courriel prérempli, avec la mention « Votre réservation sera effective après confirmation par le musée ».
- Questionnaire : il est indiqué que les réponses ne sont pas envoyées à la municipalité (elles restent dans le navigateur et peuvent être effacées).
- Vitra TV : bandeau « Maquette de démonstration, projet proposé à la municipalité », chaque vidéo est marquée « Vidéo à venir », les concerts sont des « captations envisagées ». Aucun compteur de vues.
- Aucun intervenant, artiste, durée, place restante, inauguration ni navette n'a été inventé. Toutes les données viennent de `src/data/`.

## 6. Démonstration

La barre noire en haut du site bascule entre **Avant réouverture** et **Après réouverture**. On peut aussi utiliser `?phase=apres` dans l'adresse.
