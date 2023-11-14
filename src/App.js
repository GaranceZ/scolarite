import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import EtablissementDetails from "./Pages/EtablissementDetails";
import Etudiant from './Pages/Etudiant';
import EtudiantDetails from './Pages/EtudiantDetails'
import UE from './Pages/UE';
import UEDetails from './Pages/UEDetails';
import Formateur from './Pages/Formateur';
import FormateurDetails from './Pages/FormateurDetails';
import Suivres from './Pages/Suivre';
import SuivreEtudiantPage from './Pages/SuivreEtudiantPage';
import SuivreUEPage from './Pages/SuivreUEPage';
import Proposer from './Pages/Proposer';
import ProposerEtablissement from './Pages/ProposerEtablissementPage';
import ProposerUEPage from './Pages/ProposerUEPage';

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomePage />}/>
        <Route path={"/etablissement/:id"} element={<EtablissementDetails />}/>
        <Route path={"/etudiant"} element={<Etudiant/>}/>
        <Route path={"/etudiant/:id"} element={<EtudiantDetails/>}/>
        <Route path={"/ue"} element={<UE/>}/>
        <Route path={"/ue/:id"} element={<UEDetails/>}/>
        <Route path={"/formateur"} element={<Formateur/>}/>
        <Route path={"/formateur/:id"} element={<FormateurDetails/>}/>
        <Route path={"/suivre"} element={<Suivres/>}/>
        <Route path={"/suivre/etudiant/:id"} element={<SuivreEtudiantPage/>}/>
        <Route path={"/suivre/ue/:id"} element={<SuivreUEPage/>}/>
        <Route path={"/proposer"} element={<Proposer/>}/>
        <Route path={"/proposer/etablissement/:id"} element={<ProposerEtablissement/>}/>
        <Route path={"/proposer/ue/:id"} element={<ProposerUEPage/>}/>
      </Routes>
    </BrowserRouter>
  </>;
}

export default App;
