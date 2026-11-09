/* Choix unique (boutons radio natifs mis en forme) */
export default function Choice({ name, legend, options, value, onChange, error, num }) {
  return (
    <fieldset aria-describedby={error ? `${name}-err` : undefined} aria-invalid={Boolean(error) || undefined}>
      <legend className="font-display text-2xl font-bold leading-tight"><span className="mr-3 text-base tabular-nums">{num}</span>{legend}</legend>
      <div className="mt-5 flex flex-wrap gap-2">
        {options.map((o) => (
          <label key={o} className="cursor-pointer">
            <input type="radio" name={name} value={o} checked={value === o} onChange={() => onChange(o)} className="peer sr-only" />
            <span className="flex min-h-[48px] items-center border-2 border-anthracite px-4 font-semibold transition-colors hover:bg-jaune peer-checked:bg-anthracite peer-checked:text-creme peer-focus-visible:outline peer-focus-visible:outline-[3px] peer-focus-visible:outline-offset-2 peer-focus-visible:outline-anthracite">
              {o}
            </span>
          </label>
        ))}
      </div>
      {error && <p id={`${name}-err`} className="mt-2 font-semibold">⚠ {error}</p>}
    </fieldset>
  )
}
