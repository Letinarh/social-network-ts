import React, {ChangeEvent, RefObject} from 'react';
import s from "./PostInput.module.css";
import {addPostAC, updateTextAreaAC} from "../../../../Redux/profile-reducer";
import {useDispatch} from "react-redux";

const dispatch = useDispatch();
type postInputPropsType = {
    text: string
}

const PostInput = (props: postInputPropsType) => {
    let textInput: RefObject<HTMLTextAreaElement> = React.createRef();
    const addPostHandler = () => {
        dispatch(addPostAC())
    }

    let changeTextAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateTextAreaAC(e.currentTarget.value))
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