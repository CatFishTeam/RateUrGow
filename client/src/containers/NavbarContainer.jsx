import React, {Component} from 'react';
import Navbar from "../components/Navbar"
import {connect} from "react-redux";


class NavbarContainer extends Component {

    componentDidMount() {
    }

    render() {
        return (
            <Navbar/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.security.loggedUser
    }
};

export default connect(mapStateToProps)(NavbarContainer)