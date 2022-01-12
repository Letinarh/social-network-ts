import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";


type dialogItemPropsType = {
    id:string
    name:string
}
const DialogItem =(props:dialogItemPropsType) => {
    let path ="/dialogs/" + props.id;
    return (
        <div className={s.dialogItems}>
            <NavLink to={path} className={navData => navData.isActive ?s.activeLink : s.item}>{props.name}</NavLink>
        </div>
    )
}
type messagePropsType = {
    messageText:string
}
const Message = (props:messagePropsType) =>{
    return <div className={s.messageItem}>{props.messageText}</div>
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialog}>
                <DialogItem  name="Petro" id="1"></DialogItem>
                <DialogItem  name="Nikola" id="2"></DialogItem>
                <DialogItem  name="Zahar" id="3"></DialogItem>
                <DialogItem  name="Kat" id="4"></DialogItem>
            </div>
            <div className={s.messages}>
                <Message messageText={"Hi"}></Message>
                <Message messageText={"Bachelor degree"}></Message>
                <Message messageText={"I love Type Script"}></Message>
                <Message messageText={"Bye"}></Message>
            </div>

        </div>
    );
};

export default Dialogs;