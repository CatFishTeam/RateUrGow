export const logUser = (token, message) => {
    return {
        type: "LOGGED_USER",
        payload: {
            token,
            message
        }
    }
}

export const login = (user, dispatch) => {
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
        type: "IS_LOGIN",
        payload: {}
    }
}

export const logout = () => {
    return {
        type: "LOGOUT",
        payload: {}
    }
}