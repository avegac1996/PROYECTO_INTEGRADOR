import React, { Component } from "react";
import Fotos from "./Fotos";

class Carrusel extends Component {
  render() {
    return (
      <>
        <br />
        <h1>{this.props.title}</h1>

        <div className="container">
          <div id="carouselExampleControls" class="carousel carousel-dark slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              {this.props.fotos.map((x, index) => (
                <Fotos foto={x} indice={index} />
              ))}
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Carrusel;
