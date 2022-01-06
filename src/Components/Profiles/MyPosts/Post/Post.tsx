import React from 'react';
import s from "./Post.module.css";

type postPropsType = {
    avatar: string,
    message: string
}

const Post = (props:postPropsType) => {
    return    <div>
        <div className={s.post}>
            <div className={s.avaArea}>
                <img src={props.avatar}/>
            </div>

            <div className={s.textArea}>
               <p> message : {props.message} </p>
            </div>



        </div>

    </div>
}
export default Post
