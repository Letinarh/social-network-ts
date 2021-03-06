import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../Redux/redux-store";
import {
    followAC, setIsFetchingAC,
    setTotalUsersCountAC,
    setUserPageAC,
    setUsersAC,
    unFollowAC,
    userType
} from "../../Redux/users-reducer";
import s from "./users.module.css"
import axios from "axios";
import userAvaDefault from "../../Assets/images/Ninja-Avatar.jpg";
import Preloader from "../Common/Preloader/Preloader";
import {NavLink} from "react-router-dom";


const Users = () => {
    const usersData = useSelector<RootStateType, Array<userType>>(state => state.usersPage.users)
    const pageSize = useSelector<RootStateType, number>(state => state.usersPage.pageSize)
    const totalUsersCount = useSelector<RootStateType, number>(state => state.usersPage.totalUsersCount)
    const currentPage = useSelector<RootStateType, number>(state => state.usersPage.currentPage)
    const isFetching = useSelector<RootStateType, boolean>(state => state.usersPage.isFetching)

    const dispatch = useDispatch();

    let getUsers = () => {
        dispatch(setIsFetchingAC(true))
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                dispatch(setUsersAC(response.data.items))
                dispatch(setTotalUsersCountAC(response.data.totalCount))
                dispatch(setIsFetchingAC(false))
            });
        //API Key "e51cb891-4ba3-40e0-8c44-82f372b76693"
    }
    useEffect(getUsers, []);

    let pagesCount: number = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let curP = currentPage;
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
    let curPL = curP + 5;
    let slicedPages = pages.slice(curPF, curPL);

    let onPageChanged = (p: number) => {
        return (
            dispatch(setIsFetchingAC(true)),
                dispatch(setUserPageAC(p)),

                axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${pageSize}`)
                    .then(response => {
                        dispatch(setUsersAC(response.data.items))
                        dispatch(setIsFetchingAC(false))
                    })
        )
    }

    return (
        <>
            {isFetching ? <Preloader/> : null}
            <div className={s.usersWrapper}>
                <div className={s.pageNumbers}>

                    {slicedPages.map(p => {
                        return <span className={currentPage == p ? s.selectedPage : s.pointed}
                                     onClick={() => onPageChanged(p)}
                        >
                        {p} -
                    </span>
                    })}
                    ...
                </div>
                {
                    usersData.map(u => <div key={u.id} className={s.userDiv}>
                    <span>
                        <div>
                            <NavLink to={"/profile" + u.id}>
                                <img src={u.photos.large != null ? u.photos.large : userAvaDefault} alt="Avatar"
                                 className={s.userAvatar}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => dispatch(unFollowAC(u.id))}>unFollow</button> :
                                <button onClick={() => dispatch(followAC(u.id))}>Follow</button>}
                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>

                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                        
                    </span>

                    </div>)
                }
            </div>
        </>
    )

};

export default Users;