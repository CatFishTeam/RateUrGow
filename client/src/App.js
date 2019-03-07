import React, {Fragment} from 'react';
import './style/sass/main.sass';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
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
            <h1 className="title is-1 text-align-center">Oups... La page est introuvable</h1>
            <img className="block-align-center" src="/images/404.png" alt=""/>
        </Fragment>
    )
}

function AppRouter() {
    return (
        <Router>
            <React.Fragment>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
                      integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous"/>
                <NavbarContainer/>
                <div className="container">
                    <Switch>
                        <Route path="/" exact component={Index}/>
                        <Route path="/login/" component={LoginFormContainer}/>
                        <Route path="/register/" component={RegisterFormContainer}/>
                        <Route path="/gows/" component={GowsContainer}/>
                        <Route path="/gow/add" component={AddGowFormContainer}/>
                        <Route path="/gow/:id" component={GowDetailContainer}/>
                        <Route component={NoMatch}/>
                    </Switch>
                </div>
            </React.Fragment>
        </Router>);
}

export default AppRouter;
