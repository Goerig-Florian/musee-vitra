import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Trash2, RotateCcw } from 'lucide-react'
import usePageTitle from '../components/usePageTitle'
import PageHero from '../components/PageHero'
import Rating from '../components/Rating'
import Choice from '../components/Choice'
import { usePhase } from '../context/Phase'
import { questionnaire, reouverture } from '../data/musee'

const CLE = 'vitra-avis-demo'
const MOTIFS = ['Découvrir les collections', 'Participer à un atelier', 'Assister à une nocturne', 'Profiter de l’espace de convivialité', 'Autre']
const VIDE = { visite: '', motif: '', accueil: 0, orientation: 0, confort: 0, clarte: '', retour: '', ameliorer: '' }

const QUESTIONS = {
  motif: 'Quel était le principal motif de votre visite ?',
  accueil: 'Comment évaluez-vous la qualité de l’accueil ?',
  orientation: 'Les informations et la signalétique vous ont-elles permis de vous orienter facilement ?',
  confort: 'Comment évaluez-vous le confort des espaces ?',
  clarte: 'Les informations sur les tarifs, les horaires et les réservations étaient-elles suffisamment claires ?',
  retour: 'Envisagez-vous de revenir au musée ?',
}

function lireStock() { try { return JSON.parse(localStorage.getItem(CLE)) || [] } catch { return [] } }

function NoteProto() {
  return (
    <aside aria-label="Confidentialité" className="flex gap-4 border-2 border-anthracite bg-creme p-5">
      <ShieldCheck className="h-7 w-7 shrink-0" aria-hidden="true" />
      <div className="text-[15px] leading-relaxed">
        <p className="font-semibold">Questionnaire anonyme.</p>
        <p className="mt-1">Aucune donnée personnelle n’est demandée. Vos réponses sont conservées sur cet appareil uniquement : elles ne sont pas transmises à la municipalité. Vous pouvez les effacer à tout moment.</p>
      </div>
    </aside>
  )
}

export default function Avis() {
  usePageTitle('Votre avis')
  const { avant } = usePhase()
  const [rep, setRep] = useState(VIDE)
  const [erreurs, setErreurs] = useState({})
  const [envoye, setEnvoye] = useState(false)
  const [stock, setStock] = useState(lireStock)
  const resume = useRef(null)
  const merci = useRef(null)
  const maj = (k) => (v) => { setRep((r) => ({ ...r, [k]: v })); setErreurs((e) => ({ ...e, [k]: undefined })) }

  if (avant) {
    return (
      <>
        <PageHero rubrique="Votre avis" titre="Votre visite, votre avis." couleur="jaune" forme="cercle"
          intro={`Le questionnaire de premières impressions ouvrira avec la réouverture du musée, le ${reouverture.court}, et restera accessible jusqu’au ${questionnaire.fin}.`} />
        <div className="wrap flex flex-wrap gap-3 py-16">
          <Link to="/infos" className="btn btn-dark">Préparer ma visite <ArrowRight className="h-5 w-5" aria-hidden="true" /></Link>
        </div>
      </>
    )
  }

  const valider = (e) => {
    e.preventDefault()
    const err = {}
    if (!rep.visite) err.visite = 'Merci d’indiquer si vous avez visité le musée.'
    if (rep.visite === 'Oui') {
      if (!rep.motif) err.motif = 'Choisissez un motif de visite.'
      ;['accueil', 'orientation', 'confort'].forEach((k) => { if (!rep[k]) err[k] = 'Choisissez une note de 1 à 5.' })
      if (!rep.clarte) err.clarte = 'Choisissez une réponse.'
      if (!rep.retour) err.retour = 'Choisissez une réponse.'
    }
    setErreurs(err)
    if (Object.keys(err).length) { setTimeout(() => resume.current?.focus(), 0); return }
    const entree = { ...rep, date: new Date().toISOString() }
    const nouveau = [...stock, entree]
    try { localStorage.setItem(CLE, JSON.stringify(nouveau)) } catch { /* stockage indisponible */ }
    setStock(nouveau)
    setEnvoye(true)
    setTimeout(() => { merci.current?.focus(); merci.current?.scrollIntoView({ block: 'start' }) }, 0)
  }

  const effacer = () => { try { localStorage.removeItem(CLE) } catch { /* ignoré */ } setStock([]) }
  const recommencer = () => { setRep(VIDE); setErreurs({}); setEnvoye(false) }
  const nbErr = Object.values(erreurs).filter(Boolean).length

  return (
    <>
      <PageHero rubrique="Votre avis · premières impressions" titre="Votre visite, votre avis." couleur="jaune" forme="cercle"
        intro="Vous avez découvert le Musée Vitra depuis sa réouverture ? Partagez vos premières impressions pour nous aider à améliorer votre expérience." >
        <p className="text-[15px] font-medium">Questionnaire ouvert du {questionnaire.debut} au {questionnaire.fin} · 8 questions · environ 2 minutes</p>
      </PageHero>

      <div className="wrap grid gap-12 py-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-[calc(var(--header-h)+2rem)]"><NoteProto /></div>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          {envoye ? (
            <section ref={merci} tabIndex={-1} aria-labelledby="t-merci" className="outline-none">
              <div className="bg-jaune p-6 sm:p-8">
                <h2 id="t-merci" className="titre-m">Merci pour votre participation.</h2>
                <p className="mt-4 text-lg">
                  {rep.visite === 'Oui'
                    ? 'Vos réponses ont été enregistrées sur cet appareil.'
                    : 'Votre réponse a été enregistrée sur cet appareil.'}
                </p>
                <p className="mt-2">Elles ne sont pas transmises à la municipalité.</p>
              </div>
              <h3 className="mt-10 font-display text-2xl font-bold">Récapitulatif</h3>
              <dl className="mt-4 border-t-2 border-anthracite">
                <div className="grid gap-1 border-b border-anthracite py-3 sm:grid-cols-3"><dt className="font-semibold sm:col-span-2">Avez-vous visité le musée depuis sa réouverture ?</dt><dd>{rep.visite}</dd></div>
                {rep.visite === 'Oui' && Object.entries(QUESTIONS).map(([k, q]) => (
                  <div key={k} className="grid gap-1 border-b border-anthracite py-3 sm:grid-cols-3"><dt className="font-semibold sm:col-span-2">{q}</dt><dd>{typeof rep[k] === 'number' ? `${rep[k]} / 5` : rep[k]}</dd></div>
                ))}
                {rep.visite === 'Oui' && rep.ameliorer && <div className="border-b border-anthracite py-3"><dt className="font-semibold">Que pourrions-nous améliorer ?</dt><dd className="mt-1 whitespace-pre-line">{rep.ameliorer}</dd></div>}
              </dl>
              <p className="mt-6 text-sm">Réponses conservées sur cet appareil : <strong>{stock.length}</strong>.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button type="button" onClick={recommencer} className="btn btn-dark"><RotateCcw className="h-5 w-5" aria-hidden="true" /> Nouvelle réponse</button>
                <button type="button" onClick={effacer} className="btn btn-light" disabled={!stock.length}><Trash2 className="h-5 w-5" aria-hidden="true" /> Effacer mes réponses</button>
              </div>
            </section>
          ) : (
            <form onSubmit={valider} noValidate aria-labelledby="t-form" className="space-y-12">
              <h2 id="t-form" className="sr-only">Questionnaire de premières impressions</h2>
              {nbErr > 0 && (
                <div ref={resume} tabIndex={-1} role="alert" className="border-l-4 border-rouge bg-gris p-4 font-semibold outline-none">
                  {nbErr === 1 ? 'Une réponse est manquante.' : `${nbErr} réponses sont manquantes.`} Les questions concernées sont signalées ci-dessous.
                </div>
              )}

              <Choice num="01" name="visite" legend="Avez-vous visité le Musée Vitra depuis sa réouverture ?" options={['Oui', 'Non']} value={rep.visite} onChange={maj('visite')} error={erreurs.visite} />

              {rep.visite === 'Non' && (
                <div className="bg-nuit p-6 text-creme on-dark" aria-live="polite">
                  <p className="font-display text-2xl font-bold">Ce questionnaire concerne les visites effectuées depuis la réouverture.</p>
                  <p className="mt-3">Pas encore venu ? Retrouvez tout ce qu’il faut savoir pour préparer votre visite.</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link to="/infos" className="btn btn-jaune">Informations pratiques <ArrowRight className="h-5 w-5" aria-hidden="true" /></Link>
                    <Link to="/agenda" className="btn btn-outline-creme">Voir l’agenda</Link>
                  </div>
                </div>
              )}

              {rep.visite === 'Oui' && (
                <>
                  <Choice num="02" name="motif" legend={QUESTIONS.motif} options={MOTIFS} value={rep.motif} onChange={maj('motif')} error={erreurs.motif} />
                  <Rating num="03" name="accueil" legend={QUESTIONS.accueil} value={rep.accueil} onChange={maj('accueil')} error={erreurs.accueil} />
                  <Rating num="04" name="orientation" legend={QUESTIONS.orientation} value={rep.orientation} onChange={maj('orientation')} error={erreurs.orientation} />
                  <Rating num="05" name="confort" legend={QUESTIONS.confort} value={rep.confort} onChange={maj('confort')} error={erreurs.confort} />
                  <Choice num="06" name="clarte" legend={QUESTIONS.clarte} options={['Oui', 'Partiellement', 'Non']} value={rep.clarte} onChange={maj('clarte')} error={erreurs.clarte} />
                  <Choice num="07" name="retour" legend={QUESTIONS.retour} options={['Oui', 'Peut-être', 'Non']} value={rep.retour} onChange={maj('retour')} error={erreurs.retour} />
                  <div>
                    <label htmlFor="ameliorer" className="font-display text-2xl font-bold leading-tight"><span className="mr-3 text-base tabular-nums">08</span>Que pourrions-nous améliorer ? <span className="font-sans text-base font-normal">(facultatif)</span></label>
                    <p id="ameliorer-aide" className="mt-2 text-sm">Merci de ne pas indiquer d’informations personnelles (nom, adresse, téléphone…).</p>
                    <textarea id="ameliorer" aria-describedby="ameliorer-aide" rows={5} maxLength={1000} value={rep.ameliorer} onChange={(e) => maj('ameliorer')(e.target.value)}
                      className="mt-3 block w-full border-2 border-anthracite bg-creme p-3 text-base" />
                    <p className="mt-1 text-right text-sm tabular-nums" aria-hidden="true">{rep.ameliorer.length} / 1000</p>
                  </div>
                </>
              )}

              {rep.visite !== 'Non' && (
                <div className="border-t-2 border-anthracite pt-6">
                  <button type="submit" className="btn btn-dark">Valider mes réponses <ArrowRight className="h-5 w-5" aria-hidden="true" /></button>
                  <p className="mt-3 text-sm">Les réponses restent sur cet appareil et ne sont transmises à personne.</p>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </>
  )
}
