import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StateType} from "./Redux/State";



export let renderEntireTree =(State:StateType)=>{
    ReactDOM.render(
        <React.StrictMode>
            <App State={State}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

