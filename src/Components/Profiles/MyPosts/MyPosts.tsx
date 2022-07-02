import React from 'react';
import Post from "./Post/Post";
import PostInput from "./PostInput/PostInput";
import {useDispatch, useSelector } from "react-redux";
import {RootStateType} from "../../../Redux/redux-store";
import {postsType} from "../../../Redux/Store";


const MyPosts = () => {

    const postsData = useSelector<RootStateType,Array<postsType >>(state => state.profilePage.posts)
    const textAreaText = useSelector<RootStateType,string>(state => state.profilePage.textAreaText)
    const dispatch = useDispatch();


    let postsElements = postsData.map((postItem)=>
        <Post avatar={postItem.avatar} message={postItem.message} likesCount={postItem.likesCount}/>)


    return <div>
        <div>
            <PostInput
                text={textAreaText}
                dispatch={dispatch}
            />
        </div>
        
        <div>
            {postsElements}
        </div>

    </div>
}
export default MyPosts
