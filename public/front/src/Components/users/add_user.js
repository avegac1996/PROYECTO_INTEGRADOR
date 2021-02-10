import React, { Component } from "react";
import TablesCommands from "../Tables/TablesCommands";

class add_user extends Component {
    render() {
        return (
            <>

                <div className="base-container" ref={this.props.containerRef}>
                    <div className="header">Register</div>
                    <div className="content">

                        <div className="text-center">
                            <div className="form-group">
                                <label htmlFor="username">Nombre</label>
                                <br />
                                <input type="text" name="username" placeholder="username" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="username">Apellido</label>
                                <br />
                                <input type="text" name="username" placeholder="username" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <br />
                                <input type="text" name="email" placeholder="email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <br />
                                <input type="text" name="password" placeholder="password" />
                            </div>
                        </div>
                    </div>
                    <br /><br /><br />
                </div>
                <div className="text-center">

                    <a href="adduser" onclick="console.log('The link was clicked.'); return false" className="btn btn-primary btn-lg boton" size="70">
                        Registrar
                </a>
                </div>




            </>
        );
    }
}
export default add_user;
