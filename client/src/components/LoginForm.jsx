import React, {Component, PureComponent} from 'react'

class LoginForm extends PureComponent {
    render() {
        return (
            <form onSubmit={(event) => this.props.onSubmit(event)}>
                <label htmlFor="username">Username</label>
                <input type="text" name={"username"} id={"username"}
                       onChange={(event) => this.props.onChange(event.currentTarget.value, "username")}/>

                <label htmlFor="password">Password</label>
                <input type="password" name={"password"} id={"password"}
                       onChange={(event) => this.props.onChange(event.currentTarget.value, "password")}/>
                <input type={"submit"}/>
            </form>
        )
    }
}

export default LoginForm