import axios from "axios";
import React, { Component } from "react";
import logo from "../../resources/img/logo_ups.png";
import { HTTP_URL } from "../HTTP";
import { Redirect } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: "",
    alert: false,
    login: false,
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
    axios
      .get(`${HTTP_URL.url}Usuarios`, {
        params: this.state,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        if (res.data) {
          this.setState({ login: true });
        }
        this.setState({ alert: !res.data });
      });
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  alertChange = () => {
    this.setState({ alert: false });
  };

  render() {
    let alerta = null;
    if (this.state.alert) {
      alerta = (
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
          <strong>Usuario</strong> o <strong>contraseña</strong> incorrecta
          <button type="button" class="btn-close" aria-label="Close" onClick={this.alertChange}></button>
        </div>
      );
    }

    if (this.state.login) {
      return <Redirect to="/RsCommands" />;
    }

    return (
      <>
        <div className="login">
          <div className="d-flex justify-content-center">
            <div>
              <form onSubmit={this.onSubmit}>
                <div className="mx-auto text-center">
                  <img className="mb-3" src={logo} width="180" alt="logo" />
                  <h1 className="text-center mb-3">Iniciar Sesión</h1>
                </div>
                {alerta}
                <div className="form-floating mb-3">
                  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" size="70" onChange={this.onChange} value={this.state.email} name="email" />
                  <label>Correo Electrónico</label>
                </div>

                <div className="form-floating mb-4">
                  <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={this.onChange} value={this.state.password} name="password" />
                  <label>Contraseña</label>
                </div>

                <div className="text-center">
                  <button type="submit " className="btn btn-primary btn-lg boton" size="70">
                    Iniciar Sesión
                  </button>
                </div>
                <br />
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
