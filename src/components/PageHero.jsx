import Shape from './Shape'

/* En-tête des pages intérieures : grand titre + aplat de pilier */
const fonds = {
  jaune: 'bg-jaune text-anthracite',
  rouge: 'bg-rouge text-white',
  nuit: 'bg-nuit text-creme on-dark',
  creme: 'bg-creme text-anthracite',
}
export default function PageHero({ rubrique, titre, intro, couleur = 'jaune', forme = 'cercle', children }) {
  return (
    <section className={`relative overflow-hidden ${fonds[couleur]}`} aria-labelledby="titre-page">
      <Shape
        forme={forme}
        couleur={{ jaune: 'creme', nuit: 'jaune', rouge: 'creme', creme: 'jaune' }[couleur]}
        className="anim-flotte pointer-events-none absolute -right-20 -top-20 h-48 w-48 opacity-90 sm:h-64 sm:w-64 lg:h-80 lg:w-80"
      />
      <div className="wrap relative grid gap-8 pb-14 pt-12 sm:pb-20 sm:pt-16 lg:grid-cols-12">
        <p className="lg:col-span-12">
          {/* sur le rouge, le petit texte passe sur une étiquette crème (contraste AA) */}
          <span className={`eyebrow ${couleur === 'rouge' ? 'bg-creme px-2 py-1 text-anthracite' : ''}`}>{rubrique}</span>
        </p>
        <h1 id="titre-page" className="titre-xl lg:col-span-10">{titre}</h1>
        {intro && (
          <div className={`lg:col-span-6 lg:col-start-7 ${couleur === 'rouge' ? 'bg-creme p-6 text-anthracite' : ''}`}>
            <p className="lead">{intro}</p>
          </div>
        )}
        {children && <div className="lg:col-span-12">{children}</div>}
      </div>
    </section>
  )
}
