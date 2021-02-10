import React, { Component } from "react";
import foto1 from "../../resources/img/rad/rad1.jfif";
import foto2 from "../../resources/img/rad/rad2.jfif";
import foto3 from "../../resources/img/rad/rad3.jfif";
import Carrusel from "../General/Carrusel/Carrusel";

class RadiacionSolarFotos extends Component {
  render() {
    let fotos = [foto1, foto2, foto3];
    return (
      <>
        <Carrusel title="Radiación Solar" fotos={fotos} />
      </>
    );
  }
}

export default RadiacionSolarFotos;
