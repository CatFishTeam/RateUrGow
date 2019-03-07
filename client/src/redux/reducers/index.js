import securityReducer from './security'
import {combineReducers} from "redux"
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    security: securityReducer,
    form: formReducer
})