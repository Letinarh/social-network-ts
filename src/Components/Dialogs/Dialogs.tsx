import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {dialogItemType, messageType} from "../../Redux/Store";
import {sendMessageAC, updateNewMessageTextAC} from "../../Redux/dialogsReducer";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../Redux/redux-store";

type DialogsPropsType = {
/*    dialogsData: Array<dialogItemType>
    messageData: Array<messageType>
    newMessageText: string
    dispatch: (action: actionsType) => void*/
}



const Dialogs = (props: DialogsPropsType) => {

    const dialogsData = useSelector<RootStateType,Array<dialogItemType>>(state => state.dialogsPage.dialogsData)
    const messageData = useSelector<RootStateType,Array<messageType>>(state => state.dialogsPage.messageData)
    const newMessageText = useSelector<RootStateType,string>(state => state.dialogsPage.newMessageText)
    const dispatch = useDispatch();



    let dialogElements = [
        dialogsData.map((dialog) =>
            <DialogItem name={dialog.name} id={dialog.id}></DialogItem>)
    ]

    let messageElements = [
        messageData.map((m) =>
            <Message id={m.id} messageText={m.messageText}></Message>)
    ]

    const addMessageHandler = () => {
        dispatch(sendMessageAC())
    }
    const onChangeNewMessageTextHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        dispatch(updateNewMessageTextAC(body))
    }

    return (
        <div className={s.dialogs}>

            <div>
                {dialogElements}
            </div>
            <div>
                <div>{messageElements}</div>
                <div>
                    <div>
                         <textarea
                             value={newMessageText}
                             placeholder="Enter you message"
                             onChange={onChangeNewMessageTextHandler}
                         >

                         </textarea>
                    </div>
                    <div>
                        <button
                            onClick={addMessageHandler}>send
                        </button>
                    </div>


                </div>
            </div>


        </div>
    );
};

export default Dialogs;