import { Link } from 'react-router-dom'
import { Mail, TramFront, Bike, Users, Accessibility, Armchair, Ticket } from 'lucide-react'
import usePageTitle from '../components/usePageTitle'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { usePhase } from '../context/Phase'
import {
  musee, reouverture, horaires, tarifs, tarifsNote, billetComprend, atelier, nocturnes,
  rendezVousCulturels, convivialite, capacite, transports, renovation, reservationAvertissement,
} from '../data/musee'

const sommaire = [
  ['horaires', 'Horaires'], ['tarifs', 'Tarifs'], ['reservations', 'Réservations'],
  ['acces', 'Accès'], ['accessibilite', 'Accessibilité'], ['contact', 'Contact'],
]

function Bloc({ id, num, titre, children, className = '' }) {
  return (
    <section id={id} tabIndex={-1} aria-labelledby={`t-${id}`} className={`grid gap-8 border-t-2 border-anthracite py-14 outline-none lg:grid-cols-12 ${className}`}>
      <Reveal className="lg:col-span-4">
        <p className="font-display text-sm font-bold tabular-nums">{num}</p>
        <h2 id={`t-${id}`} className="titre-m mt-3">{titre}</h2>
      </Reveal>
      <Reveal className="min-w-0 lg:col-span-8" delay={80}>{children}</Reveal>
    </section>
  )
}

const besoinReservation = [
  { quoi: 'Visite des collections et de l’exposition temporaire', rep: 'Non', detail: `Dans la limite de la capacité du musée (${capacite.total} personnes simultanément).` },
  { quoi: 'Visites flash (14 h et 16 h)', rep: 'Non', detail: 'Dans la limite des places disponibles.' },
  { quoi: 'Atelier du samedi (14 h 30)', rep: 'Oui', detail: `Réservation obligatoire, ${atelier.capacite} places, confirmée par le musée.` },
  { quoi: 'Rendez-vous culturels des nocturnes', rep: 'Oui', detail: `Réservation gratuite obligatoire pour tous, y compris les moins de 18 ans. ${rendezVousCulturels.capacite} places.` },
  { quoi: 'Nocturne (sans rendez-vous)', rep: 'Non', detail: 'Avec le billet du jour ou un billet au tarif habituel.' },
  { quoi: 'Espace de convivialité', rep: 'Non', detail: 'Accès sans billet.' },
]

export default function Infos() {
  usePageTitle('Informations pratiques')
  const { avant } = usePhase()
  return (
    <>
      <PageHero
        rubrique="Informations pratiques"
        titre="Préparer sa visite."
        intro="Horaires, tarifs, réservations, accès et accessibilité : tout ce qu’il faut savoir avant de venir au Musée Vitra."
        couleur="creme"
        forme="cercle"
      >
        {avant && (
          <p className="inline-flex flex-wrap items-baseline gap-x-3 bg-anthracite px-4 py-3 text-creme">
            <span className="eyebrow text-jaune">Réouverture</span>
            <span className="font-display text-xl font-bold">{reouverture.libelle}</span>
          </p>
        )}
      </PageHero>

      <nav aria-label="Sur cette page" className="sticky top-[var(--header-h)] z-30 border-y border-anthracite bg-creme">
        <ul className="wrap flex gap-6 overflow-x-auto py-3 text-sm font-semibold [scrollbar-width:none]">
          {sommaire.map(([id, l]) => <li key={id} className="shrink-0"><Link to={{ hash: id }} className="underline-offset-4 hover:underline">{l}</Link></li>)}
        </ul>
      </nav>

      <div className="wrap pb-20 pt-6">
        <Bloc id="horaires" num="01" titre="Horaires">
          <dl className="grid gap-px bg-anthracite sm:grid-cols-2">
            <div className="bg-jaune p-6 sm:col-span-2">
              <dt className="eyebrow">{horaires.jours}</dt>
              <dd className="mt-2 font-display text-5xl font-extrabold tracking-titre sm:text-6xl">{horaires.heures}</dd>
            </div>
            <div className="bg-creme p-6"><dt className="text-sm">Dernière entrée</dt><dd className="font-display text-3xl font-bold">{horaires.derniereEntree}</dd></div>
            <div className="bg-creme p-6"><dt className="text-sm">Lundi</dt><dd className="font-display text-3xl font-bold">Fermé</dd></div>
            <div className="on-dark bg-nuit p-6 text-creme sm:col-span-2">
              <dt className="text-sm">Nocturnes · {nocturnes.quand.toLowerCase()}</dt>
              <dd className="font-display text-3xl font-bold">{nocturnes.heures}</dd>
            </div>
          </dl>
          <p className="mt-4 text-[15px]">Réouverture le <strong>{reouverture.libelle}</strong>.</p>
        </Bloc>

        <Bloc id="tarifs" num="02" titre="Tarifs">
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">Tarifs d’entrée du Musée Vitra</caption>
            <thead><tr className="border-b-2 border-anthracite"><th scope="col" className="py-2 text-sm font-semibold">Public</th><th scope="col" className="py-2 text-right text-sm font-semibold">Tarif</th></tr></thead>
            <tbody>
              {tarifs.map((t) => (
                <tr key={t.public} className="border-b border-anthracite">
                  <th scope="row" className="py-4 text-lg font-medium">{t.public}</th>
                  <td className="py-4 text-right font-display text-3xl font-bold tabular-nums">{t.prix}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-4 text-[15px]">{tarifsNote}</p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="bg-gris p-6">
              <h3 className="flex items-center gap-2 font-display text-xl font-bold"><Ticket className="h-5 w-5" aria-hidden="true" /> Le billet comprend</h3>
              <ul className="mt-4 space-y-2 text-[15px]">
                {billetComprend.map((b) => <li key={b} className="flex gap-3"><span className="mt-2 h-2 w-2 shrink-0 bg-anthracite" aria-hidden="true" />{b}</li>)}
              </ul>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-rouge pl-4">
                <h3 className="font-display text-xl font-bold">Atelier du samedi : 5 €</h3>
                <p className="mt-1 text-[15px]">{atelier.tarifNote}</p>
              </div>
              <div className="border-l-4 border-nuit pl-4">
                <h3 className="font-display text-xl font-bold">Nocturnes : sans supplément</h3>
                <p className="mt-1 text-[15px]">{nocturnes.billet} {nocturnes.soireeSeule}</p>
              </div>
              <div className="border-l-4 border-jaune pl-4">
                <h3 className="font-display text-xl font-bold">En famille</h3>
                <p className="mt-1 text-[15px]">L’entrée est gratuite pour les moins de 18 ans. Pour les rendez-vous du soir, chaque participant doit réserver, y compris les moins de 18 ans.</p>
              </div>
            </div>
          </div>
        </Bloc>

        <Bloc id="reservations" num="03" titre="Réservations">
          <p className="lead">Il n’y a pas de billetterie en ligne. La visite libre ne nécessite pas de réservation ; l’atelier du samedi et les rendez-vous culturels se réservent auprès du musée.</p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[34rem] border-collapse text-left">
              <caption className="sr-only">Faut-il réserver ?</caption>
              <thead><tr className="border-b-2 border-anthracite"><th scope="col" className="py-2 pr-4 text-sm font-semibold">Activité</th><th scope="col" className="py-2 pr-4 text-sm font-semibold">Réserver ?</th><th scope="col" className="py-2 text-sm font-semibold">Précisions</th></tr></thead>
              <tbody>
                {besoinReservation.map((r) => (
                  <tr key={r.quoi} className="border-b border-anthracite align-top">
                    <th scope="row" className="py-3 pr-4 font-semibold">{r.quoi}</th>
                    <td className="py-3 pr-4"><span className={`inline-block min-w-[3rem] px-2 py-1 text-center text-sm font-bold ${r.rep === 'Oui' ? 'bg-anthracite text-creme' : 'bg-gris'}`}>{r.rep}</span></td>
                    <td className="py-3 text-[15px]">{r.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mt-12 font-display text-2xl font-bold">Comment réserver</h3>
          <ol className="mt-4 grid gap-px bg-anthracite md:grid-cols-3">
            {[
              ['Écrire au musée', <>Par courriel à <a className="lien" href={`mailto:${musee.contact.reservations}`}>{musee.contact.reservations}</a>, ou depuis les boutons « Contacter le musée pour réserver » de l’agenda.</>],
              ['Préciser sa demande', 'Le nom de l’activité, la date souhaitée et le nombre de places.'],
              ['Attendre la confirmation', reservationAvertissement],
            ].map(([t, x], i) => (
              <li key={t} className="bg-creme p-5">
                <span className="font-display text-4xl font-extrabold">{i + 1}</span>
                <h4 className="mt-3 font-display text-lg font-bold">{t}</h4>
                <p className="mt-1 text-[15px]">{x}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-[15px]">{rendezVousCulturels.remplacement}</p>
          <Link to="/agenda" className="btn btn-dark mt-6">Voir l’agenda et réserver</Link>
        </Bloc>

        <Bloc id="acces" num="04" titre="Accès">
          <address className="not-italic">
            <span className="block font-display text-4xl font-extrabold leading-tight tracking-titre sm:text-5xl">{musee.adresse.rue}</span>
            <span className="block font-display text-2xl font-bold">{musee.adresse.ville}</span>
          </address>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="flex items-center gap-2 font-display text-xl font-bold"><TramFront className="h-5 w-5" aria-hidden="true" /> Tram {transports.tram.ligne}</h3>
              <p className="mt-2">Arrêt <strong>{transports.tram.arret}</strong>, à {transports.tram.distance}.</p>
              <table className="mt-4 w-full border-collapse text-left text-[15px]">
                <caption className="sr-only">Fréquence du tram T2</caption>
                <tbody>
                  {transports.frequences.map((f) => (
                    <tr key={f.quand} className="border-b border-anthracite"><th scope="row" className="py-2 pr-4 font-semibold">{f.quand}</th><td className="py-2">{f.freq}</td></tr>
                  ))}
                  <tr className="border-b border-anthracite"><th scope="row" className="py-2 pr-4 font-semibold">Le vendredi</th><td className="py-2">service jusqu’à 23 h, pratique après les nocturnes</td></tr>
                </tbody>
              </table>
            </div>
            <div>
              <h3 className="flex items-center gap-2 font-display text-xl font-bold"><Bike className="h-5 w-5" aria-hidden="true" /> À vélo</h3>
              <p className="mt-2">{transports.velo}.</p>
              <h3 className="mt-8 flex items-center gap-2 font-display text-xl font-bold"><Users className="h-5 w-5" aria-hidden="true" /> Affluence</h3>
              <p className="mt-2">{capacite.total} {capacite.note}</p>
            </div>
          </div>
        </Bloc>

        <Bloc id="accessibilite" num="05" titre="Accessibilité et confort">
          <ul className="grid gap-6 md:grid-cols-2">
            <li className="flex gap-4">
              <Accessibility className="h-7 w-7 shrink-0" aria-hidden="true" />
              <p>La rénovation de {renovation.annee} a amélioré certains aménagements d’accessibilité et harmonisé la signalétique.</p>
            </li>
            <li className="flex gap-4">
              <Armchair className="h-7 w-7 shrink-0" aria-hidden="true" />
              <p>Des assises ont été ajoutées et le confort des espaces amélioré. L’espace de convivialité ({convivialite.capacite} places) est accessible sans billet.</p>
            </li>
          </ul>
          <p className="mt-8 bg-gris p-5 text-[15px]">
            Pour préparer votre venue selon vos besoins, contactez le musée à <a className="lien" href={`mailto:${musee.contact.reservations}`}>{musee.contact.reservations}</a>.
          </p>
        </Bloc>

        <Bloc id="contact" num="06" titre="Contact">
          <div className="grid gap-px bg-anthracite sm:grid-cols-2">
            <div className="bg-creme p-6">
              <h3 className="eyebrow">Réservations et informations</h3>
              <a href={`mailto:${musee.contact.reservations}`} className="mt-3 flex items-center gap-2 break-all font-display text-2xl font-bold hover:underline"><Mail className="h-5 w-5 shrink-0" aria-hidden="true" />{musee.contact.reservations}</a>
            </div>
            <div className="bg-creme p-6">
              <h3 className="eyebrow">Presse</h3>
              <a href={`mailto:${musee.contact.presse}`} className="mt-3 flex items-center gap-2 break-all font-display text-2xl font-bold hover:underline"><Mail className="h-5 w-5 shrink-0" aria-hidden="true" />{musee.contact.presse}</a>
            </div>
          </div>
          <p className="mt-4 text-sm">Adresses fictives, dans le cadre du scénario pédagogique.</p>
        </Bloc>
      </div>
    </>
  )
}
