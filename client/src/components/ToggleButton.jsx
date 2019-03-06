import React, {Component, PureComponent} from 'react'

const ToggleButton = (props) => {
    return (
        <button onClick={props.onClick}> Toggle theme currently : {this.props.theme}</button>
        )
}



export default ToggleButton