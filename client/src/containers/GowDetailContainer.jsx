import React, {Component, Fragment} from 'react'
import GowDetail from "../components/GowDetail";


class GowDetailContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            gow: null
        };
    }

    componentDidMount() {
        fetch(`http://127.0.0.1:3000/gow/${this.props.match.params.id}`,
            {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-Type': "application/json"
                }
            })
            .then(response => response.json())
            .then(jsonBody => {
                console.log(jsonBody);
                this.setState({
                    gow: jsonBody.gow
                })

            })
            .catch(error => console.log(error))
    }


    render() {
        return (
            <Fragment>
                {this.state.gow &&
                    <GowDetail gow={this.state.gow}/>
                }
            </Fragment>
        )
    }
}

export default GowDetailContainer