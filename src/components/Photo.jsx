import { images } from '../data/images'
import Shape from './Shape'

const fonds = { jaune: 'bg-gris', rouge: 'bg-gris', nuit: 'bg-gris' }
const formes = { jaune: 'cercle', rouge: 'carre', nuit: 'demi' }

/* Image remplaçable. Si aucun fichier n'est renseigné dans
   data/images.js, affiche un placeholder clairement identifié. */
export default function Photo({ slot, className = '', ratio = 'aspect-[4/3]', sombre = false, priority = false }) {
  const img = images[slot]
  if (!img) return null

  if (img.src) {
    return (
      <figure className={`${ratio} relative overflow-hidden bg-gris ${className}`}>
        <img
          src={img.src}
          alt={img.demo ? `Illustration : ${img.alt.charAt(0).toLowerCase()}${img.alt.slice(1)}` : img.alt}
          loading={priority ? 'eager' : 'lazy'}
          className="absolute inset-0 h-full w-full object-cover"
          style={img.position ? { objectPosition: img.position } : undefined}
        />
      </figure>
    )
  }

  return (
    <div
      role="img"
      aria-label={`${img.alt} (photographie à venir)`}
      data-placeholder={slot}
      className={`${ratio} relative overflow-hidden ${sombre ? 'bg-[#2a3854]' : fonds[img.pilier]} ${className}`}
    >
      {/* trame fine façon planche contact */}
      <div
        className="absolute inset-0 opacity-40"
        style={{ backgroundImage: `linear-gradient(${sombre ? 'rgb(247 244 236 / .12)' : 'rgb(32 37 42 / .10)'} 1px, transparent 1px), linear-gradient(90deg, ${sombre ? 'rgb(247 244 236 / .12)' : 'rgb(32 37 42 / .10)'} 1px, transparent 1px)`, backgroundSize: '32px 32px' }}
        aria-hidden="true"
      />
      <Shape forme={formes[img.pilier]} couleur={img.pilier === 'nuit' && sombre ? 'jaune' : img.pilier} className="absolute -bottom-[18%] -right-[10%] w-[62%] max-w-[420px] opacity-95" />
      <div className={`absolute left-0 top-0 flex max-w-[85%] flex-col gap-1 p-4 sm:p-5 ${sombre ? 'text-creme' : 'text-anthracite'}`} aria-hidden="true">
        <span className="eyebrow">Photo à venir</span>
        <span className="font-display text-lg font-bold leading-tight sm:text-xl">{img.label}</span>
        <code className="mt-1 font-mono text-[11px] opacity-70">images.{slot}</code>
      </div>
    </div>
  )
}
