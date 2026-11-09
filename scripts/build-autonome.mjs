/* Génère dist-autonome/musee-vitra.html : tout le site dans UN seul
   fichier HTML (CSS, JS et polices intégrés), qui s'ouvre par simple
   double-clic, sans serveur. À lancer après `npm run build`. */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const dist = 'dist'
let html = readFileSync(join(dist, 'index.html'), 'utf8')

const cssHref = html.match(/<link rel="stylesheet"[^>]*href="\.\/([^"]+)"/)[1]
const jsSrc = html.match(/<script type="module"[^>]*src="\.\/([^"]+)"/)[1]

let css = readFileSync(join(dist, cssHref), 'utf8')
// polices : on garde le woff2 (tous navigateurs récents) en data URI, on retire le woff
css = css.replace(/,\s*url\(\.\/[^)]+\.woff\) format\("woff"\)/g, '')
css = css.replace(/url\(\.\/([^)]+\.woff2)\)/g, (_, f) => {
  const p = join(dist, 'assets', f)
  return existsSync(p) ? `url(data:font/woff2;base64,${readFileSync(p).toString('base64')})` : `url(./${f})`
})
// images (photos WebP…) : chaque new URL("fichier", import.meta.url) devient une data URI
const types = { webp: 'image/webp', jpg: 'image/jpeg', jpeg: 'image/jpeg', png: 'image/png', svg: 'image/svg+xml' }
const js = readFileSync(join(dist, jsSrc), 'utf8')
  .replace(/new URL\("([\w.-]+\.(webp|jpe?g|png|svg))",import\.meta\.url\)/g, (m, f, ext) => {
    const p = join(dist, 'assets', f)
    return existsSync(p) ? `new URL("data:${types[ext]};base64,${readFileSync(p).toString('base64')}")` : m
  })
  .replace(/<\/script/g, '<\\/script')

html = html
  .replace(/<link rel="stylesheet"[^>]*>/, () => `<style>${css}</style>`)
  .replace(/<script type="module"[^>]*><\/script>/, '')
  .replace('</body>', () => `<script type="module">${js}</script>\n</body>`)

mkdirSync('dist-autonome', { recursive: true })
writeFileSync('dist-autonome/musee-vitra.html', html)
console.log('dist-autonome/musee-vitra.html', (html.length / 1024).toFixed(0), 'Ko')
