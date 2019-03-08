import React from 'react';
import AddGowForm from '../components/AddGowForm'
import {connect} from "react-redux";
import {addGow} from "../redux/actions/gow";


class AddGowFormContainer extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        age: "",
        nicknames : "",
        releasedDate: "",
        pictures: "",

        height: "",
        weight: "",
        eyesColor: "",
        boobsSize: "",
        boobsRating: "",
        buttSize: "",
        buttRating: "",

        cooking: "",
        cleaning: "",
        ironing: "",

        blowjob: "",
        doggyStyle: "",
        cowgirl: "",
        missionary: "",
        spoon: "",
        sixnine: "",
    }


    handleChange = (value, field) => {
        this.setState({
            [field]: value
        })
    };

    handleSubmit = () => {
        this.props.addGow(this.state)
    }

    render() {
        return <AddGowForm onSubmit={this.handleSubmit} onChange={this.handleChange}/>
    }
}

const mapStateToProps = (state) => {
    return {
        gow: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addGow: (gow) => dispatch(addGow(gow, dispatch))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddGowFormContainer)