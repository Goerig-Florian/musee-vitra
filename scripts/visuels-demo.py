"""Génère les illustrations de démonstration (SVG) dans src/assets/demo/.
Visuels graphiques, pas des photographies : à remplacer par les photos du musée."""
import os
J, R, N, C, A, G = '#FDD10C', '#EA463A', '#1E2B45', '#F7F4EC', '#20252A', '#D9D6CF'
W, H = 1600, 1200
OUT = os.path.join(os.path.dirname(__file__), '..', 'src', 'assets', 'demo')

def svg(body, bg=C):
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" preserveAspectRatio="xMidYMid slice"><rect width="{W}" height="{H}" fill="{bg}"/>{body}</svg>'

def hachures(x, y, w, h, pas, couleur, ep=4, op=1):
    return ''.join(f'<line x1="{x+i}" y1="{y}" x2="{x+i}" y2="{y+h}" stroke="{couleur}" stroke-width="{ep}" opacity="{op}"/>' for i in range(0, w, pas))

def personne(x, y, s=1, c=A):
    return (f'<g transform="translate({x} {y}) scale({s})"><circle cx="0" cy="-150" r="24" fill="{c}"/>'
            f'<path d="M-30 -118h60l12 118h-84z" fill="{c}"/><rect x="-26" y="0" width="20" height="90" fill="{c}"/><rect x="6" y="0" width="20" height="90" fill="{c}"/></g>')

def chaise(x, y, s, c):  # chaise générique en porte-à-faux
    return (f'<g transform="translate({x} {y}) scale({s})" fill="none" stroke="{c}" stroke-width="22" stroke-linejoin="round" stroke-linecap="round">'
            f'<path d="M-90 -320 L-110 -40 Q-112 0 -70 0 L120 0"/><path d="M-110 -40 L100 -40 Q130 -40 130 -10 L130 0"/>'
            f'<path d="M-100 -150 L80 -150"/></g>')

V = {}
# 1. Architecture extérieure : volumes blancs sculptés
V['architecture-exterieure'] = svg(
    f'<rect y="820" width="{W}" height="380" fill="{G}"/>'
    f'<circle cx="1240" cy="300" r="140" fill="{J}"/>'
    f'<path d="M420 820V430l260-120v510z" fill="#fff"/>'
    f'<path d="M680 820V310l300 90v420z" fill="#EDEAE2"/>'
    f'<path d="M980 820V400q190 10 260 200v220z" fill="#fff"/>'
    f'<path d="M300 820V560h180v260z" fill="#E4E0D7"/>'
    f'<path d="M600 820V250q120-60 200 20v550z" fill="#fff" stroke="{G}" stroke-width="3"/>'
    f'<rect x="740" y="620" width="140" height="200" fill="{N}"/>'
    f'<rect x="1040" y="560" width="120" height="70" fill="{N}" opacity=".85"/>'
    f'<line x1="0" y1="820" x2="{W}" y2="820" stroke="{A}" stroke-width="6"/>'
    + personne(520, 900, .8) + personne(1150, 920, .75, N), bg='#E9E5DB')
# 2. Détail de façade : surface courbe à bandes
V['architecture-facade'] = svg(
    f'<path d="M0 1200V600Q500 200 1600 260V1200z" fill="#fff"/>'
    + ''.join(f'<path d="M0 {640+i*70}Q500 {240+i*70} 1600 {300+i*70}" fill="none" stroke="{G}" stroke-width="5"/>' for i in range(12))
    + f'<rect x="980" y="560" width="300" height="200" fill="{N}"/><rect x="980" y="560" width="300" height="200" fill="none" stroke="{A}" stroke-width="10"/>'
    f'<circle cx="300" cy="230" r="90" fill="{J}"/>', bg=C)
# 3. Détail : escalier
V['architecture-escalier'] = svg(
    ''.join(f'<rect x="{200+i*110}" y="{1000-i*80}" width="{1400-i*110}" height="80" fill="{"#fff" if i%2 else "#EDEAE2"}"/>' for i in range(11))
    + f'<line x1="200" y1="900" x2="1400" y2="20" stroke="{A}" stroke-width="10"/>'
    f'<rect x="0" y="0" width="200" height="{H}" fill="{N}"/>' + personne(760, 640, .9, R), bg=G)
# 4. Détail : verrière et lumière
V['architecture-verriere'] = svg(
    f'<polygon points="0,0 900,0 600,1200 0,1200" fill="#fff"/>'
    f'<polygon points="900,0 1600,0 1600,1200 600,1200" fill="#E4E0D7"/>'
    + ''.join(f'<polygon points="{700+i*150},0 {760+i*150},0 {360+i*150},1200 {300+i*150},1200" fill="{J}" opacity=".55"/>' for i in range(4))
    + hachures(0, 0, 900, 60, 90, A, 6), bg=C)
# 5. Espace intérieur : salle d'exposition
V['espace-interieur'] = svg(
    f'<polygon points="0,0 400,260 400,860 0,1200" fill="#EDEAE2"/>'
    f'<polygon points="1600,0 1200,260 1200,860 1600,1200" fill="#E4E0D7"/>'
    f'<rect x="400" y="260" width="800" height="600" fill="#fff"/>'
    f'<polygon points="0,1200 400,860 1200,860 1600,1200" fill="{G}"/>'
    f'<rect x="620" y="420" width="360" height="240" fill="{N}"/>'
    f'<rect x="460" y="700" width="140" height="160" fill="#fff" stroke="{A}" stroke-width="4"/>'
    f'<rect x="1000" y="680" width="160" height="180" fill="#fff" stroke="{A}" stroke-width="4"/>'
    f'<circle cx="530" cy="660" r="40" fill="{R}"/><rect x="1040" y="610" width="80" height="70" fill="{J}"/>'
    + personne(800, 1060, .9) + personne(300, 1150, 1.2, N))
# 6-8. Collections : objets sur socle (silhouettes génériques)
V['objet-chaise'] = svg(
    f'<rect x="500" y="900" width="600" height="300" fill="#fff"/>' + chaise(800, 900, 1.6, A) +
    f'<circle cx="1320" cy="260" r="110" fill="{C}"/>', bg=J)
V['objet-fauteuil'] = svg(
    f'<rect x="450" y="900" width="700" height="300" fill="{C}"/>'
    f'<path d="M560 900V560q0-90 90-90h260q90 0 90 90v120h40q60 0 60 60v160z" fill="{A}"/>'
    f'<rect x="600" y="700" width="360" height="90" fill="{C}" opacity=".18"/>'
    f'<rect x="200" y="160" width="200" height="200" fill="{C}"/>', bg=R)
V['objet-lampe'] = svg(
    f'<rect x="520" y="920" width="560" height="280" fill="{C}"/>'
    f'<path d="M640 520h320l-80-240h-160z" fill="{J}"/><rect x="790" y="520" width="20" height="340" fill="{C}"/>'
    f'<ellipse cx="800" cy="890" rx="130" ry="30" fill="{C}"/>'
    f'<polygon points="640,520 960,520 1200,1200 400,1200" fill="{J}" opacity=".18"/>', bg=N)
# 9. Découvrir : visite flash devant un objet
V['visite-flash'] = svg(
    f'<rect y="900" width="{W}" height="300" fill="{G}"/>'
    f'<rect x="980" y="620" width="380" height="280" fill="#fff"/>' + chaise(1170, 620, .9, A) +
    f'<rect x="900" y="200" width="540" height="300" fill="{J}"/>'
    + personne(860, 1000, 1.05, R) + personne(560, 1080, 1.15) + personne(380, 1100, 1.1, N) + personne(220, 1120, 1.2))
# 10. Participer : atelier vu de dessus
V['atelier'] = svg(
    f'<rect x="160" y="140" width="1280" height="920" fill="{C}"/>'
    f'<rect x="300" y="260" width="420" height="300" fill="#fff" transform="rotate(-6 510 410)"/>'
    f'<rect x="860" y="300" width="380" height="380" fill="{J}"/>'
    f'<circle cx="560" cy="820" r="130" fill="{N}"/>'
    f'<rect x="1000" y="760" width="260" height="40" fill="{A}" transform="rotate(20 1130 780)"/>'
    f'<rect x="340" y="620" width="300" height="24" fill="{A}"/>'
    f'<path d="M760 600h200v200z" fill="{C}" stroke="{A}" stroke-width="6"/>'
    f'<circle cx="1260" cy="220" r="60" fill="#fff"/>', bg=R)
# 11. Se retrouver : le musée la nuit
V['nocturne'] = svg(
    f'<circle cx="1260" cy="260" r="120" fill="{J}"/>'
    f'<rect y="860" width="{W}" height="340" fill="#16203a"/>'
    f'<path d="M380 860V440l300-120v540z" fill="#2a3854"/><path d="M680 860V320l320 100v440z" fill="#33425f"/>'
    f'<path d="M1000 860V430q180 20 240 220v210z" fill="#2a3854"/>'
    f'<rect x="740" y="620" width="180" height="240" fill="{J}"/><rect x="460" y="560" width="120" height="80" fill="{J}" opacity=".85"/>'
    f'<polygon points="740,860 920,860 1040,1200 620,1200" fill="{J}" opacity=".22"/>'
    + personne(700, 1080, .9, '#0f172b') + personne(980, 1110, .95, '#0f172b') + personne(1120, 1090, .85, '#0f172b'), bg=N)
# 12. Espace de convivialité
V['convivialite'] = svg(
    f'<rect y="820" width="{W}" height="380" fill="{G}"/>'
    f'<rect x="0" y="0" width="{W}" height="140" fill="{J}"/>'
    + ''.join(f'<g><rect x="{x-110}" y="700" width="220" height="24" fill="{A}"/><rect x="{x-8}" y="724" width="16" height="200" fill="{A}"/>'
              f'<rect x="{x-60}" y="660" width="40" height="40" fill="#fff"/><circle cx="{x+50}" cy="684" r="18" fill="{R}"/></g>' for x in (420, 1180))
    + f'<rect x="700" y="300" width="200" height="420" fill="{N}"/>'
    + personne(260, 1040, 1.1) + personne(1360, 1060, 1.1, N), bg=C)

os.makedirs(OUT, exist_ok=True)
for nom, contenu in V.items():
    with open(os.path.join(OUT, nom + '.svg'), 'w') as f:
        f.write(contenu)
print(len(V), 'visuels')
