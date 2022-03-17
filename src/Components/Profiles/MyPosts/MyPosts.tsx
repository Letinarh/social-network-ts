import React from 'react';
import { ProfilePropsType } from '../Profile';

import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import PostInput from "./PostInput/PostInput";
import {postsType} from "../../../Redux/State";


type MyPostsPropsType = ProfilePropsType
const MyPosts = (props:MyPostsPropsType) => {
    let postsElements = props.postsData.map((postItem)=>
        <Post avatar={postItem.avatar} message={postItem.message} likesCount={postItem.likesCount}/>)

    return <div>
        <div>
            <PostInput
                addPostCallback={props.addPostCallBack}
                text={props.textAreaText}
                changeTextArea={props.changeTextArea}
            />
        </div>
        
        <div>
            {postsElements}
        </div>

    </div>
}
export default MyPosts
