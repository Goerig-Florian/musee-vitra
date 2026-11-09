import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Play, Clock3, Info, Video } from 'lucide-react'
import usePageTitle from '../components/usePageTitle'
import Photo from '../components/Photo'
import Shape from '../components/Shape'
import Reveal from '../components/Reveal'
import EventCard from '../components/EventCard'
import RdvConditions from '../components/RdvConditions'
import VideoPlayer from '../components/VideoPlayer'
import { vitraTvUne, rubriques, objectifsTv } from '../data/vitratv'
import { rendezVous, typesDe } from '../data/programme'
import { jourNum, moisCourt, dateLongue } from '../lib/dates'

const vignettes = {
  nuit: { fond: 'bg-[#2a3854]', forme: 'demi', c: 'jaune' },
  rouge: { fond: 'bg-rouge', forme: 'carre', c: 'creme' },
  jaune: { fond: 'bg-jaune', forme: 'cercle', c: 'nuit' },
}
const placements = ['-bottom-1/4 -right-[8%] w-3/5', '-left-[10%] -top-1/3 w-1/2', 'bottom-[-30%] left-1/4 w-1/2']

function StatutAVenir({ className = '' }) {
  return (
    <span className={`inline-flex items-center gap-1.5 bg-creme px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-anthracite ${className}`}>
      <Clock3 className="h-3.5 w-3.5" aria-hidden="true" /> Vidéo à venir
    </span>
  )
}

function CarteVideo({ v, rubrique, i, onPlay }) {
  const s = vignettes[rubrique.couleur]
  const dispo = Boolean(v.src)
  const vignette = (
    <div className={`relative aspect-video overflow-hidden ${s.fond}`}>
      {v.image
        ? <Photo slot={v.image} ratio="aspect-video" className="transition-transform duration-700 group-hover:scale-105" />
        : <Shape forme={s.forme} couleur={s.c} className={`absolute ${placements[i % placements.length]} transition-transform duration-700 group-hover:scale-105`} />}
      <span className="absolute left-3 top-3">{dispo
        ? <span className="inline-flex items-center gap-1.5 bg-jaune px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-anthracite"><Play className="h-3.5 w-3.5" aria-hidden="true" /> Lire</span>
        : <StatutAVenir />}
      </span>
    </div>
  )
  return (
    <li className="group">
      {dispo ? (
        <button type="button" onClick={() => onPlay(v)} className="block w-full text-left">
          {vignette}
          <span className="mt-3 block font-display text-xl font-bold leading-tight">{v.titre}</span>
          <span className="sr-only"> — lire la vidéo</span>
        </button>
      ) : (
        <article aria-label={`${v.titre} — vidéo à venir`}>
          {vignette}
          <h4 className="mt-3 font-display text-xl font-bold leading-tight text-creme/90">{v.titre}</h4>
        </article>
      )}
      <p className="mt-1 text-sm text-creme/80">{rubrique.titre}</p>
    </li>
  )
}

export default function VitraTV() {
  usePageTitle('Vitra TV')
  const [filtre, setFiltre] = useState('toutes')
  const [lecture, setLecture] = useState(null)
  const visibles = filtre === 'toutes' ? rubriques : rubriques.filter((r) => r.id === filtre)
  const captations = rendezVous.filter((r) => typesDe(r).some((t) => t === 'concert' || t === 'performance'))

  return (
    <div className="on-dark bg-nuit text-creme">
      {/* Statut du projet */}
      <div className="bg-jaune text-anthracite">
        <p className="wrap flex items-start gap-2 py-3 text-sm font-medium sm:items-center">
          <Info className="mt-0.5 h-4 w-4 shrink-0 sm:mt-0" aria-hidden="true" />
          <span><strong>Vitra TV est en préparation.</strong> Ce projet est proposé à la municipalité de Valmont-sur-Rive ; aucune vidéo n’est encore publiée.</span>
        </p>
      </div>

      {/* Hero vidéo */}
      <section aria-labelledby="titre-page" className="relative overflow-hidden">
        <div className="wrap grid gap-10 pb-16 pt-12 sm:pt-16 lg:grid-cols-12">
          <div className="flex flex-col lg:col-span-4">
            <p className="eyebrow text-jaune">Le musée en images.</p>
            <h1 id="titre-page" className="titre-xl mt-4">Vitra<br />TV<span className="text-jaune" aria-hidden="true">.</span></h1>
            <p className="lead mt-8 max-w-md">Découvrez les coulisses du musée, les rencontres autour du design et les temps forts de sa programmation.</p>
            <nav aria-label="Rubriques de la page" className="mt-auto pt-10">
              <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
                {[['replays', 'Replays'], ['concerts', 'Concerts'], ['agenda-tv', 'Agenda'], ['projet', 'Le projet']].map(([id, l]) => (
                  <li key={id}><Link to={{ hash: id }} className="underline decoration-jaune decoration-2 underline-offset-4 hover:text-jaune">{l}</Link></li>
                ))}
              </ul>
            </nav>
          </div>

          <article className="lg:col-span-8" aria-labelledby="une-titre">
            <div className="relative">
              {vitraTvUne.src ? (
                <button type="button" onClick={() => setLecture(vitraTvUne)} className="group relative block w-full">
                  <Photo slot={vitraTvUne.imageSlot} ratio="aspect-video" sombre />
                  <span className="absolute inset-0 m-auto flex h-20 w-20 items-center justify-center bg-jaune text-anthracite transition-transform group-hover:scale-110">
                    <Play className="h-8 w-8" aria-hidden="true" /><span className="sr-only">Lire la vidéo : {vitraTvUne.titre}</span>
                  </span>
                </button>
              ) : (
                <>
                  <Photo slot={vitraTvUne.imageSlot} ratio="aspect-video" sombre />
                  <StatutAVenir className="absolute right-4 top-4" />
                </>
              )}
            </div>
            <div className="mt-5 grid gap-4 border-t border-creme pt-4 sm:grid-cols-5">
              <p className="eyebrow text-jaune sm:col-span-1">À la une</p>
              <div className="sm:col-span-4">
                <h2 id="une-titre" className="font-display text-3xl font-extrabold leading-tight tracking-titre sm:text-4xl">
                  {vitraTvUne.titre} — <span className="text-jaune">{vitraTvUne.sousTitre}</span>
                </h2>
                <p className="mt-3 max-w-2xl">{vitraTvUne.description}</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Replays */}
      <section id="replays" tabIndex={-1} aria-labelledby="t-replays" className="border-t border-creme/30 py-16 outline-none sm:py-24">
        <div className="wrap">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow text-jaune">Catalogue</p>
              <h2 id="t-replays" className="titre-l mt-4">Replays et formats.</h2>
            </div>
            <div role="group" aria-label="Filtrer par rubrique" className="flex flex-wrap gap-2">
              {[['toutes', 'Toutes'], ...rubriques.map((r) => [r.id, r.titre])].map(([id, l]) => (
                <button key={id} type="button" aria-pressed={filtre === id} onClick={() => setFiltre(id)}
                  className={`min-h-[44px] border-2 border-creme px-3 text-sm font-semibold transition-colors ${filtre === id ? 'bg-creme text-nuit' : 'hover:bg-creme/10'}`}>{l}</button>
              ))}
            </div>
          </div>

          <div className="mt-12 space-y-16">
            {visibles.map((r) => (
              <Reveal as="section" key={r.id} aria-labelledby={`rub-${r.id}`} className="grid gap-8 border-t-2 border-creme pt-5 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <p className="font-display text-sm font-bold tabular-nums">{String(rubriques.indexOf(r) + 1).padStart(2, '0')}</p>
                  <h3 id={`rub-${r.id}`} className="mt-2 font-display text-3xl font-bold leading-tight">{r.titre}</h3>
                  <p className="mt-3 max-w-sm text-creme/90">{r.description}</p>
                </div>
                <ul className="grid gap-8 sm:grid-cols-2 lg:col-span-8">
                  {r.videos.map((v, i) => <CarteVideo key={v.id} v={v} rubrique={r} i={i + rubriques.indexOf(r)} onPlay={setLecture} />)}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Concerts */}
      <section id="concerts" tabIndex={-1} aria-labelledby="t-concerts" className="bg-creme py-16 text-anthracite outline-none sm:py-24">
        <div className="wrap grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">Concerts & performances</p>
            <h2 id="t-concerts" className="titre-l mt-4">Sur scène, puis à l’écran.</h2>
            <p className="lead mt-6">Les concerts et performances des nocturnes pourraient être filmés et diffusés, avec l’accord des artistes et les autorisations nécessaires.</p>
            <p className="mt-6 flex gap-2 border-l-4 border-rouge pl-4 text-[15px] font-semibold">Ces rendez-vous n’ont pas encore eu lieu : aucune captation n’est disponible.</p>
          </div>
          <ol className="lg:col-span-6 lg:col-start-7">
            {captations.map((r) => (
              <li key={r.id} className="grid grid-cols-[5.5rem_1fr] gap-4 border-t-2 border-anthracite py-5 last:border-b-2">
                <p className="font-display leading-none">
                  <span className="sr-only">{dateLongue(r.date)}</span>
                  <span className="block text-5xl font-extrabold tracking-titre" aria-hidden="true">{jourNum(r.date)}</span>
                  <span className="text-sm font-bold uppercase tracking-[0.1em]" aria-hidden="true">{moisCourt(r.date)}</span>
                </p>
                <div>
                  <h3 className="font-display text-2xl font-bold">{r.titre}</h3>
                  <p className="mt-1 text-[15px]">{r.moments.map((m) => `${m.heure} · ${m.label}`).join(' — ')}</p>
                  <p className="mt-3 inline-flex items-center gap-2 bg-gris px-2 py-1 text-xs font-bold uppercase tracking-[0.1em]">
                    <Video className="h-3.5 w-3.5" aria-hidden="true" /> Captation envisagée, sous réserve d’autorisation
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Agenda */}
      <section id="agenda-tv" tabIndex={-1} aria-labelledby="t-agenda-tv" className="py-16 outline-none sm:py-24">
        <div className="wrap">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow text-jaune">Agenda</p>
              <h2 id="t-agenda-tv" className="titre-l mt-4">À vivre en vrai d’abord.</h2>
            </div>
            <Link to="/agenda" className="btn btn-outline-creme self-start">Tout l’agenda <ArrowRight className="h-5 w-5" aria-hidden="true" /></Link>
          </div>
          <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 xl:grid-cols-4">
            {rendezVous.map((r) => <EventCard key={r.id} rdv={r} sombre />)}
          </div>
          <RdvConditions sombre />
        </div>
      </section>

      {/* Le projet */}
      <section id="projet" tabIndex={-1} aria-labelledby="t-projet" className="relative overflow-hidden border-t border-creme/30 py-16 outline-none sm:py-24">
        <Shape forme="cercle" couleur="jaune" className="anim-tourne pointer-events-none absolute -right-24 bottom-[-6rem] h-72 w-72 opacity-90" />
        <div className="wrap relative">
          <p className="eyebrow text-jaune">Le projet</p>
          <h2 id="t-projet" className="titre-l mt-4 max-w-4xl">Une WebTV pour faire vivre le musée dans la durée.</h2>
          <p className="lead mt-6 max-w-2xl">Proposée à la municipalité, Vitra TV accompagnerait d’abord la réouverture, puis valoriserait les activités culturelles du musée au fil de la saison.</p>
          <ol className="mt-12 grid gap-px bg-creme/30 sm:grid-cols-2 lg:grid-cols-4">
            {objectifsTv.map((o, i) => (
              <li key={o.titre} className="bg-nuit p-6">
                <span className="font-display text-5xl font-extrabold text-jaune">{i + 1}</span>
                <h3 className="mt-4 font-display text-xl font-bold">{o.titre}</h3>
                <p className="mt-2 text-[15px] text-creme/90">{o.texte}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <VideoPlayer video={lecture} onClose={() => setLecture(null)} />
    </div>
  )
}
