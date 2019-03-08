import React, {Component} from 'react'
import Slider from "./Slider";
import {Link} from "react-router-dom";
import GlobalRating from '../helper'

const moment = require('moment');

class GowCard extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="column is-one-third card">
                <Link to={/gow/ + this.props.gow._id}>
                    <div className="card-image">
                        <figure className="image">
                            <Slider images={this.props.gow.pictures} loop={true}/>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4">{this.props.gow.firstName} {this.props.gow.lastName}</p>
                                <p className="subtitle is-4">{this.props.gow.nicknames.join(' / ')}</p>
                                <p className="subtitle is-6">{this.props.gow.age} ans</p>
                            </div>
                        </div>

                        <div className="content">
                            <GlobalRating gow={this.props.gow}/>
                            <br/>
                            <time>{moment(this.props.gow.releasedDate).format('DD/MM/YYYY')}</time>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}

export default GowCard