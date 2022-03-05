import React from 'react';
import {postsType } from '../../Redux/State';
import MyPosts from "./MyPosts/MyPosts"
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export type ProfilePropsType ={
    postsData:Array<postsType>
}
const Profile = (props:ProfilePropsType) => {

    return <div>
            <ProfileInfo />
            <MyPosts postsData={props.postsData}/>
    </div>
}
export default Profile