/* ==========================================================
   CONFIGURATION DE DÉMONSTRATION
   Deux états du site, contrôlés explicitement (pas par la date) :
   - 'avant' : campagne annonçant la réouverture du 2 février 2027
   - 'apres' : activités, contenus de suivi et questionnaire
   Bascule possible via la barre de démonstration en haut du site
   ou par l'URL : ?phase=avant / ?phase=apres
   ========================================================== */
export const PHASE_PAR_DEFAUT = 'avant'
export const AFFICHER_BARRE_DEMO = true
