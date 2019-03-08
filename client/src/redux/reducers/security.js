import Toastr from "toastr";

const reducer = (state = {
    loggedUser: ''
}, action) => {
    switch(action.type) {
        case 'LOGGED_USER':
            Toastr[Object.keys(action.payload.message)[0]](Object.values(action.payload.message)[0])
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