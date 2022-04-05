import React, {ChangeEvent, RefObject} from 'react';
import s from "./PostInput.module.css";
import {actionsType} from "../../../../Redux/Store";
import {addPostAC, updateTextAreaAC} from "../../../../Redux/profile-reducer";


type postInputPropsType = {
    dispatch: (action: actionsType) => void
    text: string
}

const PostInput = (props: postInputPropsType) => {
    let textInput: RefObject<HTMLTextAreaElement> = React.createRef();
    const addPostHandler = () => {
        props.dispatch(addPostAC())
    }

    let changeTextAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateTextAreaAC(e.currentTarget.value))
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
                        value={props.text}
                        onChange={
                            changeTextAreaHandler
                        }
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