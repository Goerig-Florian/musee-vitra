import { Link } from 'react-router-dom'
import { ArrowRight, MonitorPlay } from 'lucide-react'
import { usePhase } from '../context/Phase'
import usePageTitle from '../components/usePageTitle'
import Photo from '../components/Photo'
import Shape from '../components/Shape'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import EventCard from '../components/EventCard'
import PracticalSummary from '../components/PracticalSummary'
import RdvConditions from '../components/RdvConditions'
import { piliers } from '../data/piliers'
import { rendezVous } from '../data/programme'
import { reouverture, horaires, nocturnes, renovation, transports } from '../data/musee'

function joursAvant() {
  const j = Math.ceil((new Date(reouverture.iso) - new Date()) / 86400000)
  return j > 0 ? j : null
}

/* ---------- 1. Hero ---------- */
function Hero() {
  const { avant } = usePhase()
  const j = avant ? joursAvant() : null
  return (
    <section aria-labelledby="titre-accueil" className="relative overflow-hidden">
      <div className="wrap grid gap-10 pb-12 pt-10 sm:pt-14 lg:grid-cols-12 lg:gap-8 lg:pb-20">
        <div className="flex flex-col lg:col-span-7">
          <p className="eyebrow flex items-center gap-3">
            <span className="inline-block h-[3px] w-10 bg-anthracite" aria-hidden="true" />
            Musée Vitra · Valmont-sur-Rive
          </p>
          <h1 id="titre-accueil" className="titre-xl mt-6 sm:mt-8">
            Vitra,<br />le design<br />se vit<span className="text-rouge" aria-hidden="true">.</span>
          </h1>
          <p className="mt-8 max-w-xl font-display text-2xl font-semibold leading-snug sm:text-3xl">
            Un musée pour <span className="bg-jaune px-1">découvrir</span>, <span className="bg-rouge px-1 text-white">participer</span> et <span className="bg-nuit px-1 text-creme">se retrouver</span>.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/musee" className="btn btn-dark">Découvrir le musée <ArrowRight className="h-5 w-5" aria-hidden="true" /></Link>
            <Link to="/infos" className="btn btn-light">Préparer ma visite <ArrowRight className="h-5 w-5" aria-hidden="true" /></Link>
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <Photo slot="hero-architecture" ratio="aspect-[4/5]" priority className="w-full" />
          <div className="absolute -bottom-6 left-0 w-[78%] bg-jaune p-5 sm:-left-8 sm:w-72 sm:p-6 lg:-left-16">
            {avant ? (
              <>
                <p className="eyebrow">Réouverture</p>
                <p className="mt-2 font-display text-3xl font-extrabold leading-none tracking-titre sm:text-4xl">Le 2 février 2027</p>
                <p className="mt-2 font-semibold">Mardi, à 10 h</p>
                {j && <p className="mt-4 border-t border-anthracite pt-3 text-sm font-semibold">Plus que <span className="tabular-nums">{j}</span> jours</p>}
              </>
            ) : (
              <>
                <p className="eyebrow">Rouvert depuis le {reouverture.court}</p>
                <p className="mt-2 font-display text-3xl font-extrabold leading-none tracking-titre sm:text-4xl">Ouvert {horaires.jours.toLowerCase()}</p>
                <p className="mt-2 font-semibold">{horaires.heures} · {horaires.fermeture.toLowerCase()}</p>
              </>
            )}
          </div>
          <Shape forme="carre" couleur="rouge" className="anim-flotte absolute -right-3 -top-3 h-12 w-12 sm:-right-5 sm:-top-5 sm:h-16 sm:w-16" />
        </div>
      </div>

      {/* bandeau des trois piliers */}
      <div className="mt-6 border-y border-anthracite">
        <ul className="wrap grid grid-cols-3 divide-x divide-anthracite text-center" aria-label="Les trois piliers">
          {piliers.map((p) => (
            <li key={p.id}>
              <Link to={p.lien} className="flex items-center justify-center gap-2 py-4 font-display text-base font-bold transition-colors hover:bg-anthracite hover:text-creme sm:gap-3 sm:text-xl">
                <Shape forme={p.forme} couleur={p.couleur} className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
                {p.nom}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ---------- 2. Réouverture ---------- */
function Reouverture() {
  return (
    <section aria-labelledby="titre-chapitre" className="wrap py-20 sm:py-28">
      <Reveal><SectionTitle num="01" rubrique="Réouverture" titre="Un nouveau chapitre pour le Musée Vitra." id="titre-chapitre" /></Reveal>
      <div className="mt-12 grid gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-6"><Photo slot="reouverture-architecture" ratio="aspect-[3/2]" /></Reveal>
        <Reveal className="flex flex-col lg:col-span-5 lg:col-start-8" delay={120}>
          <p className="lead">
            Le 2 février 2027, le Musée Vitra rouvre ses portes après une rénovation de ses espaces d’accueil,
            de son accessibilité et de ses installations techniques. Les collections et l’architecture restent au cœur
            de la visite, tandis que de nouvelles activités invitent chacun à découvrir le design autrement.
          </p>
          <dl className="mt-10 grid grid-cols-2 border-t border-anthracite">
            <div className="border-b border-r border-anthracite py-4 pr-4">
              <dt className="text-sm">Réouverture</dt>
              <dd className="font-display text-2xl font-bold">2 février 2027</dd>
            </div>
            <div className="border-b border-anthracite py-4 pl-4">
              <dt className="text-sm">Rénovation</dt>
              <dd className="font-display text-2xl font-bold">{renovation.annee}</dd>
            </div>
            <div className="col-span-2 py-4">
              <dt className="text-sm">Ce qui ne change pas</dt>
              <dd className="font-display text-2xl font-bold">Les collections et l’architecture</dd>
            </div>
          </dl>
          <Link to="/musee#renovation" className="btn btn-light mt-6 self-start">Ce que change la rénovation <ArrowRight className="h-5 w-5" aria-hidden="true" /></Link>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- 3. Trois façons de vivre le design ---------- */
const styles = {
  jaune: { bloc: 'bg-jaune text-anthracite', btn: 'btn-dark', forme: 'creme' },
  rouge: { bloc: 'bg-rouge text-white', btn: 'btn-dark', forme: 'creme' },
  nuit: { bloc: 'bg-nuit text-creme on-dark', btn: 'btn-jaune', forme: 'jaune' },
}
export function TroisPiliers({ num = '02' }) {
  return (
    <section aria-labelledby="titre-piliers" className="pb-20 sm:pb-28">
      <div className="wrap">
        <Reveal><SectionTitle num={num} rubrique="Trois façons de vivre le design" titre="Découvrir, participer, se retrouver." id="titre-piliers" /></Reveal>
      </div>
      <div className="wrap mt-12 grid gap-0 md:grid-cols-3">
        {piliers.map((p, i) => {
          const s = styles[p.couleur]
          return (
            <Reveal key={p.id} delay={i * 120} className={`group relative flex min-h-[30rem] flex-col overflow-hidden p-6 sm:p-8 ${s.bloc}`}>
              <Shape forme={p.forme} couleur={s.forme} className="absolute -right-10 -top-10 h-44 w-44 transition-transform duration-700 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:rotate-12" />
              {/* Petits textes sur rouge : posés sur une étiquette crème (contraste AA) */}
              <p className={`relative self-start font-display text-sm font-bold tabular-nums ${p.couleur === 'rouge' ? 'bg-creme px-2 py-1 text-anthracite' : ''}`}>0{i + 1}</p>
              <p className={`relative mt-24 self-start eyebrow ${p.couleur === 'rouge' ? 'bg-creme px-2 py-1 text-anthracite' : ''}`}>{p.nom}</p>
              <h3 className="relative mt-3 font-display text-4xl font-extrabold leading-[0.95] tracking-titre sm:text-5xl">{p.titre}</h3>
              <div className="relative mt-auto pt-10">
                {/* Sur le rouge, le texte courant passe sur un bloc crème (contraste AA) */}
                <div className={p.couleur === 'rouge' ? 'bg-creme p-5 text-anthracite' : ''}>
                  <p className="text-[17px] leading-relaxed">{p.texte}</p>
                  <Link to={p.lien} className={`btn ${s.btn} mt-6`}>{p.cta} <ArrowRight className="h-5 w-5" aria-hidden="true" /></Link>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

/* ---------- 4. Prochains rendez-vous ---------- */
function ProchainsRendezVous() {
  return (
    <section aria-labelledby="titre-rdv" className="border-t border-anthracite bg-creme py-20 sm:py-28">
      <div className="wrap">
        <Reveal>
          <SectionTitle num="03" rubrique="Agenda" titre="Les prochains rendez-vous." id="titre-rdv">
            Rencontres, concerts et performances, le vendredi soir pendant les nocturnes.
          </SectionTitle>
        </Reveal>
        <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 xl:grid-cols-4">
          {rendezVous.map((r, i) => <Reveal key={r.id} delay={i * 80} className="h-full"><EventCard rdv={r} /></Reveal>)}
        </div>
        <RdvConditions />
        <Link to="/agenda" className="btn btn-light mt-8">Tout l’agenda <ArrowRight className="h-5 w-5" aria-hidden="true" /></Link>
      </div>
    </section>
  )
}

/* ---------- 5. Nocturnes ---------- */
function Nocturnes() {
  return (
    <section aria-labelledby="titre-nocturnes" className="on-dark relative overflow-hidden bg-nuit py-20 text-creme sm:py-28">
      <Shape forme="demi" couleur="jaune" className="anim-flotte pointer-events-none absolute -bottom-32 -left-16 h-56 w-56" />
      <div className="wrap relative grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-6">
          <SectionTitle num="04" rubrique="Nocturnes" titre="Le design se vit aussi le soir." id="titre-nocturnes" clair />
          <p className="lead mt-8 max-w-xl">
            Les premier et troisième vendredis du mois, le Musée Vitra vous accueille de 18 h à 22 h.
            Rencontres, petits concerts et performances viennent prolonger la découverte des collections.
          </p>
          <ul className="mt-8 grid max-w-xl gap-3 border-t border-creme/30 pt-6 text-[15px]">
            <li className="flex gap-3"><span className="mt-2 h-2 w-2 shrink-0 bg-jaune" aria-hidden="true" />{nocturnes.billet} {nocturnes.supplement}</li>
            <li className="flex gap-3"><span className="mt-2 h-2 w-2 shrink-0 bg-jaune" aria-hidden="true" />Les rendez-vous culturels sont inclus dans le billet, avec une réservation gratuite obligatoire.</li>
            <li className="flex gap-3"><span className="mt-2 h-2 w-2 shrink-0 bg-jaune" aria-hidden="true" />Tram {transports.tram.ligne} : service jusqu’à 23 h le vendredi.</li>
          </ul>
          <Link to="/agenda#nocturnes" className="btn btn-jaune mt-10">Découvrir les nocturnes <ArrowRight className="h-5 w-5" aria-hidden="true" /></Link>
        </Reveal>
        <Reveal className="lg:col-span-5 lg:col-start-8" delay={150}>
          <Photo slot="experience-retrouver" ratio="aspect-[4/5]" sombre />
          <p className="mt-4 flex items-baseline justify-between border-t border-creme pt-3 font-display text-xl font-bold">
            <span>18 h – 22 h</span><span className="text-base font-semibold">1<sup>er</sup> & 3<sup>e</sup> vendredis</span>
          </p>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- 6. Informations pratiques ---------- */
function Infos() {
  return (
    <section aria-labelledby="titre-infos" className="bg-gris py-20 sm:py-28">
      <div className="wrap">
        <Reveal><SectionTitle num="05" rubrique="Préparer sa visite" titre="L’essentiel en un coup d’œil." id="titre-infos" /></Reveal>
        <Reveal className="mt-12" delay={100}><PracticalSummary titreId="recap" /></Reveal>
      </div>
    </section>
  )
}

/* ---------- 7. Vitra TV ---------- */
function VitraTvApercu() {
  return (
    <section aria-labelledby="titre-tv" className="wrap py-20 sm:py-28">
      <Reveal><SectionTitle num="06" rubrique="Vitra TV · projet" titre="Vitra TV — Le musée en images." id="titre-tv" /></Reveal>
      <div className="mt-12 grid gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <Link to="/vitra-tv" className="group block bg-nuit p-3 sm:p-4" aria-label="Découvrir Vitra TV">
            <div className="relative">
              <Photo slot="vitratv-apercu" ratio="aspect-video" sombre />
              <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 bg-jaune px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-anthracite">
                Bientôt
              </span>
            </div>
            <div className="flex items-center justify-between px-1 pt-3 text-creme">
              <span className="font-display text-lg font-bold">Vitra TV</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </div>
          </Link>
        </Reveal>
        <Reveal className="flex flex-col lg:col-span-4 lg:col-start-9" delay={120}>
          <p className="lead">Découvrez les coulisses du musée, les rencontres autour du design et les temps forts de sa programmation.</p>
          <p className="mt-6 border-l-4 border-jaune pl-4 text-[15px] leading-relaxed">
            <strong>Un projet en préparation.</strong> Vitra TV est proposée à la municipalité ; les premières vidéos seront annoncées ici.
          </p>
          <Link to="/vitra-tv" className="btn btn-dark mt-8 self-start"><MonitorPlay className="h-5 w-5" aria-hidden="true" /> Découvrir Vitra TV</Link>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- 8. Votre avis (après réouverture) ---------- */
function AvisAppel() {
  return (
    <section aria-labelledby="titre-avis" className="relative overflow-hidden bg-jaune py-20 sm:py-24">
      <Shape forme="cercle" couleur="creme" className="anim-tourne pointer-events-none absolute -right-24 -top-24 h-80 w-80 opacity-70" />
      <div className="wrap relative grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="eyebrow">07 · Votre expérience nous intéresse</p>
          <h2 id="titre-avis" className="titre-l mt-6">Votre visite, votre avis.</h2>
        </div>
        <div className="flex flex-col justify-end lg:col-span-5">
          <p className="lead">Vous avez découvert le Musée Vitra depuis sa réouverture ? Partagez vos premières impressions pour nous aider à améliorer votre expérience.</p>
          <Link to="/avis" className="btn btn-dark mt-8 self-start">Donner mon avis <ArrowRight className="h-5 w-5" aria-hidden="true" /></Link>
        </div>
      </div>
    </section>
  )
}

export default function Accueil() {
  usePageTitle(null)
  const { apres } = usePhase()
  return (
    <>
      <Hero />
      <Reouverture />
      <TroisPiliers />
      <ProchainsRendezVous />
      <Nocturnes />
      <Infos />
      <VitraTvApercu />
      {apres && <AvisAppel />}
    </>
  )
}
