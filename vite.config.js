import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' : le dossier dist/ fonctionne sur n'importe quel hébergement statique
export default defineConfig({
  plugins: [react()],
  base: './',
})
