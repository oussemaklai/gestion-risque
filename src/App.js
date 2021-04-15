import React from "react";
import Login from "./Component/Login";
import SignUp from "./Component/SignUp";
import Home from "./Component/Home";
import {BrowserRouter ,Redirect,Route ,Switch, withRouter} from 'react-router-dom';
import Session from "./Component/Traitement/Session";
import GestionSession from "./Component/Gestion/GestionSession";
import GestionImpacts from "./Component/Gestion/GestionImpacts";
import GestionVul from "./Component/Gestion/GestionVul";
import GestionActifs from "./Component/Gestion/GestionActifs";
import GestionMenaces from "./Component/Gestion/GestionMenaces";
import GestionMesures from "./Component/Gestion/GesitonMesures";
import ChoixActifs from "./Component/Traitement/ChoixActifs";
import TraitementContainer from "./Component/Traitement/TraitemenContainer";
function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Login}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/SignUp" component={SignUp}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/session" component={Session}/>
        <Route exatct path="/gestion-session" component={GestionSession}/>
        <Route exatct path="/gestion-impacts" component={GestionImpacts}/>
        <Route exatct path="/gestion-vulnerabilite" component={GestionVul}/>
        <Route exatct path="/gestion-actifs" component={GestionActifs}/>
        <Route exatct path="/gestion-menaces" component={GestionMenaces}/>
        <Route exatct path="/gestion-mesures" component={GestionMesures}/>
        <Route exact path="/choix-actifs" component={ChoixActifs}/>
        <Route exact path="/traitement" component={TraitementContainer}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
