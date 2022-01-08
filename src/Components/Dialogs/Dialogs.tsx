import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialog}>
                <div className={s.dialogItems}>
                    <NavLink to="/dialogs/1" className={navData => navData.isActive ?s.activeLink : s.item}>Vasya</NavLink>
                </div>
                <div className={s.dialogItems}>
                    <NavLink to="/dialogs/2" className={navData => navData.isActive ?s.activeLink : s.item}>Petya</NavLink>
                </div>
                <div className={s.dialogItems}>
                    <NavLink to="/dialogs/3" className={navData => navData.isActive ?s.activeLink : s.item}>Kolya</NavLink>
                </div>
                <div className={s.dialogItems}>
                    <NavLink to="/dialogs/4" className={navData => navData.isActive ?s.activeLink : s.item}>Serg</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.messadeItem}>Hello</div>
                <div className={s.messadeItem}>How aea you</div>
                <div className={s.messadeItem}></div>
                <div className={s.messadeItem}></div>
                <div className={s.messadeItem}></div>
            </div>

        </div>
    );
};

export default Dialogs;