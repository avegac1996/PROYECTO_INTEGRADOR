import React, { Component } from "react";
import foto1 from "../../resources/img/uv/foto1.jfif";
import foto2 from "../../resources/img/uv/foto2.jfif";
import foto3 from "../../resources/img/uv/foto3.jfif";

import Carrusel from "../General/Carrusel/Carrusel";

class RadiacionUvFotos extends Component {
  render() {
    let fotos = [foto1, foto2, foto3];
    return (
      <>
        <Carrusel title="Radiación UV" fotos={fotos} />
      </>
    );
  }
}

export default RadiacionUvFotos;
