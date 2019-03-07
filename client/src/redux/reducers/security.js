const reducer = (state = {
    loggedUser: ''
}, action) => {
    switch(action.type) {
        case 'LOGGED_USER':
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                loggedUser: action.payload.token
        }
        case 'LOGOUT': {
            return {
                ...state,
                loggedUser: ''
            }
        }
        default:
            return state;
    }
}

export default reducer;