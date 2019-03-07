import React, {Component} from 'react'
import LoginForm from "../components/LoginForm";
import Toastr from 'toastr'
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
            <div>
                <h1>Gows :</h1>
                <div className="columns is-mobile">
                    {this.state.gows.length > 0 &&
                        this.state.gows.map(gow => {
                            return <GowCard key={gow._id} gow={gow}/>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default GowsContainer