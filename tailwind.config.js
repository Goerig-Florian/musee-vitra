/** Les valeurs HEX sont définies une seule fois dans src/styles/tokens.css */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        jaune: 'rgb(var(--c-jaune) / <alpha-value>)',
        rouge: 'rgb(var(--c-rouge) / <alpha-value>)',
        nuit: 'rgb(var(--c-nuit) / <alpha-value>)',
        creme: 'rgb(var(--c-creme) / <alpha-value>)',
        anthracite: 'rgb(var(--c-anthracite) / <alpha-value>)',
        gris: 'rgb(var(--c-gris) / <alpha-value>)',
      },
      fontFamily: {
        display: ['"League Spartan"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: { site: '88rem' },
      letterSpacing: { titre: '-0.03em' },
    },
  },
  plugins: [],
}
