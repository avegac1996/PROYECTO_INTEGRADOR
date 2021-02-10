import React, { Component } from "react";
import Csv from "../General/Csv/Csv";


class RadiacionUvCsv extends Component {
  render() {
    return (
      <>
        <Csv title="Radiación Uv" url="RadiacionUv" nombre="RadiacionUv.csv"/>
      </>
    );
  }
}

export default RadiacionUvCsv;
