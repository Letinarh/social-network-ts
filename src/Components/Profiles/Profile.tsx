import React, {ChangeEvent} from 'react';
import {postsType } from '../../Redux/State';
import MyPosts from "./MyPosts/MyPosts"
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export type ProfilePropsType ={
    postsData:Array<postsType>
    addPostCallBack: ()=>void
    changeTextArea: (currentText:string) => void
    textAreaText:string
}
const Profile = (props:ProfilePropsType) => {

    return <div>
            <ProfileInfo />
            <MyPosts
                postsData={props.postsData}
                addPostCallBack={props.addPostCallBack}
                textAreaText={props.textAreaText}
                changeTextArea={props.changeTextArea}
            />
    </div>
}
export default Profile