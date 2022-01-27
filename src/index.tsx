import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



//BLL

export type dialogsPropsType = {
    dialogs: Array<dialogItemType>
    messages: Array<messageType>
}
export type dialogItemType = {
    id:number
    name:string
}
export type messageType = {
    id:number
    messageText:string
}

let dialogData:Array<dialogItemType> = [
    {id : 1, name : "Petro" },
    {id : 2, name : "Nikola" },
    {id : 3, name : "Zahar" },
    {id : 4, name : "Kat" },
]
let messageData:Array<messageType> = [
    { id: 1 , messageText : "Bachelor degree" },
    { id: 2 , messageText : "I love Type Script" },
    { id: 3 , messageText : "In't gonna live forever" },
    { id: 4 , messageText : "Just do it" },
]



ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogData} messages={messageData}/>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
