import React, { Component } from "react";
import Csv from "../General/Csv/Csv";

class TemperaturaCsv extends Component {
  render() {
    return (
      <>
        <Csv title="Temperatura" url="Temperatura" nombre="Temperatura.csv"/>
      </>
    );
  }
}

export default TemperaturaCsv;
