import React, {ChangeEvent, RefObject} from 'react';
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {actionsType, dialogItemType, messageType, sendMessageAC, updateNewMessageTextAC} from "../../Redux/State";

type DialogsPropsType = {
    dialogsData: Array<dialogItemType>
    messageData: Array<messageType>
    newMessageText: string
    dispatch: (action: actionsType) => void
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

    //let textCatcher: RefObject<HTMLTextAreaElement> = React.createRef()

    const addMessageHandler = () => {
        props.dispatch(sendMessageAC())
    }
    const onChangeNewMessageTextHandler = (event) => {
        let body = event.target.value
        props.dispatch(updateNewMessageTextAC(body))
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
                             value={props.newMessageText}
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