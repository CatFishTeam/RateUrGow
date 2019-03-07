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

        <FieldFileInput />
        <button class="button is-primary" type="submit" disabled={pristine || submitting}>
            Submit
        </button>
        <button class="button is-light" type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
        </button>
    </form>
}

AddGowForm = reduxForm({
    form: 'addGow'
})(AddGowForm)

export default AddGowForm