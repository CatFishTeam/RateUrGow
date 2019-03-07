import React from 'react';
import './style/sass/main.sass';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import GowsContainer from "./containers/GowsContainer";
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
                    <Route path="/" exact component={Index}/>
                    <Route path="/login/" component={LoginFormContainer}/>
                    <Route path="/register/" component={RegisterFormContainer}/>
                    <Route path="/gows/" component={GowsContainer}/>
                </div>
            </React.Fragment>
        </Router>);
}

export default AppRouter;
