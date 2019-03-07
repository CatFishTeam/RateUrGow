import React, {Component} from "react";
import ReactStars from "react-stars";

export class RenderRatingField extends Component {
    render() {
        const {
            label,
            name,
            topTxt,
            starCount,
            input: { value, onChange },
            starSize,
            starsColor,
            meta: { touched, error }
        } = this.props;

        return (
            <div>
                <label>{label}</label>
                <div>
                    <label>
                        <div className="col-lg-12">
                            <h1>{topTxt}</h1>
                            <ReactStars
                                count={starCount}
                                value={value === "" ? this.props.initialStars : value}
                                onChange={onChange}
                                size={starSize}
                                color2={starsColor}
                            />
                        </div>
                        {touched && error && <span>{error}</span>}
                    </label>
                </div>
            </div>
        );
    }
}