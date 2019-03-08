import React from 'react';
import AddGowForm from '../components/AddGowForm'
import Toastr from 'toastr'


class AddGowFormContainer extends React.Component {

    submit = values => {
        fetch("http://127.0.0.1:3000/gow/add",
            {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(values)
            })
            .then(response => response.json())
            .then(jsonBody => {
                console.log(jsonBody)
                Toastr[Object.keys(jsonBody.message)[0]](Object.values(jsonBody.message)[0])
                if(jsonBody.message.success){
                    this.props.history.push('/')
                }
            })
            .catch(error => console.log(error))
    }

    render() {
        return <AddGowForm onSubmit={this.submit} />
    }
}

export default AddGowFormContainer