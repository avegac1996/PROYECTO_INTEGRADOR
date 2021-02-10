import React, { Component } from "react";
import axios from "axios";
import { HTTP_URL } from "../HTTP";
import Modal from "./Modal";

class TablesCommands extends Component {
  state = {
    data: [],
    columns: [],
    lastColumn: null,
    firstColumn: null,
    id_modal: 0,
    fila_encontrada: 0,
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios.get(`${HTTP_URL.url}${this.props.url}`).then((res) => {
      this.setState({ data: res.data.rows, columns: res.data.columns, lastColumn: res.data.columns[res.data.columns.length - 1], firstColumn: res.data.columns[0] });
    });
  };

  eliminar = async () => {
    await axios.post(`${HTTP_URL.url}${this.props.delete}`, { id: this.state.id_modal });
    this.getData();
    alert("Registro eliminado exitosamente");
  };

  obtener_id = async (id) => {
    await this.setState({ id_modal: id });
    await this.setState({ fila_encontrada: this.state.data.find((x) => x.id === this.state.id_modal) });
    console.log(this.state.id_modal);
  };

  filaEncontradaHandle = (edit) => {
    this.setState({ fila_encontrada: edit });
  };

  render() {
    let content = <div>Cargando Contenido. . .</div>;
    if (this.state.data !== undefined) {
      content = (
        <div>
          <Modal columns={this.state.columns} fila_encontrada={this.state.fila_encontrada} filaEncontradaHandle={this.filaEncontradaHandle} edit={this.props.edit} getData={this.getData} />
          <table className="table table-striped  table-hover">
            <thead>
              <tr>
                {this.state.columns.map((x) => {
                  return (
                    <th scope="col" key={x}>
                      {x}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((x) => (
                <tr key={x[this.state.columns[0]]}>
                  {/* Recorre el objeto */}
                  {Object.keys(x).map((key) => {
                    if (key === this.state.firstColumn) {
                      return (
                        <th key={key} scope="row">
                          {x[key]}
                        </th>
                      );
                    } else if (key === this.state.lastColumn) {
                      return (
                        <React.Fragment key={key}>
                          <td>{x[key]}</td>
                          <td>
                            <button
                              className="btn btn-primary btn-sm"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                              data-bs-whatever="@mdo"
                              onClick={() => {
                                this.obtener_id(x["id"]);
                              }}
                            >
                              <ion-icon name="create-outline"></ion-icon>
                            </button>

                            <button
                              className="btn btn-danger btn-sm"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                              onClick={() => {
                                this.obtener_id(x["id"]);
                              }}
                            >
                              <ion-icon name="trash-outline"></ion-icon>
                            </button>
                          </td>
                        </React.Fragment>
                      );
                    } else {
                      return <td key={key}>{x[key]}</td>;
                    }
                  })}
                </tr>
              ))}
            </tbody>
          </table>

          {/* <!-- Modal --> */}
          <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">
                    Seguro desea eliminar...
                  </h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">Registro con id = {this.state.id_modal}</div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                    Omitir
                  </button>
                  <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={this.eliminar}>
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return <>{content}</>;
  }
}

export default TablesCommands;
