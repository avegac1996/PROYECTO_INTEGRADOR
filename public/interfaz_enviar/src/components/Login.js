import React, { Component } from "react";
import "../assets/css/Login.css";
import axios from "axios";
import { Global } from "../Global";

import { Redirect } from "react-router-dom";

class Login extends Component {
  usernameRef = React.createRef();
  passwordRef = React.createRef();

  state = {
    user: {},
  };
  
  recibirFormulario = (e) => {
    e.preventDefault();

    var user = {
      nombre: this.usernameRef.current.value,
    };

    this.setState({
      user,
    });

    // CURRENT VALUES:
    // console.log(this.usernameRef.current.value);
    // console.log(this.passwordRef.current.value);

    axios
      .get(Global.url + "usuarios", {
        params: {
          username: this.usernameRef.current.value,
          password: this.passwordRef.current.value,
        },
      })
      .then((data) => {
        if (data.data.usuarios === "OK") {
          console.log("CORRECT");
          return <Redirect to="/RSolar" />;
        } else {
          console.log("icorrect");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  render() {
    return (
      <>
        <section className="login">
          <form className="form-box" onSubmit={this.recibirFormulario}>
            <br />
            <br />
            <br />
            <br />

            <br />
            <br />
            <br />
            <br />

            <h1 className="form-title">Login</h1>
            <input type="text" placeholder="Username" ref={this.usernameRef} />
            <input type="password" placeholder="password" ref={this.passwordRef} />
            <br />
            <button type="submit" className="button">
              Login
            </button>
            <br />
            <br />
            <br />
            <br />
          </form>
        </section>
      </>
    );
  }
}

export default Login;
