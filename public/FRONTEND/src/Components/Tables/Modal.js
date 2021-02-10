import React, { Component } from "react";
import ModalInput from "./ModalInput";
import axios from "axios";
import { HTTP_URL } from "../HTTP";

class Modal extends Component {
  mandaEditar = async () => {
    await axios.post(`${HTTP_URL.url}${this.props.edit}`, this.props.fila_encontrada);
    this.props.getData();
    alert("Registro editado exitosamente");
  };

  mandaEliminar = () => {};

  render() {
    let content = <div>Cargando Contenido. . .</div>;

    if (this.props.fila_encontrada !== undefined) {
      content = Object.keys(this.props.fila_encontrada).map((key, index) => {
        return <ModalInput title={this.props.columns[index]} value={this.props.fila_encontrada[key]} filaEncontradaHandle={this.props.filaEncontradaHandle} fila_encontrada={this.props.fila_encontrada} llave={key} />;
      });
    }

    return (
      <>
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Editar
                </h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form>
                  {content}

                  <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
                      Cerrar
                    </button>
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={this.mandaEditar}>
                      Editar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          
        </div>
      </>
    );
  }
}

export default Modal;
