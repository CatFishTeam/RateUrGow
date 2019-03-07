import React from 'react'
import {Field, reduxForm} from 'redux-form'
import FieldFileInput from "./FieldFileInput";
import {RenderRatingField} from "./RenderRatingField";

let AddGowForm = props => {
    const {handleSubmit, pristine, reset, submitting} = props
    return <form onSubmit={handleSubmit}>
        <div className="field">
            <label htmlFor="firstName">First Name</label>
            <Field className={"input"} name="firstName" component="input" type="text"/>
        </div>

        <div className="field">
            <label htmlFor="lastName">Last Name</label>
            <Field className={"input"} name="lastName" component="input" type="text"/>
        </div>

        <div className="field">
            <label htmlFor="age">Age</label>
            <Field className={"input"} name="age" component="input" type="number"/>
        </div>

        <div className="field">
            <label htmlFor="nicknames">Nicknames</label>
            <Field className={"input"} name="nicknames" component="input" type="text"/>
        </div>

        <div className={"gow-container"}>
            <div className="columns">
                <div className="column">
                    <div className="columns">
                        <p className="title is-4">Physique</p>
                    </div>
                    <div className="list-icons">
                        <div className="field">
                            <label htmlFor="height">Taille (cm)</label>
                            <Field className={"input"} name="height" component="input" type="number"/>
                        </div>
                        <div className="field">
                            <label htmlFor="weight">Poids (kg)</label>
                            <Field className={"input"} name="weight" component="input" type="number"/>
                        </div>
                        <div className="field">
                            <label htmlFor="eyesColor">Couleur des yeux</label>
                            <Field className={"input"} name="eyesColor" component="input" type="text"/>
                        </div>
                        <div className="field">
                            <label htmlFor="boobsSize">Poitrine</label>
                            <Field className={"input"} name="boobsSize" component="input" type="text"/>
                        </div>
                        <Field
                            name="myStars"
                            initialStars={0}
                            starCount={5}
                            type="number"
                            starSize={24}
                            topTxt={'Boobs Rating'}
                            component={RenderRatingField} />
                        <div className="field">
                            <label htmlFor="buttSize">Fesses</label>
                            <Field className={"input"} name="buttSize" component="input" type="text"/>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="columns">
                        <p className="title is-4">Competences</p>
                    </div>
                    <div className="list-icons">
                    </div>
                </div>
                <div className="column">
                    <div className="columns">
                        <p className="title is-4">Pratiques</p>
                    </div>
                    <div className="list-icons">
                    </div>
                </div>
            </div>

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