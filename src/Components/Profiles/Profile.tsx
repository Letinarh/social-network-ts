import React from 'react';
import {postsType } from '../../Redux/State';
import MyPosts from "./MyPosts/MyPosts"
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export type ProfilePropsType ={
    postsData:Array<postsType>
    addPostCallBack: (newMessageText:string)=>void
}
const Profile = (props:ProfilePropsType) => {

    return <div>
            <ProfileInfo />
            <MyPosts postsData={props.postsData} addPostCallBack={props.addPostCallBack} />
    </div>
}
export default Profile