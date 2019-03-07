import React, {Component} from 'react';
import {connect} from "react-redux";
import {login} from "../redux/actions/security";
import LoginForm from "../components/LoginForm";
import Toastr from 'toastr'


class LoginFormContainer extends Component {
    state = {
        username: "",
        password: "",
    };

    handleChange = (value, field) => {
        this.setState({
            [field]: value
        })
    };

    handleSubmit = (event) => {
        this.props.dispatch(login.this.state, this.props.dispatch);
    };

    render() {
        return (
            <LoginForm onSubmit={this.handleSubmit} onChange={this.handleChange}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.security.loggedUser
    }
};

export default connect(mapStateToProps)(LoginFormContainer)