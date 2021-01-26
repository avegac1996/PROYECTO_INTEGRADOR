import React, { Component } from "react";
import "../assets/css/Login.css";
import Router from "../Router";

class Container extends Component {
  // username = "";
  // password = "";

  // state = {
  //   contador: 0,
  // };

  // sumar = (e) => {
  //   this.setState({
  //     contador: this.state.contador + 1,
  //   });
  // };

  // restar = (e) => {
  //   this.setState({
  //     contador: this.state.contador - 1,
  //   });
  // };

  render() {
    return (
      <>
        

        <Router />

        {/* {this.state.contador}
        <button onClick={this.sumar}>Sumar</button>
        <button onClick={this.restar}>Restar</button> */}

        {/* <footer className="foot">
          <p>PROYECTO INTEGRADOR</p>
          <p> ➼ VEGA ANTHONY</p>
        </footer> */}
      </>
    );
  }
}

export default Container;
