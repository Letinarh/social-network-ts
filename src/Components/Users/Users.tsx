import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../Redux/redux-store";
import {followAC, setUsersAC, unFollowAC, userType} from "../../Redux/users-reducer";
import s from "./users.module.css"

const Users = () => {
    const usersData = useSelector<RootStateType,Array<userType>>(state => state.usersPage.users)
    const dispatch = useDispatch();


    const initUsers: Array<userType> = [
        {
            id: "0",
            fullName: "Vladimir Bukhta  ",
            photoUrl:"https://freepngimg.com/save/73526-bearded-skull-illustration-vector-drawing-beard/1000x1000",
            range: "Support",
            location: {city: "Drogichin", country: "Belarus"},
            followed: false,
        },
        {
            id: "1",
            fullName: "Alexandr Smirnov  ",
            photoUrl:"https://us.123rf.com/450wm/jemastock/jemastock2104/jemastock210400572/167646451-motorcycle-handlebars-retro-style-icon.jpg?ver=6",
            range: "Hang Around",
            location: {city: "Kyiv", country: "Ukraine"},
            followed: true,
        },
        {
            id: "2",
            fullName: "Victor Kosyak  ",
            photoUrl:"https://i.pinimg.com/474x/82/6e/5c/826e5c628591719deba54c9b9ba10324--smiley-vikings.jpg",
            range: "Hang Around",
            location: {city: "Brest", country: "Belarus"},
            followed: true,
        },
        {
            id: "3",
            fullName: "Ivan Voron  ",
            photoUrl:"https://img.freepik.com/free-vector/skull-moto-helmet_225004-1700.jpg?w=2000",
            range: "Support",
            location: {city: "Brest", country: "Belarus"},
            followed: false,
        },
    ]

if (usersData.length === 0) {
    dispatch(setUsersAC(initUsers))
}

    return (
        <div>
            {
                usersData.map(u=> <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} alt="Avatar" className={s.userAvatar}/>
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={()=> dispatch(unFollowAC(u.id))}>unFollow</button> :
                                <button onClick={()=> dispatch(followAC(u.id))}>Follow</button> }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.range}</div>
                        </span>

                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                        
                    </span>
                    
                </div>)
            }
        </div>
    );
};

export default Users;