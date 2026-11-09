import { Link } from 'react-router-dom'
import usePageTitle from '../components/usePageTitle'
import PageHero from '../components/PageHero'

export default function Introuvable() {
  usePageTitle('Page introuvable')
  return (
    <>
      <PageHero rubrique="Erreur 404" titre="Cette page n’existe pas." couleur="creme" forme="carre" intro="Le lien est peut-être incorrect. Reprenez la visite depuis l’accueil ou les informations pratiques." />
      <div className="wrap flex flex-wrap gap-3 pb-20">
        <Link to="/" className="btn btn-dark">Retour à l’accueil</Link>
        <Link to="/infos" className="btn btn-light">Informations pratiques</Link>
      </div>
    </>
  )
}
