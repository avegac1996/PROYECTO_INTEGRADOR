import React, { Component } from "react";
import { HTTP_URL } from "../HTTP";
import axios from "axios";

class add_user extends Component {
  state = {
    nombre: "",
    email: "",
    password: "",
    apellido: "",
  };

  registrar = (e) => {
    e.preventDefault();
    if (this.state.nombre === "" || this.state.password === "" || this.state.correo === "" || this.state.apellido === "") {
      alert("Llene correctamente los campos");
    } else {
      this.setState({ email: "", password: "", apellido: "", nombre: "" });
      axios
        .get(`${HTTP_URL.url}AnadirUsuarios`, {
          params: this.state,
        })
        .then((res) => {
          console.log(res);
          alert("Usuario Añadido");
        });
    }
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <>
        <form>
          <div className="base-container" ref={this.props.containerRef}>
            <div className="header">Register</div>
            <div className="content">
              <div className="text-center">
                <div className="form-group">
                  <label htmlFor="username">Nombre</label>
                  <br />
                  <input type="text" name="nombre" placeholder="username" onChange={this.onChange} value={this.state.nombre} />
                </div>
                <div className="form-group">
                  <label htmlFor="username">Apellido</label>
                  <br />
                  <input type="text" name="apellido" placeholder="username" onChange={this.onChange} value={this.state.apellido} />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <br />
                  <input type="text" name="email" placeholder="email" onChange={this.onChange} value={this.state.email} />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <br />
                  <input type="password" name="password" placeholder="password" onChange={this.onChange} value={this.state.password} />
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
          </div>
          <div className="text-center">
            <button className="btn btn-primary btn-lg boton" size="70" onClick={this.registrar}>
              Registrar
            </button>
          </div>
        </form>
      </>
    );
  }
}
export default add_user;
