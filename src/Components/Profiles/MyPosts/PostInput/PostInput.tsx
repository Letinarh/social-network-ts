import React from 'react';
import s from "./PostInput.module.css";

const PostInput = () => {
    let textInput = React.createRef();
    const addPostHandler = () =>{

    }
    return (
        <div className={s.divMessageInput}>
            <div>
                <h3>my posts</h3>
                <div>
                    <textarea
                       //ref={textInput}
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