import React from 'react';
import s from "./Profile.module.css";
import ProfileCover from "../../IMG/Sunset.jpg"
import imageAva from "../../IMG/Ava1.png"
import MyPosts from "./MyPosts/MyPosts"
const Profile = () => {
    return <div>
        <div>
            <img src={ProfileCover} alt="Sunset"/>
        </div>
        <div>
            <div className={s.wrapper}>
                <img className={s.iAva} src={imageAva} alt="Avatar"/>

                {/* <button>donate</button> */}

                <h1>Vladimir Bukhta</h1>
                <div>Date of birth: 24 November </div>
                <div>City: Drogichin</div>
                <div>Education: Brest State University</div>
                <div>Web Site: <a href="https://vladimir-bukhta.by/">www.vladimir-bukhta.by</a></div>
            </div>
        </div>
        <div>
            <MyPosts />
        </div>
    </div>
}
export default Profile