import React, {Component} from 'react';
import {connect} from "react-redux";
import {login} from "../redux/actions/security";
import LoginForm from "../components/LoginForm";


class LoginFormContainer extends Component {
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.token) {
            this.props.history.push("/")
        }
    }

    state = {
        username: "",
        password: "",
    };

    handleChange = (value, field) => {
        this.setState({
            [field]: value
        })
    };

    handleSubmit = () => {
        this.props.login(this.state);
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

const mapDispatchToProps = (dispatch) => {
    return {
        login: (user) => dispatch(login(user, dispatch))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer)