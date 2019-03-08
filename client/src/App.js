import React, {Fragment} from 'react';
import './style/sass/main.sass';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import GowsContainer from "./containers/GowsContainer";
import NavbarContainer from "./containers/NavbarContainer";
import LoginFormContainer from "./containers/LoginFormContainer";
import RegisterFormContainer from "./containers/RegisterFormContainer";
import GowDetailContainer from "./containers/GowDetailContainer";
import AddGowFormContainer from "./containers/AddGowFormContainer"


function NoMatch() {
    return (
        <Fragment>
            <h1 className="title is-1 text-align-center">Oups... La page est introuvable</h1>
            <img className="block-align-center" src="/images/404.png" alt=""/>
        </Fragment>
    )
}

function PrivateRoute({component: Component, ...rest}) {
    return (
        <Route
            {...rest}
            render={props =>
                localStorage.getItem('token') ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: {from: props.location}
                        }}
                    />
                )
            }
        />
    );
}

function Logout(props) {
    localStorage.clear();
    props.history.push('/');
    return ""
}


function AppRouter() {
    return (
        <Router>
            <React.Fragment>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
                      integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
                      crossOrigin="anonymous"/>
                <NavbarContainer/>
                <div className="container">
                    <Switch>
                        <Route path="/" exact component={GowsContainer}/>
                        <Route path="/login/" component={LoginFormContainer}/>
                        <Route path="/logout/" component={Logout}/>
                        <Route path="/register/" component={RegisterFormContainer}/>
                        <PrivateRoute path="/gow/add" component={AddGowFormContainer}/>
                        <Route path="/gow/:id" component={GowDetailContainer}/>
                        <Route component={NoMatch}/>
                    </Switch>
                </div>
            </React.Fragment>
        </Router>);
}


export default AppRouter;
