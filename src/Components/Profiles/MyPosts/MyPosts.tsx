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
        <div className={s.posts}>
            <Post avatar = "https://cdn1.iconfinder.com/data/icons/basic-ui-set-v5-user-outline/64/Account_profile_user_avatar_small-512.png" message = "Hello"/>
            <Post />
            <Post />
        </div>

    </div>
}
export default MyPosts
