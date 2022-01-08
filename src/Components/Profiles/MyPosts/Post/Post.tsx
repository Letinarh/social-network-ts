import React from 'react';
import s from "./Post.module.css";

type postPropsType = {
    avatar: string,
    message: string
    likesCount:number
}

const Post:React.FC<postPropsType> = ({avatar,message,likesCount}) => {
    return    <div>
        <div className={s.post}>
            <div className={s.avaArea}>
                <img src={avatar}/>
            </div>

            <div className={s.textArea}>
               <p> message : {message} </p>
                <span>{likesCount} Likes</span>
            </div>




        </div>

    </div>
}
export default Post
