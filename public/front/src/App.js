import Navbar from "./Components/General/Navbar/Navbar";
import "./App.css";
import Login from "./Components/Login/Login";
// import Tables from "./Components/Tables/Tables";
import { BrowserRouter as Router, Route } from "react-router-dom";
import RadiacionSolar from "./Components/RadiacionSolar/RadiacionSolar";
import RadiacionUv from "./Components/RadiacionUv/RadiacionUv";
import Temperatura from "./Components/Temperatura/Temperatura";
import RadiacionSolarCommands from "./Components/RadiacionSolar/RadiacionSolarCommands";
import QuienesSomos from "./Components/QuienesSomos/QuienesSomos";
import RadiacionSolarFotos from "./Components/RadiacionSolar/RadiacionSolarFotos";
import RadiacionUvFotos from "./Components/RadiacionUv/RadiacionUvFotos";
import TemperaturaFotos from "./Components/Temperatura/TemperaturaFotos";
import RadiacionSolarCsv from "./Components/RadiacionSolar/RadiaconSolarCsv";
import RadiacionUvCsv from "./Components/RadiacionUv/RadiacionUvCsv";
import TemperaturaCsv from "./Components/Temperatura/TemperaturaCsv";
import temperaturaCommands from "./Components/Temperatura/temperaturaCommands";
import RadiacionUvCommands from "./Components/RadiacionUv/RadiacionUvCommands";
import principal from "./Components/Principal/principal";


function App() {
  return (
    <Router>
      <div className="container-fluid quitar-bordes">
        <Navbar />
        <Route exact path="/" component={QuienesSomos}></Route>
        <Route exact path="/Login" component={Login}></Route>
        <Route exact path="/RadiacionSolar" component={RadiacionSolar}></Route>
        <Route exact path="/RadiacionSolarFotos" component={RadiacionSolarFotos}></Route>
        <Route exact path="/RadiacionSolarCsv" component={RadiacionSolarCsv}></Route>
        <Route exact path="/RadiacionUv" component={RadiacionUv}></Route>
        <Route exact path="/RadiacionUvFotos" component={RadiacionUvFotos}></Route>
        <Route exact path="/RadiacionUvCsv" component={RadiacionUvCsv}></Route>
        <Route exact path="/Temperatura" component={Temperatura}></Route>
        <Route exact path="/TemperaturaFotos" component={TemperaturaFotos}></Route>
        <Route exact path="/TemperaturaCsv" component={TemperaturaCsv}></Route>
        <Route exact path="/QuienesSomos" component={QuienesSomos}></Route>
        <Route exact path="/RsCommands" component={RadiacionSolarCommands}></Route>
        <Route exact path="/TempCommands" component={temperaturaCommands}></Route>
        <Route exact path="/RuvCommands" component={RadiacionUvCommands}></Route>
        <Route exact path="/Principal" component={principal}></Route>
      </div>
    </Router>
  );
}

export default App;
