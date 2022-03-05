import React from 'react';
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {dialogItemType, messageType} from "../../Redux/State";

type DialogsPropsType = {
    dialogsData: Array<dialogItemType>
    messageData: Array<messageType>
}

const Dialogs = (props: DialogsPropsType) => {
    let dialogElements = [
        props.dialogsData.map((dialog) =>
            <DialogItem name={dialog.name} id={dialog.id}></DialogItem>)
    ]
    let messageElements = [
        props.messageData.map((m) =>
            <Message id={m.id} messageText={m.messageText}></Message>)
    ]

    return (
        <div className={s.dialogs}>

                <div>
                    {dialogElements}
                </div>
            <div>
                {messageElements}
            </div>

        </div>
    );
};

export default Dialogs;