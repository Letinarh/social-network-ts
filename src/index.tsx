import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store, {RootStateType} from "./Redux/State";
import ReactDOM from "react-dom";
import App from "./App";


let render=(state:RootStateType)=>{
    ReactDOM.render(
            <App state={state}
                 addPost={store.addPost.bind(store)}
                 changeTextArea={store.changeTextArea.bind(store)}
            />,
        document.getElementById('root')
    );
}
render(store.getState())
store.subscribe(()=>render(store.getState()))

reportWebVitals();
