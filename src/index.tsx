import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store, {RootStateType} from "./Redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";


let render = (state: RootStateType) => {
    ReactDOM.render(
        <Provider store={store}>
            <App/> {/*state={state}   dispatch={store.dispatch.bind(store)}*/}
        </Provider>,
        document.getElementById('root')
    );
}
render(store.getState())
store.subscribe(() => render(store.getState()))

reportWebVitals();
