import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from "redux";
import {Provider} from "react-redux";
import watch from 'redux-watch'

import rootReducer from './redux/reducers/index';

const store = createStore(
    rootReducer,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const rootEl = document.getElementById("root");

let w = watch(store.getState, 'security.loggedUser')
store.subscribe(w((newVal, oldVal, objectPath) => {
    console.log('%s changed from %s to %s', objectPath, oldVal, newVal)
    if(newVal !== oldVal){
        this.props.history.push("/")
        //window.location = "/"
    }
    // admin.name changed from JP to JOE
}))

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    rootEl);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();