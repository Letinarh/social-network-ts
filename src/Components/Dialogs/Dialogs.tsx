import React from 'react';
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {dialogsPropsType} from "../../index";


const Dialogs= (props:dialogsPropsType) => {
    let dialogElements = [
        props.dialogs.map((dialog) =>
            <DialogItem  name ={dialog.name} id={dialog.id}></DialogItem> )
    ]
    let messageElements = [
        props.messages.map((m)=>
            <Message id={m.id} messageText={m.messageText}></Message>)
    ]

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