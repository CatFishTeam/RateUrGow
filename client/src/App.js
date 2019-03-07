import React, {Fragment} from 'react';
import './style/sass/main.sass';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import GowsContainer from "./containers/GowsContainer";
import NavbarContainer from "./containers/NavbarContainer";
import LoginFormContainer from "./containers/LoginFormContainer";
import RegisterFormContainer from "./containers/RegisterFormContainer";
import GowDetailContainer from "./containers/GowDetailContainer";
import AddGowFormContainer from "./containers/AddGowFormContainer"


function Index() {
    return <h2>Home</h2>;
}

function NoMatch() {
    return (
        <Fragment>
            <h1 className="title is-1" style={{'text-align': 'center'}}>Oups... La page est introuvable</h1>
            <img style={{margin: "auto", display: "block"}} src="/images/404.png" alt=""/>
        </Fragment>
    )
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
                    <Route path="/gow/:id" component={GowDetailContainer}/>
                    <Route path="/gow/add" component={AddGowFormContainer}/>
                    <Route component={NoMatch} />
                </div>
            </React.Fragment>
        </Router>);
}

export default AppRouter;
