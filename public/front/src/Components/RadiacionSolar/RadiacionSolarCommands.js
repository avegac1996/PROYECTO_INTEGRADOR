import React, { Component } from "react";
import TablesCommands from "../Tables/TablesCommands";

class RadiacionSolarCommands extends Component {
  render() {
    return (
      <>
        <h1>Radiacion Solar Commands</h1>
        <TablesCommands url="RadiacionSolar" edit="EditRadiacionSolar" delete="DeleteRadiacionSolar" />
      </>
    );
  }
}

export default RadiacionSolarCommands;
