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
            <div className="control">
                <Field className={"input"} name="nicknames" component="input" type="text"/>
            </div>
            <p className="help">Chaque surnom doit etre separe avec une virgule</p>
        </div>

        <div className="field">
            <label htmlFor="releasedDate">Date de rupture</label>
            <Field className={"input"} name="releasedDate" component="input" type="date"/>
            <p className="help">Chaque surnom doit etre separe avec une virgule</p>
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
                            <div className="control has-icons-left">
                                <Field className={"input"} name="height" component="input" type="number"/>
                                <span className="icon is-small is-left">
                                    <img src={`/images/height.svg`} alt=""/>
                                </span>
                            </div>
                        </div>
                        <div className="field">
                            <label htmlFor="weight">Poids (kg)</label>
                            <div className="control has-icons-left">
                                <Field className={"input"} name="weight" component="input" type="number"/>
                                <span className="icon is-small is-left">
                                    <img src={`/images/weight.svg`} alt=""/>
                                </span>
                            </div>
                        </div>
                        <div className="field">
                            <label htmlFor="eyesColor">Couleur des yeux</label>
                            <div className="control has-icons-left">
                                <Field className={"input"} name="eyesColor" component="input" type="text"/>
                                <span className="icon is-small is-left">
                                    <img src={`/images/eye.svg`} alt=""/>
                                </span>
                            </div>
                        </div>
                        <div className="field">
                            <label htmlFor="boobsSize">Poitrine</label>
                            <div className="control has-icons-left">
                                <Field className={"input"} name="boobsSize" component="input" type="text"/>
                                <span className="icon is-small is-left">
                                    <img src={`/images/boobs.svg`} alt=""/>
                                </span>
                            </div>
                        </div>
                        <Field
                            name="boobsRating"
                            initialStars={0}
                            starCount={5}
                            type="number"
                            starSize={24}
                            topTxt={'Note poitrine'}
                            component={RenderRatingField}/>
                        <div className="field">
                            <label htmlFor="buttSize">Fesses</label>
                            <div className="control has-icons-left">
                                <Field className={"input"} name="buttSize" component="input" type="number"/>
                                <span className="icon is-small is-left">
                                    <img src={`/images/butt.svg`} alt=""/>
                                </span>
                            </div>
                        </div>
                        <Field
                            name="buttRating"
                            initialStars={0}
                            starCount={5}
                            type="number"
                            starSize={24}
                            topTxt={'Note fesses'}
                            component={RenderRatingField}/>
                    </div>
                </div>
                <div className="column">
                    <div className="columns">
                        <p className="title is-4">Competences</p>
                    </div>
                    <div className="list-icons">
                        <ul>
                            <li>
                                <img src={`/images/cooking.svg`} alt=""/>
                                <Field
                                    name="cooking"
                                    initialStars={0}
                                    starCount={5}
                                    type="number"
                                    starSize={24}
                                    topTxt={'Cuisine'}
                                    component={RenderRatingField}/>
                            </li>
                            <li>
                                <img src={`/images/cleaning.svg`} alt=""/>
                                <Field
                                    name="cleaning"
                                    initialStars={0}
                                    starCount={5}
                                    type="number"
                                    starSize={24}
                                    topTxt={'Menage'}
                                    component={RenderRatingField}/>
                            </li>
                            <li>
                                <img src={`/images/ironing.svg`} alt=""/>
                                <Field
                                    name="ironing"
                                    initialStars={0}
                                    starCount={5}
                                    type="number"
                                    starSize={24}
                                    topTxt={'Repassage'}
                                    component={RenderRatingField}/>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="column">
                    <div className="columns">
                        <p className="title is-4">Pratiques</p>
                    </div>
                    <div className="list-icons">
                        <ul>
                            <li>
                                <img src={`/images/blowjob.png`} alt=""/>
                                <Field
                                    name="blowjob"
                                    initialStars={0}
                                    starCount={5}
                                    type="number"
                                    starSize={24}
                                    topTxt={'Fellation'}
                                    component={RenderRatingField}/>
                            </li>
                            <li>
                                <img src={`/images/doggyStyle.png`} alt=""/>
                                <Field
                                    name="doggyStyle"
                                    initialStars={0}
                                    starCount={5}
                                    type="number"
                                    starSize={24}
                                    topTxt={'Levrette'}
                                    component={RenderRatingField}/>
                            </li>
                            <li>
                                <img src={`/images/cowgirl.png`} alt=""/>
                                <Field
                                    name="cowgirl"
                                    initialStars={0}
                                    starCount={5}
                                    type="number"
                                    starSize={24}
                                    topTxt={'Andromaque'}
                                    component={RenderRatingField}/>
                            </li>
                            <li>
                                <img src={`/images/missionary.png`} alt=""/>
                                <Field
                                    name="missionary"
                                    initialStars={0}
                                    starCount={5}
                                    type="number"
                                    starSize={24}
                                    topTxt={'Missionaire'}
                                    component={RenderRatingField}/>
                            </li>
                            <li>
                                <img src={`/images/spoon.png`} alt=""/>
                                <Field
                                    name="spoon"
                                    initialStars={0}
                                    starCount={5}
                                    type="number"
                                    starSize={24}
                                    topTxt={'Cuillere'}
                                    component={RenderRatingField}/>
                            </li>
                            <li>
                                <img src={`/images/sixnine.png`} alt=""/>
                                <Field
                                    name="sixnine"
                                    initialStars={0}
                                    starCount={5}
                                    type="number"
                                    starSize={24}
                                    topTxt={'69'}
                                    component={RenderRatingField}/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>

        <Field component={FieldFileInput} name={"images"}/>

        <div className="field is-grouped">
            <div className="control">
                <button className="button is-primary is-link" type="submit" disabled={pristine || submitting}>Submit
                </button>
            </div>
            <div className="control">
                <button className="button is-light is-text" type="button" disabled={pristine || submitting}
                        onClick={reset}>Clear Values
                </button>
            </div>
        </div>
    </form>
}

AddGowForm = reduxForm({
    form: 'addGow'
})(AddGowForm)

export default AddGowForm