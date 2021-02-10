import React, { Component } from "react";

class Fotos extends Component {
  render() {
    let carrusel = (
      <div class="carousel-item">
        <img src={this.props.foto} class="d-block w-100" alt="..." />
      </div>
    );
    if (this.props.indice === 0) {
      carrusel = (
        <div class="carousel-item active">
          <img src={this.props.foto} class="d-block w-100" alt="..." />
        </div>
      );
    }
    return <>{carrusel}</>;
  }
}

export default Fotos;
