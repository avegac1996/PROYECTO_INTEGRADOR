import React, { Component } from "react";
import TablesCommands from "../Tables/TablesCommands";

class temperaturaCommands extends Component {
    render() {
        return (
            <>
                <h1>BASE TEMPERATURA</h1>
                {/* VOLVER*/}

                <div className="text-center">
                    <a href="principal" onclick="console.log('The link was clicked.'); return false" className="btn btn-primary btn-lg boton" size="70">
                        VOLVER
                </a>
                    <br /><br /><br />
                </div>
                <TablesCommands url="temperatura" edit="EditTemperatura" delete="DeleTetemperatura" />
            </>
        );
    }
}

export default temperaturaCommands;
