import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {ToggleButton} from "./components/ToggleButton";
import LoginFormContainer from "./Containers/LoginFormContainer";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { theme: 'dark' };
    }

    handleToggle = () => {
        const newTheme = this.state.theme === 'dark' ? 'light' : 'dark'

        this.setState({theme : newTheme})
    }

  render() {
    return (
      <LoginFormContainer/>
    );
  }
}

export default App;
