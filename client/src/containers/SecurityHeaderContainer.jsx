import React, {Component} from 'react'
import {connect} from "react-redux"

class SecurityHeaderContainer extends Component {
    render() {
        return <h1>{this.props.token}</h1>
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.security.loggedUser
    }
}

export default connect(mapStateToProps)(SecurityContainer)