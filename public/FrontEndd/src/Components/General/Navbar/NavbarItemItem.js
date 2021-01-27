import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavbarItemItem extends Component {
  render() {
    return (
      <>
        <li>
          <NavLink className="dropdown-item" to={this.props.ruta}>
            {this.props.subtitle}
          </NavLink>
        </li>
      </>
    );
  }
}

export default NavbarItemItem;
