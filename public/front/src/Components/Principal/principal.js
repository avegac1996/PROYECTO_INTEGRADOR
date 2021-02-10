import React, { Component } from "react";

import img1 from "../../resources/img/foto1.jpg";
import img2 from "../../resources/img/foto2.png";
import RadiacionSolar from "../RadiacionSolar/RadiacionSolar";
import RadiacionSolarCommands from "../RadiacionSolar/RadiacionSolarCommands";


class principal extends Component {
    render() {
        return (
            <div class="container">
                <br />
                <h1 class="text-center estilo-fuente">CONTROL ATMOSFERICO DEL DMQ (MEDICIÓN ATMOSFÉRICA, RADIACIÓN SOLAR, ULTRAVIOLETA Y TEMPERATURA)</h1>
                <br />

                <h2 className="text-center">BIENVENIDO</h2>
                <br /><br /><br />

                {/* RADIACION SOLAR */}

                <div className="text-center">
                    <a href="RsCommands" onclick="console.log('The link was clicked.'); return false" className="btn btn-primary btn-lg boton" size="70">
                        Radiacion Solar
                </a>
                    <br /><br /><br />
                </div>
                {/* RADIACION UV */}
                <div className="text-center">
                    <a href="RuvCommands" onclick="console.log('The link was clicked.'); return false" className="btn btn-primary btn-lg boton" size="70">
                        Radiacion UV
                </a>
                    <br /><br /><br />
                </div>
                {/* TEMPERATURA */}

                <div className="text-center">
                    <a href="TempCommands" onclick="console.log('The link was clicked.'); return false" className="btn btn-primary btn-lg boton" size="70">
                        TEMPERATURA
                </a>
                    <br /><br /><br />
                </div>
                {/* AGREGAR USUARIO */}
                <div className="text-center">
                    <a href="adduser" onclick="console.log('The link was clicked.'); return false" className="btn btn-primary btn-lg boton" size="70">
                        AGREGAR USUARIOS
                </a>
                    <br /><br /><br />

                </div>
            </div >






        );
    }
}




export default principal;
