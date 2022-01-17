import React from 'react';
import s from "./Message.module.css";
import {messagePropsType} from "../Dialogs";


const Message = (props:messagePropsType) =>{
    return <div className={s.messageItem}>{props.messageText}</div>
}

export default Message;