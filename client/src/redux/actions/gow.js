export const addGow = (gow, dispatch) => {
    console.log(gow)
    return {
        type: "ADD_GOW",
        payload: {
            gow,
            //message
        }
    }
}

export const login = (user, dispatch) => {
    /*
    fetch("http://127.0.0.1:3000/login_check",
        {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': "application/json"
            }
        })
        .then((response) => response.json())
        .then(data => dispatch(logUser(data.token, data.message)))
        .catch(error => console.log(error))

    return {
        type: "GOW_",
        payload: {}
    }
    */
}

export const removeGow = (gow) => {
    return {
        type: "LOGOUT",
        payload: {}
    }
}