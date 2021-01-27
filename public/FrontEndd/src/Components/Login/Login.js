import React, { Component } from "react";
import logo from "../../resources/img/logo_ups.png";


class Login extends Component {
  render() {
    return (
      <>
        <div className="login">
          <div className="d-flex justify-content-center">
            <div>
              <div className="mx-auto text-center">
                <img className="mb-3" src={logo} width="180" alt="logo" />
                <h1 className="text-center mb-3">Iniciar Sesión</h1>
              </div>
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" size="70" />
                <label for="floatingInput">Correo Electrónico</label>
              </div>

              <div className="form-floating mb-4">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Contraseña</label>
              </div>

              <div className="text-center">
                <button type="submit " className="btn btn-primary btn-lg boton" size="70">
                  Iniciar Sesión
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
