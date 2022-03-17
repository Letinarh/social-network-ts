import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/State";
import ReactDOM from "react-dom";
import App from "./App";


let render=()=>{
    ReactDOM.render(
            <App store={store}/>,
        document.getElementById('root')
    );
}
render()
store.subscribe(render)

reportWebVitals();
