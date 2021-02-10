import React, { Component } from "react";
import TablesCommands from "../Tables/TablesCommands";

class temperaturaCommands extends Component {
    render() {
        return (
            <>
                <h1>Temperatura Commands</h1>
                <TablesCommands url="temperatura" edit="EditTemperatura" delete="DeleTetemperatura" />
            </>
        );
    }
}

export default temperaturaCommands;
