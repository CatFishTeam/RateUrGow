import React from 'react';
import AddGowForm from '../components/AddGowForm'
import Toastr from 'toastr'


class AddGowFormContainer extends React.Component {

    submit = values => {
        console.log(values)
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
                console.log(jsonBody);

                if (jsonBody.error) {
                    Toastr.error(jsonBody.error)
                } else {
                    Toastr.success(jsonBody.success)
                }
            })
            .catch(error => console.log(error))
    }

    render() {
        return <AddGowForm onSubmit={this.submit} />
    }
}

export default AddGowFormContainer