import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return    <div>
        <div>
            <div>
                <h3>my posts</h3>
                <textarea className={s.tArea} name="comment" placeholder="Your news..."></textarea>
            </div>
            <button>Submit</button>
        </div>
        <Post />
        <Post />
        <Post />
    </div>
}
export default MyPosts
