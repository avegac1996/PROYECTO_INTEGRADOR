import React, { Component } from "react";
import Csv from "../General/Csv/Csv";

class RadiaconSolarCsv extends Component {
  render() {
    return (
      <>
        <Csv title="Radiación Solar" url="RadiacionSolar" nombre="RadiacionSolar.csv"/>
      </>
    );
  }
}

export default RadiaconSolarCsv;
