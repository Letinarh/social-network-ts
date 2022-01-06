import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

let bigData: { id: number, avatar: string, message: string }[] = [
    {
        id: 0,
        message: "Hello people sd fh   fsdj hfsdhf d fsd fisdiu df sdf ds f sd fjd hfh sdk fsd fs df hsdk fusd fsd f sd fsdf sdi fsd  fsd fsd d sfiu diu sd fius dfi !",
        avatar: "https://iconarchive.com/download/i45701/tooschee/medievalish-gaming/wow-orc.ico"
    },
    {id:1,
        message:"Hello too",
        avatar:"https://iconarchive.com/download/i45729/tooschee/water-gaming/wow-worgen.ico"}

]

const MyPosts = () => {
    return <div>
        <div>
            <div>
                <h3>my posts</h3>
                <textarea className={s.tArea} name="comment" placeholder="Your news..."></textarea>
                {/* стиль инпута -  https://codepen.io/visualcookie/pen/kkwxPm*/}
            </div>
            <button>Submit</button>
        </div>
        <div className={s.posts}>
            <Post avatar={bigData[0].avatar} message={bigData[0].message}/>
            <Post avatar={bigData[1].avatar} message={bigData[1].message}/>


        </div>

    </div>
}
export default MyPosts
