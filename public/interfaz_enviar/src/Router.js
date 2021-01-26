import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NavLink } from "react-router-dom";

import Login from "./components/Login";
import RUv from "./components/RUv";
import RSolar from "./components/RSolar";
import Temperatura from "./components/Temperatura";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <header className="header">
          <div className="container-header">
            <div className="container-logo-title">
              <h1>UPS</h1>
            </div>

            <div className="container-menu">
              <label className="icon-menu"></label>
              <nav className="menu">
                <ul>
                  <li>
                    <label className="icon-home"></label>
                    <span className="icon-triangle-down icon2"></span>
                  </li>
                  <li className="icon-triangle-down">
                    <NavLink to="/">INICIO</NavLink>
                  </li>
                  <li>
                    RADIACIÓN SOLAR <span className="icon-triangle-down"></span>
                    <ul>
                      <li>
                        <NavLink to="/RSolar">Mostrar Datos</NavLink>
                      </li>
                      <li>
                        <a href="dd_solar.html">Descargar Datos</a>
                      </li>
                      <li>
                        <a href="dg_solar.html">Descargar Gráficas</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    RADIACIÓN UV <span className="icon-triangle-down"></span>
                    <ul>
                      <li>
                        <NavLink to="/RUv">Mostrar Datos</NavLink>
                      </li>
                      <li>
                        <a href="dd_uv.html">Descargar Datos</a>
                      </li>
                      <li>
                        <a href="dg_solar.html">Descargar Gráficas</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    TEMPERATURA <span className="icon-triangle-down"></span>
                    <ul>
                      <li>
                        <NavLink to="/Temperatura">Mostrar Datos</NavLink>
                      </li>
                      <li>
                        <a href="dd_temp.html">Descargar Datos</a>
                      </li>
                      <li>
                        <a href="dg_tem.html">Descargar Gráficas</a>
                      </li>
                    </ul>
                  </li>
                  <li className="icon-triangle-down">
                    <NavLink to="/Login">LOGIN</NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <Switch>
          <Route path="/Login" component={Login} />
          <Route path="/RSolar" component={RSolar} />
          <Route path="/RUv" component={RUv} />
          <Route path="/Temperatura" component={Temperatura} />
          <Route path="/" component={Login} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
