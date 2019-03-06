import React, {PureComponent} from 'react'

class RegisterForm extends PureComponent {
    render() {
        return (
            <form onSubmit={(event) => this.props.onSubmit(event)}>
                <div className="field">
                    <label className="label" htmlFor="firstname">Firstname</label>
                    <div className="control">
                        <input type="text" name={"firstname"} id={"firstname"}
                               onChange={(event) => this.props.onChange(event.currentTarget.value, "firstName")}/>
                    </div>
                </div>


                <div className="field">
                    <label className="label" htmlFor="lastname">Lastname</label>
                    <div className="control">
                        <input type="text" name={"lastname"} id={"lastname"}
                               onChange={(event) => this.props.onChange(event.currentTarget.value, "lastName")}/>
                    </div>
                </div>

                <div className="field">
                    <label className="label" htmlFor="username">Username</label>
                    <div className="control">
                        <input type="text" name={"username"} id={"username"}
                               onChange={(event) => this.props.onChange(event.currentTarget.value, "username")}/>
                    </div>
                </div>

                <div className="field">
                    <label className="label" htmlFor="password">Password</label>
                    <div className="control">
                        <input type="password" name={"password"} id={"password"}
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

export default RegisterForm