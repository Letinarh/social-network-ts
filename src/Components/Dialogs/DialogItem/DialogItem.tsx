import React from 'react';
import s from "./DialogItem.module.css";
import {NavLink, useLocation} from "react-router-dom";
import {dialogItemType} from "../../../Redux/State";



const DialogItem =(props:dialogItemType) => {
    let path ="/dialogs/" + props.id;
    let url = useLocation();
    console.log(url)
    return (
        <div className={s.dialogItems}>
            <NavLink to={path} className={navData => navData.isActive ?s.activeLink : s.item}>{props.name}</NavLink>
        </div>
    )
}
export default DialogItem;