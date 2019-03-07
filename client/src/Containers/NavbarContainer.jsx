import React, {Component} from 'react';
import {connect} from "react-redux";
import Navbar from "../components/Navbar"


class NavbarContainer extends Component {

    render() {
        return (
            <Navbar/>
        )
    }
}

export default NavbarContainer