import React from 'react'
import ReactStars from "react-stars"

export default function GlobalRating(props) {
    let calc = 0;
    let coef = 0;

    console.log(props)

    calc += (props.gow.physical.boobsRating + props.gow.physical.buttRating) * 2
    coef += 2*2

    Object.keys(props.gow.skills).forEach(function(key) {
        calc += props.gow.skills[key]
        coef += 1
    });

    Object.keys(props.gow.sexualPractices).forEach(function(key) {
        calc += props.gow.sexualPractices[key] * 3
        coef += 3
    });

    return (
        <ReactStars
            className="inline-flex"
            count={5}
            value={calc/coef}
            size={24}
        />
    )
}