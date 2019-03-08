import React, {Component} from 'react'
import Slider from "./Slider";
import ReactStars from "react-stars";
import GlobalRating from '../helper'

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
                <ReactStars
                    count={5}
                    value={props.attributes.boobsRating}
                    size={24}
                />
            </li>
            <li>
                <img src={`/images/butt.svg`} alt=""/>
                <p className="attribute-label">{props.attributes.buttSize}</p>
                <br/>
                <ReactStars
                    count={5}
                    value={props.attributes.buttRating}
                    size={24}
                />
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
                <ReactStars
                    count={5}
                    value={props.attributes[key]}
                    size={24}
                />
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
                <ReactStars
                    count={5}
                    value={props.attributes[key]}
                    size={24}
                />
            </li>
        )
    });


    return (
        <ul>
            {list}
        </ul>
    )
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