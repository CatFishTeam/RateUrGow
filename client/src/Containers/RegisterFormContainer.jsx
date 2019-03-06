import React, {Component} from 'react'
import RegisterForm from "../components/RegisterForm";
import Toastr from 'toastr'

class RegisterFormContainer extends Component {
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

        fetch("http://127.0.0.1:3000/register",
            {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify(this.state),
                headers: {
                    'Content-Type': "application/json"
                }
            })
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
            <RegisterForm onSubmit={this.handleSubmit} onChange={this.handleChange}/>
        )
    }
}

export default RegisterFormContainer