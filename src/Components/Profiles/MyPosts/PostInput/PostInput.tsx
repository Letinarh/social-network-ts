import React, {ChangeEvent, RefObject} from 'react';
import s from "./PostInput.module.css";
import {log} from "util";


type postInputPropsType = {
    addPostCallback: () => void
    changeTextArea: (text:string) => void
    text:string
}
const PostInput = (props: postInputPropsType) => {

    let textInput: RefObject<HTMLTextAreaElement> = React.createRef();

    const addPostHandler = () => {
        debugger
        props.addPostCallback()

    }


    let changeTextAreaHandler=()=>{
        //e:ChangeEvent<HTMLTextAreaElement>
        //props.changeTextArea(e.currentTarget.value)
        props.changeTextArea(`5`)
    }
    return (
        <div className={s.divMessageInput}>
            <div>
                <h3>my posts</h3>
                <div>
                    <textarea
                        ref={textInput}
                        className={s.messageInput}
                        name="comment"
                        value = {props.text}
                        onChange={
                            changeTextAreaHandler
                        } /*props.changeTextAreaHandler*/
                    >

                    </textarea>
                </div>
            </div>
            <button onClick={addPostHandler}>
                <span>Send </span>
            </button>
        </div>
    );
};

export default PostInput;