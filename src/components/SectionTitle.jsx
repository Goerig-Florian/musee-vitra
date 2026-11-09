/* Titre de section éditorial : numéro + filet + rubrique */
export default function SectionTitle({ num, rubrique, titre, id, as: H = 'h2', className = '', clair = false, children }) {
  return (
    <header className={`grid gap-6 lg:grid-cols-12 ${className}`}>
      <div className={`flex items-baseline gap-4 border-t-2 pt-3 lg:col-span-12 ${clair ? 'border-creme' : 'border-anthracite'}`}>
        {num && <span className="font-display text-sm font-bold tabular-nums">{num}</span>}
        <span className="eyebrow">{rubrique}</span>
      </div>
      <H id={id} className="titre-l lg:col-span-8">{titre}</H>
      {children && <div className="lead lg:col-span-6 lg:col-start-7 lg:-mt-2">{children}</div>}
    </header>
  )
}
