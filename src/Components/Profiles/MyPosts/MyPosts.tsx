import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import PostInput from "./PostInput/PostInput";


type postPropsType = {
    id: number,
    avatar: string,
    message: string,
    likesCount:number,
}
let postsData:Array<postPropsType> = [
    {
        id : 0,
        message: "Hello people sd fh   fsdj hfsdhf d fsd fisdiu df sdf ds f sd fjd hfh sdk fsd fs df hsdk fusd fsd f sd fsdf sdi fsd  fsd fsd d sfiu diu sd fius dfi !",
        avatar: "https://iconarchive.com/download/i45701/tooschee/medievalish-gaming/wow-orc.ico",
        likesCount: 3,
    },
    {   id:1,
        message:"Hello too",
        avatar:"https://iconarchive.com/download/i45729/tooschee/water-gaming/wow-worgen.ico",
        likesCount: 5,
    }

]

const MyPosts = () => {
    let postsElements = postsData.map((postItem)=>
        <Post avatar={postItem.avatar} message={postItem.message} likesCount={postItem.likesCount}/>)

    return <div>
        <div>
            <PostInput/>
        </div>
        
        <div>
            {postsElements}
        </div>

    </div>
}
export default MyPosts
