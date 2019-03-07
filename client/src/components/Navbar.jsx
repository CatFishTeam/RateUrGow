import React, {PureComponent} from 'react'
import {Link, Route} from "react-router-dom";
import RegisterFormContainer from "../containers/RegisterFormContainer";
import LoginFormContainer from "../containers/LoginFormContainer"

class Navbar extends PureComponent {

    render() {
        return (
            <div>
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <Link className={"navbar-item"} to="/">
                            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
                        </Link>

                        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
                           data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>

                    <div id="navbarBasicExample" className="navbar-menu">
                        <div className="navbar-start">
                            <Link className={"navbar-item"} to="/">Home</Link>
                        </div>

                        <div className="navbar-end">
                            <Link className={"navbar-item"} to="/login/">Se connecter</Link>
                            <Link className={"navbar-item"} to="/register/">Creer un compte</Link>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar