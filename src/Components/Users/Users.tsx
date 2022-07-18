import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../Redux/redux-store";
import {followAC, setUsersAC, unFollowAC, userType} from "../../Redux/users-reducer";
import s from "./users.module.css"
import axios from "axios";
import userAvaDefault from "../../Assets/images/Ninja-Avatar.jpg"


const Users = () => {
    const usersData = useSelector<RootStateType, Array<userType>>(state => state.usersPage.users)
    const dispatch = useDispatch();


    const initUsers: Array<userType> = [
        {
            id: "0",
            name: "Vladimir Bukhta  ",
            photos: {
                large: "https://freepngimg.com/save/73526-bearded-skull-illustration-vector-drawing-beard/1000x1000",
                small: ""
            },
            status: "Support",
            location: {city: "Drogichin", country: "Belarus"},
            followed: false,
            uniqueUrlName: "",
        },
        {
            id: "1",
            name: "Alexandr Smirnov  ",
            photos: {
                large: "https://us.123rf.com/450wm/jemastock/jemastock2104/jemastock210400572/167646451-motorcycle-handlebars-retro-style-icon.jpg?ver=6",
                small: ""
            },
            status: "Hang Around",
            location: {city: "Kyiv", country: "Ukraine"},
            followed: true,
            uniqueUrlName: "",
        },
        {
            id: "2",
            name: "Victor Kosyak  ",
            photos: {
                small: "",
                large: "https://i.pinimg.com/474x/82/6e/5c/826e5c628591719deba54c9b9ba10324--smiley-vikings.jpg",
            },
            status: "Hang Around",
            location: {city: "Brest", country: "Belarus"},
            followed: true,
            uniqueUrlName: "",
        },
        {
            id: "3",
            name: "Ivan Voron  ",
            photos: {
                small: "",
                large: "https://img.freepik.com/free-vector/skull-moto-helmet_225004-1700.jpg?w=2000",
            },
            status: "Support",
            location: {city: "Brest", country: "Belarus"},
            followed: false,
            uniqueUrlName: "",
        },
    ]
    let getUsers = () => {
        if (usersData.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    dispatch(setUsersAC(response.data.items))
                })
            //API Key "e51cb891-4ba3-40e0-8c44-82f372b76693"
        }
    }
    useEffect(getUsers,[usersData]);
    return (

        <div>
            <button onClick={getUsers}>Get Users</button>
            {
                usersData.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.large != null ? u.photos.large : userAvaDefault} alt="Avatar"
                                 className={s.userAvatar}/>
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
    );
};

export default Users;