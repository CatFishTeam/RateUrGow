import React from 'react'
import { Field, reduxForm } from 'redux-form'

let AddGowForm = props => {
    const { handleSubmit } = props
    return <form onSubmit={handleSubmit}>
        <div className="field">
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" component="input" type="text" />
        </div>
    </form>
}

AddGowForm = reduxForm({
    form: 'addGow'
})(AddGowForm)

export default AddGowForm