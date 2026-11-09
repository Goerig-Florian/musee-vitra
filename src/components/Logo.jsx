import Shape from './Shape'

export default function Logo({ clair = false }) {
  return (
    <span className="flex items-center gap-3">
      <span className="flex items-end gap-[3px]" aria-hidden="true">
        <Shape forme="cercle" couleur="jaune" className="h-4 w-4" />
        <Shape forme="carre" couleur="rouge" className="h-4 w-4" />
        <Shape forme="demi" couleur={clair ? 'creme' : 'nuit'} className="h-4 w-4" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.6rem] font-extrabold tracking-titre">Vitra</span>
        <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] opacity-80">Musée · Valmont-sur-Rive</span>
      </span>
    </span>
  )
}
