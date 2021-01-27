import React, { Component } from "react";
import logo from "../../../resources/img/logo_ups.png";
import NavbarItem from "./NavbarItem";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light fondo-navbar">
        <div className="container-fluid">
          <a className="navbar-brand letra-color" href="/">
            <img src={logo} alt="" width="30" height="30" className="d-inline-block align-top" />
            UPS
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <NavbarItem title="Radiación Solar" ruta="/RadiacionSolar" />
              <NavbarItem title="Radiación UV" ruta="/RadiacionUv" />
              <NavbarItem title="Temperatura" ruta="/Temperatura" />
              <li className="nav-item">
                <NavLink className="nav-link active letra-color-2" aria-current="page" to="/">
                  Login
                </NavLink>
              </li>
              {/* <NavLink to="/table">Table</NavLink>
              <NavLink to="/">Login</NavLink> */}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
