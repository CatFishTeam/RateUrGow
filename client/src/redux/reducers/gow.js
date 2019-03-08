import Toastr from "toastr";

const reducer = ( {}, action) => {
    switch(action.type) {
        case 'ADD_GOW':
            Toastr[Object.keys(action.payload.message)[0]](Object.values(action.payload.message)[0])
            return {
                ...state,
            }
        case 'REMOVE_GOW': {
            Toastr[Object.keys(action.payload.message)[0]](Object.values(action.payload.message)[0])
            return {
                ...state,
            }
        }
        default:
            return state;
    }
}

export default reducer;