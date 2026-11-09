const pad = (n) => String(n).padStart(2, '0')

export const versDate = (iso) => {
  const [y, m, d] = iso.split('-').map(Number)
  return new Date(y, m - 1, d)
}

const fmt = (opts) => new Intl.DateTimeFormat('fr-FR', opts)

export const jourSemaine = (iso) => fmt({ weekday: 'long' }).format(versDate(iso))
export const jourNum = (iso) => pad(versDate(iso).getDate())
export const moisCourt = (iso) => fmt({ month: 'short' }).format(versDate(iso)).replace('.', '')
export const moisLong = (iso) => fmt({ month: 'long' }).format(versDate(iso))
export const annee = (iso) => versDate(iso).getFullYear()
export const dateLongue = (iso) => fmt({ weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).format(versDate(iso))

export const isoDe = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`

/* Prochains samedis à partir du premier samedi d'ouverture (6 février 2027) */
export function prochainsSamedis(nombre = 8, depuis = new Date()) {
  const premier = versDate('2027-02-06')
  let d = depuis > premier ? new Date(depuis) : premier
  while (d.getDay() !== 6) d = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1)
  return Array.from({ length: nombre }, (_, i) => isoDe(new Date(d.getFullYear(), d.getMonth(), d.getDate() + i * 7)))
}
