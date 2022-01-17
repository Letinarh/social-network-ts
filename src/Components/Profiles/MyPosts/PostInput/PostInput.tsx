import React from 'react';
import s from "./PostInput.module.css";

const PostInput = () => {
    return (
        <div className={s.divMessageInput}>
            <div>
                <h3>my posts</h3>
                <div>
                    <textarea className={s.messageInput} name="comment" placeholder="Your news..."></textarea>
                </div>
            </div>
            <button><span>Send </span></button>
        </div>
    );
};

export default PostInput;