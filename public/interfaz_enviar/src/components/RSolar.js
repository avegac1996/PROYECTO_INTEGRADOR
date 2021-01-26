import React, { Component } from "react";
import "../assets/css/Login.css";
import { Global } from "../Global";
import axios from "axios";

class RSolar extends Component {
  state = {
    informacion: [],
    informacion2: [],
    status: null,
  };

  getRadSolar = () => {
    axios
      .get(Global.url + "rad_solar")
      .then((data) => {
        let info = data.data.data;
        this.setState({
          informacion: info,
          status: "success",
        });
        console.log(this.state.informacion[0].solar_fecha);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  render() {
    axios
      .get(Global.url + "rad_solar")
      .then((data) => {
        let info = data.data.data;
        this.setState({
          informacion: info,
          status: "success",
        });
        console.log(this.state.informacion[0].solar_fecha);
      })
      .catch((err) => {
        console.error(err);
      });

      axios
      .get(Global.url + "rad_solar")
      .then((data) => {
        let info = data.data.data;
        this.setState({
          informacion: info,
          status: "success",
        });
        console.log(this.state.informacion[0].solar_fecha);
      })
      .catch((err) => {
        console.error(err);
      });  
    return (
      <>
        <section className="login">
          <h1>RSOLAR</h1>
          <h2>{this.state.texto}</h2>
        </section>

        {this.state.status === "success" && (
          <div>
            {this.state.informacion.map((info) => {
              return <h4>{info.id_rad_solar} {info.solar_fecha}{info.solar_hora}{info.tmp_belisario}{info.tmp_carapungo}{info.tmp_centro}{info.tmp_cotocollao}{info.tmp_elcamal}{info.tmp_guamani}{info.tmp_loschillos}{info.tmp_sanantonio}{info.tmp_tumbaco}</h4>;
            })}
          </div>
        )}

        {this.state.status === null && <div>Cargando espere porfavor...</div>}
      </>
    );
  }
}

export default RSolar;
