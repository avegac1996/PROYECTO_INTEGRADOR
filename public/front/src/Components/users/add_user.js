import React, { Component } from "react";
import TablesCommands from "../Tables/TablesCommands";

class add_user extends Component {
    render() {
        return (
            <>

                <div className="base-container" ref={this.props.containerRef}>
                    <div className="header">Register</div>
                    <div className="content">

                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="username">Nombre</label>
                                <input type="text" name="username" placeholder="username" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="username">Apellido</label>
                                <input type="text" name="username" placeholder="username" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="text" name="email" placeholder="email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="text" name="password" placeholder="password" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button type="button" className="btn">
                        Register
                 </button>
                </div>




            </>
        );
    }
}
export default add_user;
