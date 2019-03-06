import React, { Component, Fragment } from 'react';
import './style/sass/main.sass';
import LoginFormContainer from "./Containers/LoginFormContainer";
import RegisterFormContainer from "./Containers/RegisterFormContainer";

class App extends Component {
  render() {
    return (
        <Fragment>
            <RegisterFormContainer/>
            <LoginFormContainer/>
        </Fragment>
    );
  }
}

export default App;
