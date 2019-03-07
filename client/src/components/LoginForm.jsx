import React, {PureComponent} from 'react'

class LoginForm extends PureComponent {
    render() {
        return (
            <form onSubmit={(event) => {
                event.preventDefault();
                this.props.onSubmit()}}
            >
                <div className="field">
                    <label className="label" htmlFor="username">Username</label>
                    <div className="control">
                        <input className={"input"} type="text" name={"username"} id={"username"}
                               onChange={(event) => this.props.onChange(event.currentTarget.value, "username")}/>
                    </div>
                </div>

                <div className="field">
                    <label className="label" htmlFor="password">Password</label>
                    <div className="control">
                        <input className={"input"} type="password" name={"password"} id={"password"}
                               onChange={(event) => this.props.onChange(event.currentTarget.value, "password")}/>
                    </div>
                </div>

                <div className="field">
                    <div className="control">
                        <input className="button is-link" type={"submit"}/>
                    </div>
                </div>
            </form>
        )
    }
}

export default LoginForm