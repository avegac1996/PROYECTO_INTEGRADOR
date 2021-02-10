import React, { Component } from "react";
import { HTTP_URL } from "../../HTTP";
import axios from "axios";
import { CSVLink } from "react-csv";

class Csv extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios.get(`${HTTP_URL.url}${this.props.url}`).then((res) => {
      this.setState({ data: res.data.rows, columns: res.data.columns, lastColumn: res.data.columns[res.data.columns.length - 1], firstColumn: res.data.columns[0] });
    });
  };

  render() {
    let content = <div>Cargando Contenido para la descarga. . .</div>;
    if (this.state.data !== undefined) {
      content = (
        <div>
          <br />
          <button type="button" className="btn btn-success">
            <CSVLink data={this.state.data} filename={this.props.nombre}>
              <div className="letra-color-3">Descargar CSV</div>
            </CSVLink>
          </button>
        </div>
      );
    }

    return (
      <>
        <br/>
        <h1>{this.props.title}</h1>
        {content}
      </>
    );
  }
}

export default Csv;
