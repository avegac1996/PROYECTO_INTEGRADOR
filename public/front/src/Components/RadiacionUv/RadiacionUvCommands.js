import React, { Component } from "react";
import TablesCommands from "../Tables/TablesCommands";

class RadiacionUvCommands extends Component {
    render() {
        return (
            <>
                <h1>Radiacion UV Commands</h1>
                <TablesCommands url="RadiacionSolar" edit="EditRadiacionUv" delete="DeleteRadiacionUv" />
            </>
        );
    }
}

export default RadiacionUvCommands;
