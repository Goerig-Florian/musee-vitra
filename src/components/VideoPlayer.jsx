import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'

/* Lecteur vidéo en fenêtre modale (élément <dialog> natif :
   focus piégé et touche Échap gérés par le navigateur). */
export default function VideoPlayer({ video, onClose }) {
  const ref = useRef(null)
  useEffect(() => {
    const d = ref.current
    if (video && d && !d.open) d.showModal()
    if (!video && d?.open) d.close()
  }, [video])
  return (
    <dialog
      ref={ref}
      onClose={onClose}
      aria-labelledby="lecteur-titre"
      className="on-dark w-[min(64rem,calc(100vw-2rem))] max-w-none bg-nuit p-0 text-creme backdrop:bg-anthracite/80"
    >
      {video && (
        <div>
          <div className="flex items-center justify-between gap-4 border-b border-creme/30 px-4 py-3">
            <h2 id="lecteur-titre" className="font-display text-xl font-bold">{video.titre}</h2>
            <button type="button" onClick={() => ref.current?.close()} className="inline-flex h-11 w-11 items-center justify-center border-2 border-creme">
              <X aria-hidden="true" /><span className="sr-only">Fermer la vidéo</span>
            </button>
          </div>
          <video src={video.src} poster={video.poster || undefined} controls autoPlay className="aspect-video w-full bg-black">
            {video.sousTitres && <track kind="subtitles" src={video.sousTitres} srcLang="fr" label="Français" default />}
            Votre navigateur ne peut pas lire cette vidéo.
          </video>
        </div>
      )}
    </dialog>
  )
}
