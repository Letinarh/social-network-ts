import React, {RefObject} from 'react';
import s from "./PostInput.module.css";




type postInputPropsType={
    addPostCAllback: (textNewPost:string)=>void
}
const PostInput = (props:postInputPropsType) => {

    let textInput:RefObject<HTMLTextAreaElement> = React.createRef();
    const addPostHandler = () =>{

        // @ts-ignore
        let textNewPost = textInput.current.value
    props.addPostCAllback(textNewPost)
        // @ts-ignore
        textInput.current.value = ""
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