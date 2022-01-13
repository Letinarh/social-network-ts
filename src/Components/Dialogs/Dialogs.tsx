import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

//BLL
type dialogItemPropsType = {
    id:number
    name:string
}
let dialogData:Array<dialogItemPropsType> = [
    {id : 1, name : "Petro" },
    {id : 2, name : "Nikola" },
    {id : 3, name : "Zahar" },
    {id : 4, name : "Kat" },
]

type messagePropsType = {
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

const DialogItem =(props:dialogItemPropsType) => {
    let path ="/dialogs/" + props.id;
    return (
        <div className={s.dialogItems}>
            <NavLink to={path} className={navData => navData.isActive ?s.activeLink : s.item}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props:messagePropsType) =>{
    return <div className={s.messageItem}>{props.messageText}</div>
}

let dialogElements = [
    dialogData.map((dialog) => <DialogItem  name ={dialog.name} id={dialog.id}></DialogItem> )
]

let messageElements = [
    messageData.map((m)=>    <Message id={m.id} messageText={m.messageText}></Message>)
]


const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialog}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>

        </div>
    );
};

export default Dialogs;