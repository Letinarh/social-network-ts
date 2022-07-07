import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {AppStateType} from "../../Redux/redux-store";
import {followAC, setUsersAC, unFollowAC, userType} from "../../Redux/users-reducer";

let mapStateToProps = (state: AppStateType) => {
    return {
        users:state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        follow: (userId:string) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId:string) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users:Array<userType>) => {
            dispatch(setUsersAC(users))
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Users);
