import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import usePageTitle from '../components/usePageTitle'
import PageHero from '../components/PageHero'
import Photo from '../components/Photo'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import Shape from '../components/Shape'
import EventCard from '../components/EventCard'
import RdvConditions from '../components/RdvConditions'
import ReservationRequest from '../components/ReservationRequest'
import { rendezVous, typesRendezVous, typesDe } from '../data/programme'
import { atelier, nocturnes, rendezVousCulturels, convivialite, visitesFlash } from '../data/musee'
import { prochainsSamedis } from '../lib/dates'

const sommaire = [
  { id: 'rendez-vous', label: 'Rendez-vous' },
  { id: 'semaine', label: 'La semaine au musée' },
  { id: 'atelier', label: 'Atelier du samedi' },
  { id: 'nocturnes', label: 'Nocturnes' },
  { id: 'convivialite', label: 'Espace de convivialité' },
]

/* Semaine type construite uniquement à partir des données officielles */
const semaine = [
  { jour: 'Lundi', ferme: true },
  { jour: 'Mardi', items: [['flash', 'Visites flash · 14 h & 16 h']] },
  { jour: 'Mercredi', items: [['flash', 'Visites flash · 14 h & 16 h']] },
  { jour: 'Jeudi', items: [['flash', 'Visites flash · 14 h & 16 h']] },
  { jour: 'Vendredi', items: [['flash', 'Visites flash · 14 h & 16 h'], ['nocturne', 'Nocturne · 18 h – 22 h', '1er et 3e du mois']] },
  { jour: 'Samedi', items: [['flash', 'Visites flash · 14 h & 16 h'], ['atelier', 'Atelier · 14 h 30', 'sur réservation']] },
  { jour: 'Dimanche', items: [['flash', 'Visites flash · 14 h & 16 h']] },
]
const pastille = {
  flash: 'bg-jaune text-anthracite',
  atelier: 'border-l-4 border-rouge bg-creme text-anthracite', // petit texte : pas de blanc sur rouge (AA)
  nocturne: 'bg-nuit text-creme',
}

function RendezVous() {
  const [filtre, setFiltre] = useState('tous')
  const liste = useMemo(() => (filtre === 'tous' ? rendezVous : rendezVous.filter((r) => typesDe(r).includes(filtre))), [filtre])
  const options = [['tous', 'Tous'], ...Object.entries(typesRendezVous).map(([k, v]) => [k, v.pluriel])]
  return (
    <section id="rendez-vous" tabIndex={-1} aria-labelledby="t-rdv" className="wrap py-20 outline-none sm:py-28">
      <Reveal><SectionTitle num="01" rubrique="Programme des nocturnes" titre="Les prochains rendez-vous." id="t-rdv">
        {rendezVousCulturels.formats}, le vendredi soir pendant les nocturnes.
      </SectionTitle></Reveal>

      <div className="mt-10 flex flex-wrap items-center gap-2" role="group" aria-label="Filtrer par type de rendez-vous">
        {options.map(([k, label]) => (
          <button
            key={k} type="button" aria-pressed={filtre === k} onClick={() => setFiltre(k)}
            className={`min-h-[44px] border-2 border-anthracite px-4 text-sm font-semibold transition-colors ${filtre === k ? 'bg-anthracite text-creme' : 'hover:bg-jaune'}`}
          >{label}</button>
        ))}
        <p className="ml-auto text-sm" aria-live="polite">{liste.length} rendez-vous affiché{liste.length > 1 ? 's' : ''}</p>
      </div>

      <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 xl:grid-cols-4">
        {liste.map((r) => <EventCard key={r.id} rdv={r} />)}
      </div>

      <RdvConditions>
        <p className="mt-3 text-sm">Les noms des intervenants et des artistes n’ont pas encore été communiqués.</p>
      </RdvConditions>
    </section>
  )
}

function Semaine() {
  return (
    <section id="semaine" tabIndex={-1} aria-labelledby="t-semaine" className="border-t border-anthracite bg-gris py-20 outline-none sm:py-28">
      <div className="wrap">
        <Reveal><SectionTitle num="02" rubrique="Rendez-vous réguliers" titre="La semaine au musée." id="t-semaine">
          Musée ouvert du mardi au dimanche, de 10 h à 18 h. Les visites flash ont lieu chaque jour d’ouverture.
        </SectionTitle></Reveal>
        <Reveal as="ol" className="mt-12 grid border-l border-t border-anthracite sm:grid-cols-2 lg:grid-cols-7" delay={100}>
          {semaine.map((j) => (
            <li key={j.jour} className={`min-h-[9rem] border-b border-r border-anthracite p-4 ${j.ferme ? 'bg-creme/50' : 'bg-creme'}`}>
              <p className="font-display text-xl font-bold">{j.jour}</p>
              {j.ferme ? <p className="mt-3 text-sm font-semibold">Fermé</p> : (
                <ul className="mt-3 space-y-2">
                  {j.items.map(([t, label, note]) => (
                    <li key={t} className={`px-2 py-1.5 text-[13px] font-semibold leading-snug ${pastille[t]}`}>
                      {label}{note && <span className="block font-normal">{note}</span>}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </Reveal>
        <p className="mt-6 max-w-3xl text-[15px]">
          <strong>Visites flash :</strong> {visitesFlash.description} {visitesFlash.reservation}.
        </p>
      </div>
    </section>
  )
}

function Atelier() {
  const dates = useMemo(() => prochainsSamedis(8), [])
  return (
    <section id="atelier" tabIndex={-1} aria-labelledby="t-atelier" className="relative overflow-hidden bg-rouge py-20 outline-none sm:py-28">
      <div className="wrap relative grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p><span className="eyebrow bg-creme px-2 py-1 text-anthracite">03 · Participer</span></p>
          <h2 id="t-atelier" className="titre-l mt-6 text-white">L’atelier du samedi.</h2>
          <p className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">Le design s’expérimente.</p>
          <div className="mt-8 bg-creme p-6 text-anthracite">
            <p className="lead">Un atelier de pratique pour débutants : observer, expérimenter et découvrir le design en le faisant.</p>
            <dl className="mt-6 grid gap-3 border-t border-anthracite pt-4 sm:grid-cols-2">
              <div><dt className="text-sm">Quand</dt><dd className="font-display text-xl font-bold">{atelier.quand} à {atelier.heure}</dd></div>
              <div><dt className="text-sm">Tarif</dt><dd className="font-display text-xl font-bold">{atelier.tarif}</dd></div>
              <div><dt className="text-sm">Capacité</dt><dd className="font-display text-xl font-bold">{atelier.capacite} personnes</dd></div>
              <div><dt className="text-sm">Matériel</dt><dd className="font-display text-xl font-bold">Fourni</dd></div>
            </dl>
            <p className="mt-6 border-l-4 border-rouge pl-4 font-semibold">{atelier.tarifNote}</p>
            <ul className="mt-4 space-y-1 text-[15px]">
              <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />{atelier.reservation}.</li>
              <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />{atelier.collections}.</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-6 lg:col-span-5 lg:col-start-8">
          <Photo slot="experience-participer" ratio="aspect-[4/3]" />
          <ReservationRequest activite="Atelier du samedi (14 h 30)" dates={dates} max={atelier.capacite} />
        </div>
      </div>
    </section>
  )
}

function Nocturnes() {
  return (
    <section id="nocturnes" tabIndex={-1} aria-labelledby="t-noc" className="on-dark relative overflow-hidden bg-nuit py-20 text-creme outline-none sm:py-28">
      <Shape forme="demi" couleur="jaune" className="anim-flotte pointer-events-none absolute -bottom-6 right-0 h-64 w-64 sm:h-96 sm:w-96" />
      <div className="wrap relative">
        <Reveal><SectionTitle num="04" rubrique="Se retrouver · Nocturnes" titre="Le design se vit aussi le soir." id="t-noc" clair>
          Les premier et troisième vendredis du mois, le Musée Vitra vous accueille de 18 h à 22 h. Rencontres, petits concerts et performances viennent prolonger la découverte des collections.
        </SectionTitle></Reveal>
        <div className="mt-14 grid gap-px bg-creme/30 md:grid-cols-3">
          {[
            ['Vous avez un billet du jour', `${nocturnes.billet} Vous restez pour la soirée sans rien payer de plus.`],
            ['Vous venez pour la soirée', nocturnes.soireeSeule],
            ['Pour les rendez-vous', `${rendezVousCulturels.billet}, avec réservation gratuite obligatoire. ${rendezVousCulturels.remplacement}`],
          ].map(([t, x]) => (
            <div key={t} className="bg-nuit p-6 md:pr-10">
              <h3 className="font-display text-2xl font-bold text-jaune">{t}</h3>
              <p className="mt-3 leading-relaxed">{x}</p>
            </div>
          ))}
        </div>
        <ul className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4" aria-label="Le site à la nuit tombée">
          {['site-tour', 'site-dome-nuit', 'site-musee-nuit', 'site-vitrahaus-nuit'].map((slot) => (
            <li key={slot}><Photo slot={slot} ratio="aspect-[4/3]" sombre /></li>
          ))}
        </ul>
        <p className="mt-8 font-display text-2xl font-bold">{nocturnes.supplement}</p>
        <Link to={{ hash: 'rendez-vous' }} className="btn btn-jaune mt-8">Voir les rendez-vous <ArrowRight className="h-5 w-5" aria-hidden="true" /></Link>
      </div>
    </section>
  )
}

function Convivialite() {
  return (
    <section id="convivialite" tabIndex={-1} aria-labelledby="t-conv" className="wrap py-20 outline-none sm:py-28">
      <div className="grid gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow">05 · Se retrouver</p>
          <h2 id="t-conv" className="titre-l mt-6">L’espace de convivialité.</h2>
          <p className="lead mt-6">Un lieu pour faire une pause, avant ou après la visite, ou simplement se retrouver.</p>
          <Photo slot="convivialite" ratio="aspect-[4/3]" className="mt-8" />
        </Reveal>
        <Reveal className="lg:col-span-6 lg:col-start-7" delay={100}>
          <dl className="border-t-2 border-anthracite">
            {[
              ['Accès', `${convivialite.acces}`],
              ['Consommation', `${convivialite.consommation}. ${convivialite.offre}.`],
              ['Horaires', convivialite.horaires],
              ['Places', `${convivialite.capacite} places`],
            ].map(([t, d]) => (
              <div key={t} className="grid gap-1 border-b border-anthracite py-4 sm:grid-cols-3">
                <dt className="font-semibold">{t}</dt><dd className="sm:col-span-2">{d}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}

export default function Agenda() {
  usePageTitle('Activités et agenda')
  return (
    <>
      <PageHero
        rubrique="Activités & agenda"
        titre="Participer, se retrouver."
        intro="Ateliers pour débutants, visites flash, nocturnes et rendez-vous culturels : toute la programmation du musée et la façon d’y participer."
        couleur="rouge"
        forme="carre"
      />
      <nav aria-label="Sur cette page" className="sticky top-[var(--header-h)] z-30 border-b border-anthracite bg-creme">
        <ul className="wrap flex gap-6 overflow-x-auto py-3 text-sm font-semibold [scrollbar-width:none]">
          {sommaire.map((s) => <li key={s.id} className="shrink-0"><Link to={{ hash: s.id }} className="underline-offset-4 hover:underline">{s.label}</Link></li>)}
        </ul>
      </nav>
      <RendezVous />
      <Semaine />
      <Atelier />
      <Nocturnes />
      <Convivialite />
    </>
  )
}
