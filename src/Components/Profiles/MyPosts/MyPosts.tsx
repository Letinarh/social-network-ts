import React from 'react';
import { ProfilePropsType } from '../Profile';
import Post from "./Post/Post";
import PostInput from "./PostInput/PostInput";


type MyPostsPropsType = ProfilePropsType
const MyPosts = (props:MyPostsPropsType) => {
    let postsElements = props.postsData.map((postItem)=>
        <Post avatar={postItem.avatar} message={postItem.message} likesCount={postItem.likesCount}/>)


    return <div>
        <div>
            <PostInput
                text={props.textAreaText}
                dispatch={props.dispatch}
            />
        </div>
        
        <div>
            {postsElements}
        </div>

    </div>
}
export default MyPosts
