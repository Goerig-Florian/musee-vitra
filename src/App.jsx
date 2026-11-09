import { HashRouter, Route, Routes } from 'react-router-dom'
import { PhaseProvider } from './context/Phase'
import Layout from './components/Layout'
import Accueil from './pages/Accueil'
import Musee from './pages/Musee'
import Agenda from './pages/Agenda'
import Infos from './pages/Infos'
import VitraTV from './pages/VitraTV'
import Avis from './pages/Avis'
import Introuvable from './pages/Introuvable'

/* HashRouter : le site fonctionne sur tout hébergement statique
   (et depuis le dossier dist/) sans configuration serveur. */
export default function App() {
  return (
    <PhaseProvider>
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Accueil />} />
            <Route path="musee" element={<Musee />} />
            <Route path="agenda" element={<Agenda />} />
            <Route path="infos" element={<Infos />} />
            <Route path="vitra-tv" element={<VitraTV />} />
            <Route path="avis" element={<Avis />} />
            <Route path="*" element={<Introuvable />} />
          </Route>
        </Routes>
      </HashRouter>
    </PhaseProvider>
  )
}
