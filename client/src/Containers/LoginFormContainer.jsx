import React, {Component} from 'react'
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
        event.preventDefault();
        console.log(this.state);

        fetch("http://127.0.0.1:3000/login_check",
            {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify(this.state),
                headers: {
                    'Content-Type': "application/json"
                }
            })
            .catch(error => console.log(error))
            .then(response => response.json())
            .then(jsonBody => {
                console.log(jsonBody);

                if (jsonBody.error) {
                    Toastr.error(jsonBody.error)
                } else {
                    Toastr.success(jsonBody.success)
                }

            })
            .catch(error => console.log(error))
    };

    render() {
        return (
            <LoginForm onSubmit={this.handleSubmit} onChange={this.handleChange}/>
        )
    }
}

export default LoginFormContainer