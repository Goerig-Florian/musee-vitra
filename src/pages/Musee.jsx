import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import usePageTitle from '../components/usePageTitle'
import PageHero from '../components/PageHero'
import Photo from '../components/Photo'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import Shape from '../components/Shape'
import { visitesFlash, billetComprend, renovation } from '../data/musee'

const sommaire = [
  { id: 'architecture', label: 'Architecture' },
  { id: 'collections', label: 'Collections' },
  { id: 'visites-flash', label: 'Visites flash' },
  { id: 'billet', label: 'Avec votre billet' },
  { id: 'renovation', label: 'La rénovation' },
]

export default function Musee() {
  usePageTitle('Découvrir le musée')
  return (
    <>
      <PageHero
        rubrique="Découvrir le musée"
        titre="Le design se découvre."
        intro="Objets, formes, matières et usages : explorez les collections et l’architecture du musée, et découvrez comment le design accompagne notre quotidien."
        couleur="jaune"
        forme="cercle"
      />

      <nav aria-label="Sur cette page" className="sticky top-[var(--header-h)] z-30 border-b border-anthracite bg-creme">
        <ul className="wrap flex gap-6 overflow-x-auto py-3 text-sm font-semibold [scrollbar-width:none]">
          {sommaire.map((s) => (
            <li key={s.id} className="shrink-0"><Link to={{ hash: s.id }} className="underline-offset-4 hover:underline">{s.label}</Link></li>
          ))}
        </ul>
      </nav>

      {/* Architecture */}
      <section id="architecture" tabIndex={-1} aria-labelledby="t-archi" className="wrap py-20 outline-none sm:py-28">
        <Reveal><SectionTitle num="01" rubrique="Architecture" titre="Un bâtiment à regarder." id="t-archi">
          L’architecture du musée fait partie de la visite. Elle reste inchangée après la rénovation : prenez le temps d’en observer les formes et les détails, à l’extérieur comme à l’intérieur.
        </SectionTitle></Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-6 lg:gap-6">
          <Reveal className="sm:col-span-4"><Photo slot="musee-jour" ratio="aspect-[16/10]" /></Reveal>
          <Reveal className="sm:col-span-2 sm:mt-24" delay={100}><Photo slot="architecture-detail-1" ratio="aspect-[3/4]" /></Reveal>
          <Reveal className="sm:col-span-3 sm:col-start-2" delay={150}><Photo slot="architecture-detail-2" ratio="aspect-[4/3]" /></Reveal>
          <Reveal className="sm:col-span-2" delay={200}><Photo slot="site-dome" ratio="aspect-[4/5]" /></Reveal>
        </div>
      </section>

      {/* Collections */}
      <section id="collections" tabIndex={-1} aria-labelledby="t-coll" className="border-t border-anthracite py-20 outline-none sm:py-28">
        <div className="wrap">
          <Reveal><SectionTitle num="02" rubrique="Collections" titre="Objets, formes, matières et usages." id="t-coll">
            Les collections restent au cœur de la visite. Mobilier et objets y racontent la manière dont le design accompagne nos gestes de tous les jours.
          </SectionTitle></Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { slot: 'collection-objet-1', mot: 'Les formes' },
              { slot: 'collection-objet-2', mot: 'Les matières' },
              { slot: 'collection-objet-3', mot: 'Les usages' },
            ].map((o, i) => (
              <Reveal key={o.slot} delay={i * 100} as="figure">
                <Photo slot={o.slot} ratio="aspect-[4/5]" />
                <figcaption className="mt-3 flex items-baseline justify-between border-t border-anthracite pt-2">
                  <span className="font-display text-2xl font-bold">{o.mot}</span>
                  <span className="text-sm tabular-nums">0{i + 1}</span>
                </figcaption>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Visites flash */}
      <section id="visites-flash" tabIndex={-1} aria-labelledby="t-flash" className="relative overflow-hidden bg-jaune py-20 outline-none sm:py-28">
        <Shape forme="cercle" couleur="creme" className="anim-flotte pointer-events-none absolute -bottom-24 -right-16 h-80 w-80" />
        <div className="wrap relative grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="eyebrow">03 · Visites flash</p>
            <h2 id="t-flash" className="titre-l mt-6">Un objet, son usage, en quelques minutes.</h2>
            <p className="lead mt-8 max-w-xl">{visitesFlash.description}</p>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="eyebrow">{visitesFlash.quand}</p>
            <p className="mt-2 flex gap-6 font-display text-[clamp(4rem,10vw,7rem)] font-extrabold leading-none tracking-titre">
              {visitesFlash.heures.map((h) => <span key={h}>{h}</span>)}
            </p>
            <ul className="mt-6 space-y-2 border-t border-anthracite pt-4">
              <li className="flex gap-2"><Check className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />{visitesFlash.reservation}.</li>
              <li className="flex gap-2"><Check className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />Incluses dans le billet d’entrée.</li>
              <li className="flex gap-2"><Check className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />Aucune connaissance préalable nécessaire.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Billet */}
      <section id="billet" tabIndex={-1} aria-labelledby="t-billet" className="wrap py-20 outline-none sm:py-28">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">04 · Avec votre billet</p>
            <h2 id="t-billet" className="titre-m mt-6">Un billet, toute la journée — et la soirée.</h2>
            <Link to="/infos#tarifs" className="btn btn-light mt-8">Voir les tarifs <ArrowRight className="h-5 w-5" aria-hidden="true" /></Link>
          </Reveal>
          <Reveal as="ol" className="lg:col-span-6 lg:col-start-7" delay={100}>
            {billetComprend.map((b, i) => (
              <li key={b} className="flex gap-5 border-t border-anthracite py-4 last:border-b">
                <span className="font-display text-lg font-bold tabular-nums">0{i + 1}</span>
                <span className="text-lg">{b}</span>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Rénovation */}
      <section id="renovation" tabIndex={-1} aria-labelledby="t-reno" className="on-dark bg-nuit py-20 text-creme outline-none sm:py-28">
        <div className="wrap">
          <Reveal><SectionTitle num="05" rubrique={`La rénovation ${renovation.annee}`} titre="Mieux accueillir, sans rien changer à l’essentiel." id="t-reno" clair>
            {renovation.inchange} La rénovation porte sur le confort et l’accueil des visiteurs.
          </SectionTitle></Reveal>
          <div className="mt-14 grid gap-12 lg:grid-cols-12">
            <Reveal as="ul" className="lg:col-span-6">
              {renovation.travaux.map((t) => (
                <li key={t} className="flex items-center gap-4 border-t border-creme/30 py-3 text-lg last:border-b">
                  <span className="h-3 w-3 shrink-0 bg-jaune" aria-hidden="true" />{t}
                </li>
              ))}
            </Reveal>
            <Reveal className="lg:col-span-5 lg:col-start-8" delay={120}>
              <p className="eyebrow text-jaune">Investissement</p>
              <p className="mt-3 font-display text-6xl font-extrabold leading-none tracking-titre sm:text-7xl">1,8 M€</p>
              <dl className="mt-8 grid gap-4 border-t border-creme/30 pt-6">
                <div className="flex justify-between gap-4"><dt>Financés par la municipalité</dt><dd className="font-display text-2xl font-bold">1,2 M€</dd></div>
                <div className="flex justify-between gap-4"><dt>Autres partenaires publics</dt><dd className="font-display text-2xl font-bold">600 000 €</dd></div>
              </dl>
              <h3 className="mt-12 font-display text-2xl font-bold">De nouveaux usages</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                <li><Link to="/agenda#atelier" className="tag hover:bg-creme hover:text-nuit">Activités pour débutants</Link></li>
                <li><Link to="/agenda#nocturnes" className="tag hover:bg-creme hover:text-nuit">Nocturnes</Link></li>
                <li><Link to="/agenda#convivialite" className="tag hover:bg-creme hover:text-nuit">Espace de convivialité</Link></li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section aria-label="Continuer" className="wrap grid gap-4 py-16 sm:grid-cols-2">
        <Link to="/agenda" className="group flex items-center justify-between bg-rouge p-6 text-white sm:p-8">
          <span className="font-display text-3xl font-extrabold tracking-titre">Activités & agenda</span>
          <ArrowRight className="h-8 w-8 transition-transform group-hover:translate-x-2" aria-hidden="true" />
        </Link>
        <Link to="/infos" className="group flex items-center justify-between bg-anthracite p-6 text-creme sm:p-8">
          <span className="font-display text-3xl font-extrabold tracking-titre">Préparer ma visite</span>
          <ArrowRight className="h-8 w-8 transition-transform group-hover:translate-x-2" aria-hidden="true" />
        </Link>
      </section>
    </>
  )
}
