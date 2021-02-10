import React, { Component } from "react";
import axios from "axios";
import { HTTP_URL } from "../HTTP";

class Tables extends Component {
  state = {
    data: [],
    columns: [],
    data_bool: false,
    anio: null,
    total: 0,
  };

  componentDidMount() {
    axios.get(`${HTTP_URL.url}${this.props.url}`).then((res) => {
      this.setState({ data: res.data.rows, columns: res.data.columns, data_bool: true, total: res.data.tamanio });
    });
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  buscar = async () => {
    

    console.log(this.state.anio);
    await axios
      .get(`${HTTP_URL.url}${this.props.url}`, {
        params: this.state.anio,
      })
      .then((res) => {
        if(res.data.tamanio>0){
          this.setState({ data: res.data.rows, columns: res.data.columns, data_bool: true, total: res.data.tamanio });
        } else {
          this.setState({ data: [{Encontrado: "Encontrado"}], columns: ["Nada"], data_bool: true, total: res.data.tamanio });
        }
      });

    this.setState({
      anio: null,
    });
  };

  render() {
    let cargando = <div>Cargando Contenido. . .</div>;
    if (this.state.data_bool) {
      cargando = <></>;
    }

    let content = null;
    if (this.state.data !== undefined) {
      content = (
        <div>
          <h1>{this.props.title}</h1>
          <div class="row">
            <div class="col-sm-11">
              <div className="form-floating mb-3">
                <input type="number" className="form-control" placeholder="n" id="floatingInput" size="70" onChange={this.onChange} value={this.state.anio} name="anio" />
                <label>Año</label>
              </div>
            </div>
            <div class="col-sm-1 d-flex align-items-center">
              <button type="button" class="btn btn-success mb-3 w-auto" onClick={this.buscar}>
                Consultar
              </button>
            </div>
          </div>
          {cargando}
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
                  {Object.keys(x).map((key) => {
                    if (key === this.state.columns[0]) {
                      return (
                        <th key={key} scope="row">
                          {x[key]}
                        </th>
                      );
                    } else {
                      return <td key={key}>{x[key]}</td>;
                    }
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    return <>{content}</>;
  }
}

export default Tables;
