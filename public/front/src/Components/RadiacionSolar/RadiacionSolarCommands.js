import React, { Component } from "react";
import TablesCommands from "../Tables/TablesCommands";

class RadiacionSolarCommands extends Component {
  render() {
    return (
      <>
        <h1>BASE RADIACÓN UV </h1>
        {/* VOLVER*/}

        <div className="text-center">
          <a href="principal" onclick="console.log('The link was clicked.'); return false" className="btn btn-primary btn-lg boton" size="70">
            VOLVER
                </a>
          <br /><br /><br />
        </div>

        <TablesCommands url="RadiacionSolar" edit="EditRadiacionSolar" delete="DeleteRadiacionSolar" />
      </>
    );
  }
}

export default RadiacionSolarCommands;
