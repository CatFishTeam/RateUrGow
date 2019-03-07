import React from 'react'
import { Field, reduxForm } from 'redux-form'
import FieldFileInput from "./FieldFileInput";

let AddGowForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props
    return <form onSubmit={handleSubmit}>
        <div className="field">
            <label htmlFor="firstName">First Name</label>
            <Field className={"input"} name="firstName" component="input" type="text" />
        </div>

        <Field component={FieldFileInput} name={"images"}/>

        <div className="field is-grouped">
            <div className="control">
                <button className="button is-primary is-link" type="submit" disabled={pristine || submitting}>Submit</button>
            </div>
            <div className="control">
                <button className="button is-light is-text" type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
            </div>
        </div>
    </form>
}

AddGowForm = reduxForm({
    form: 'addGow'
})(AddGowForm)

export default AddGowForm