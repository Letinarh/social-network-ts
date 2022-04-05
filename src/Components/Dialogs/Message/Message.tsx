import React from 'react';
import s from "./Message.module.css";
import {messageType} from "../../../Redux/Store";


const Message = (props:messageType) =>{
    return <div className={s.messageItem}>{props.messageText}</div>
}

export default Message;