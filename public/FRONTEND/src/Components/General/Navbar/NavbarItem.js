import React, { Component } from "react";
import Divider from "./Divider";
import NavbarItemItem from "./NavbarItemItem";

class NavbarItem extends Component {
  render() {
    return (
      <>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle letra-color-2" href="index.html" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {" "}
            {this.props.title}{" "}
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <NavbarItemItem subtitle="Mostrar Datos" ruta={this.props.ruta} />
            <Divider />
            <NavbarItemItem subtitle="Descargar Datos" ruta={this.props.csv}/>
            <Divider />
            <NavbarItemItem subtitle="Mostrar Gráfica" ruta={this.props.fotos}/>
          </ul>
        </li>
      </>
    );
  }
}

export default NavbarItem;
