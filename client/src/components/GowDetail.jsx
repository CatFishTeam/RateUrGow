import React, {Component} from 'react'
import Slider from "./Slider";

function PhysicalDetails(props) {
    return (
        <ul>
            <li>
                <img src={`/images/height.svg`} alt=""/>
                <p className="attribute-label">{props.attributes.height} cm</p>
            </li>
            <li>
                <img src={`/images/weight.svg`} alt=""/>
                <p className="attribute-label">{props.attributes.weight} kg</p>
            </li>
            <li>
                <img src={`/images/eye.svg`} alt=""/>
                <p className="attribute-label">{props.attributes.eyesColor}</p>
            </li>
            <li>
                <img src={`/images/boobs.svg`} alt=""/>
                <p className="attribute-label">{props.attributes.boobsSize}</p>
                <br/>
                <p className="rating">{props.attributes.boobsRating}/10</p>
            </li>
            <li>
                <img src={`/images/butt.svg`} alt=""/>
                <p className="attribute-label">{props.attributes.buttSize}</p>
                <br/>
                <p className="rating">{props.attributes.buttRating}/10</p>
            </li>
        </ul>
    )
}

function Skills(props) {
    const list = []

    Object.keys(props.attributes).forEach(function(key) {
        list.push(
            <li>
                <img src={`/images/${key}.svg`} alt=""/>
                <p className="rating">{props.attributes[key]}/10</p>
            </li>
        )
    });


    return (
        <ul>
            {list}
        </ul>
    )
}

function SexualPractices(props) {
    const list = []

    Object.keys(props.attributes).forEach(function(key) {
        list.push(
            <li>
                <img src={`/images/${key}.png`} alt=""/>
                <p className="rating">{props.attributes[key]}/10</p>
            </li>
        )
    });


    return (
        <ul>
            {list}
        </ul>
    )
}

function GlobalRating(props) {
    let calc = 0;

    console.log(props)

    calc += (props.gow.physical.boobsRating + props.gow.physical.buttRating) * 2

    Object.keys(props.gow.skills).forEach(function(key) {
        calc += props.gow.skills[key]
    });

    Object.keys(props.gow.sexualPractices).forEach(function(key) {
        calc += props.gow.sexualPractices[key] * 3
    });

    return <p>{(calc/11).toFixed(2)}/10</p>
}

class GowDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={"gow-container"}>
                <div className="image">
                    <Slider images={this.props.gow.pictures}/>
                </div>
                <div className="main columns">
                    <div className="column">
                        <p className="title is-4">{this.props.gow.firstName} {this.props.gow.lastName}</p>
                        <p className="subtitle is-4">{this.props.gow.nicknames.join(' / ')}</p>
                    </div>
                    <div className="column">
                        <p className="subtitle is-6 text-align-right">Age : {this.props.gow.age} ans</p>
                        <p className="subtitle is-6 text-align-right">Note globale : <GlobalRating gow={this.props.gow}/></p>
                    </div>
                </div>

                <div className="columns">
                    <div className="column">
                        <div className="columns">
                            <p className="title is-4">Physique</p>
                        </div>
                        <div className="list-icons">
                            <PhysicalDetails attributes={this.props.gow.physical}/>
                        </div>
                    </div>
                    <div className="column">
                        <div className="columns">
                            <p className="title is-4">Competences</p>
                        </div>
                        <div className="list-icons">
                            <Skills attributes={this.props.gow.skills}/>
                        </div>
                    </div>
                    <div className="column">
                        <div className="columns">
                            <p className="title is-4">Pratiques</p>
                        </div>
                        <div className="list-icons">
                            <SexualPractices attributes={this.props.gow.sexualPractices}/>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default GowDetail