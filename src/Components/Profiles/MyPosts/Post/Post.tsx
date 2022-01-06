import React from 'react';
import s from "./Post.module.css";

type postPropsType = {
    avatar: string,
    message: string
}

const Post = ({avatar, message}) => {
    return    <div>
        <div className={s.post}>
            <span>
                <img src={avatar}/>
            </span>

            <span>

            </span>
            <span>
                message : {message}
            </span>



        </div>

    </div>
}
export default Post
