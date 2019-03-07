export const logUser = (token) => {
    return {
        type: "LOGGED_USER",
        payload: {
            token
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
        .then((response) => {
            response.json()
        })
        .then((data) => {
            console.log(data)
            dispatch(logUser(data.token))
            //localStorage.setItem('token', data.token)
        })
        .catch(error => console.log(error))

    return {
        type: "IS_LOGIN",
        payload: {}
    }
}

export const logout = () => {
    return {
        type: "LOGOUT"
    }
}