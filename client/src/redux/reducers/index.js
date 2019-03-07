import securityReducer from './security'
import {combineReducers} from "redux"

export default combineReducers({
    security: securityReducer
})