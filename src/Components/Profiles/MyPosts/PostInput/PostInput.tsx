import React, {RefObject} from 'react';
import s from "./PostInput.module.css";

const PostInput = () => {

    let textInput:RefObject<HTMLTextAreaElement> = React.createRef();
    const addPostHandler = () =>{

        // @ts-ignore
        let textNewPost = textInput.current.value
    alert(textNewPost)
    }
    return (
        <div className={s.divMessageInput}>
            <div>
                <h3>my posts</h3>
                <div>
                    <textarea
                       ref={textInput}
                        className={s.messageInput}
                        name="comment">
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