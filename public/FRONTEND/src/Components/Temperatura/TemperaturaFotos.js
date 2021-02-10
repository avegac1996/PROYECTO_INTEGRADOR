import React, { Component } from "react";
import foto1 from "../../resources/img/temp/foto1.jfif";
import foto2 from "../../resources/img/temp/foto2.jfif";
import Carrusel from "../General/Carrusel/Carrusel";

class TemperaturaFotos extends Component {
  render() {
    let fotos = [foto1, foto2];
    return (
      <>
        <Carrusel title="Temperatura" fotos={fotos} />
      </>
    );
  }
}

export default TemperaturaFotos;
