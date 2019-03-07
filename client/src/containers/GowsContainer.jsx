import React, {Component, Fragment} from 'react'
import GowCard from "../components/GowCard";


class GowsContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            gows: []
        };
    }

    componentDidMount() {
        fetch("http://127.0.0.1:3000/gows",
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
                    gows: jsonBody.gows
                })

            })
            .catch(error => console.log(error))
    }


    render() {
        return (
            <Fragment>
                <div className="columns">
                    <h1 className="column title">Gows :</h1>
                </div>
                <div className="columns is-multiline">
                    {this.state.gows.length > 0 &&
                    this.state.gows.map(gow => {
                        return <GowCard key={gow._id} gow={gow}/>
                    })
                    }
                </div>
            </Fragment>
        )
    }
}

export default GowsContainer