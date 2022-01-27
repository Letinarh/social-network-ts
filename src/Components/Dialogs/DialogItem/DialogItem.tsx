import React from 'react';
import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import {dialogItemType} from "../../../index";



const DialogItem =(props:dialogItemType) => {
    let path ="/dialogs/" + props.id;
    return (
        <div className={s.dialogItems}>
            <NavLink to={path} className={navData => navData.isActive ?s.activeLink : s.item}>{props.name}</NavLink>
        </div>
    )
}
export default DialogItem;