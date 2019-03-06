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


                <label htmlFor="lastname">Lastname</label>
                <input type="text" name={"lastname"} id={"lastname"}
                       onChange={(event) => this.props.onChange(event.currentTarget.value, "lastName")}/>

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

export default RegisterForm