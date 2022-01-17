import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

//BLL
export type dialogItemPropsType = {
    id:number
    name:string
}
let dialogData:Array<dialogItemPropsType> = [
    {id : 1, name : "Petro" },
    {id : 2, name : "Nikola" },
    {id : 3, name : "Zahar" },
    {id : 4, name : "Kat" },
]

export type messagePropsType = {
    id:number
    messageText:string
}
let messageData:Array<messagePropsType> = [
    { id: 1 , messageText : "Bachelor degree" },
    { id: 2 , messageText : "I love Type Script" },
    { id: 3 , messageText : "In't gonna live forever" },
    { id: 4 , messageText : "Just do it" },
]

//UI
let dialogElements = [
    dialogData.map((dialog) =>
        <DialogItem  name ={dialog.name} id={dialog.id}></DialogItem> )
]
let messageElements = [
        messageData.map((m)=>
        <Message id={m.id} messageText={m.messageText}></Message>)
]

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div >
                {dialogElements}
            </div>
            <div>
                {messageElements}
            </div>

        </div>
    );
};

export default Dialogs;