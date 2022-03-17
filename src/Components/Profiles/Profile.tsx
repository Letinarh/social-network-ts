import React, {ChangeEvent} from 'react';
import {postsType } from '../../Redux/State';
import MyPosts from "./MyPosts/MyPosts"
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export type ProfilePropsType ={
    postsData:Array<postsType>
    textAreaText:string
    addPostCallBack: ()=>void
    changeTextArea: (currentText:string) => void

}
const Profile = (props:ProfilePropsType) => {

    return <div>
            <ProfileInfo />
            <MyPosts
                postsData={props.postsData}
                textAreaText={props.textAreaText}
                addPostCallBack={props.addPostCallBack}
                changeTextArea={props.changeTextArea}
            />
    </div>
}
export default Profile