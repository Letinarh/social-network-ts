import React from 'react';
import {actionsType, postsType} from '../../Redux/Store';
import MyPosts from "./MyPosts/MyPosts"
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export type ProfilePropsType ={
    postsData:Array<postsType>
    textAreaText:string
    dispatch: (action:actionsType)=>void

}
const Profile = (props:ProfilePropsType) => {

    return <div>
            <ProfileInfo />
            <MyPosts
                postsData={props.postsData}
                textAreaText={props.textAreaText}
                dispatch={props.dispatch}
            />
    </div>
}
export default Profile