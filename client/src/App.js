import React from 'react';
import './style/sass/main.sass';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import NavbarContainer from "./containers/NavbarContainer";
import LoginFormContainer from "./containers/LoginFormContainer";
import RegisterFormContainer from "./containers/RegisterFormContainer";

function Index() {
    return <h2>Home</h2>;
}

function AppRouter() {
    return (
        <Router>
            <React.Fragment>
                <NavbarContainer/>
                <div className="container">
                    <Route path="/login/" component={LoginFormContainer}/>
                    <Route path="/register/" component={RegisterFormContainer}/>
                </div>
            </React.Fragment>
        </Router>);
}

export default AppRouter;
