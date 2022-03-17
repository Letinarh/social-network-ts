import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {State, StateType, subscribe} from "./Redux/State";
import ReactDOM from "react-dom";
import App from "./App";


let renderEntireTree =(state:StateType)=>{
    ReactDOM.render(
            <App State={state}/>,
        document.getElementById('root')
    );
}
renderEntireTree(State)
subscribe(renderEntireTree)

reportWebVitals();
