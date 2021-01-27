import Navbar from "./Components/General/Navbar/Navbar";
import "./App.css";
import Login from "./Components/Login/Login";
// import Tables from "./Components/Tables/Tables";
import { BrowserRouter as Router, Route } from "react-router-dom";
import RadiacionSolar from "./Components/RadiacionSolar/RadiacionSolar";
import RadiacionUv from "./Components/RadiacionUv/RadiacionUv";
import Temperatura from "./Components/Temperatura/Temperatura";

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Navbar />
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/RadiacionSolar" component={RadiacionSolar}></Route>
        <Route exact path="/RadiacionUv" component={RadiacionUv}></Route>
        <Route exact path="/Temperatura" component={Temperatura}></Route>
      </div>
    </Router>
  );
}

export default App;
