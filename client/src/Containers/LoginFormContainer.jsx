import React, {Component, PureComponent} from 'react'
import LoginForm from "../components/LoginForm";

class LoginFormContainer extends Component {
    state = {
        username: "",
        password: "",
    }

    handleChange = (value, field) => {
        this.setState({
            [field]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)

        fetch("/login_check",
            {
                body: this.state,
                method: "post"
            })
            .then((response) => {
                console.log(response)
            })
    }

    render() {
        return (
            <LoginForm onSubmit={this.handleSubmit} onChange={this.handleChange}/>
        )
    }
}

export default LoginFormContainer