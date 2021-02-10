import React, { Component } from "react";

class ModalInput extends Component {
  onChange = (e) => {
    let duplicado = Object.assign({}, this.props.fila_encontrada);
    duplicado[this.props.llave] = e.target.value;
    this.props.filaEncontradaHandle(duplicado);
  };

  render() {
    let tipo = "number";
    if (isNaN(this.props.value)) {
      tipo = "text";
    }
    let deshabilitado = (
      <>
        <div className="form-floating mb-3">
          <input type={tipo} className="form-control" id="floatingInput" placeholder="name@example.com" size="70" value={this.props.value} onChange={this.onChange} name={this.props.title} />
          <label>{this.props.title}</label>
        </div>
      </>
    );
    if ((this.props.llave === "id" || this.props.llave === "Fecha" || this.props.llave === "Hora")) {
      deshabilitado = (
        <>
          <div className="form-floating mb-3">
            <input type={tipo} className="form-control" id="floatingInput" placeholder="name@example.com" size="70" value={this.props.value} onChange={this.onChange} name={this.props.title} disabled />
            <label>{this.props.title}</label>
          </div>
        </>
      );
    }

    return <>{deshabilitado}</>;
  }
}

export default ModalInput;
