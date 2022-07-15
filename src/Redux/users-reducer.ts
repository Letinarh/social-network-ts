export enum actionCreatorTypes {
    FOLLOW = "FOLLOW-USER",
    UNFOLLOW = "UNFOLLOW-USER",
    SHOW_MORE= "SHOW-MORE",
    SET_USERS= "SET-USERS",

}
export type userType = {
    name:string
    id:string
    uniqueUrlName: string
    status: string
    photos: {
        "small": string,
        "large": string
    }
    location: {
        city: string
        country: string
    }
    followed: boolean
}
export type usersPageStoreType = {
    users: Array<userType>,
}
export type actionsType = followACType | unFollowACType | showMoreACType | setUsersACType


let initialState:usersPageStoreType = {
    users: [
        /*{
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
        },*/
    ],
}

type followACType = { type: actionCreatorTypes.FOLLOW, userId: string}
type unFollowACType = { type: actionCreatorTypes.UNFOLLOW, userId: string}
type showMoreACType = { type: actionCreatorTypes.SHOW_MORE, }
type setUsersACType = { type: actionCreatorTypes.SET_USERS, users: Array<userType>}



export const followAC  = (userId:string) =>  ({ type: actionCreatorTypes.FOLLOW, userId})
export const unFollowAC = (userId:string) => ({ type: actionCreatorTypes.UNFOLLOW, userId})
export const showMoreAC = () => ({ type: actionCreatorTypes.UNFOLLOW })
export const setUsersAC = (users:Array<userType>) => ({type:actionCreatorTypes.SET_USERS, users})


export const usersReducer = (state: usersPageStoreType = initialState, action: actionsType): usersPageStoreType => {
    switch (action.type) {
        case actionCreatorTypes.FOLLOW:
            return  {
                ...state,
                users: state.users.map(u =>{
                    if (u.id === action.userId)
                        return {...u, followed: true}
                    return u
                })
            }
        case actionCreatorTypes.UNFOLLOW:
            return  {
                ...state,
                users: state.users.map(u =>{
                    if (u.id === action.userId)
                        return {...u, followed: false}
                    return u
                })
            }
        case actionCreatorTypes.SET_USERS:
            return {...state, users:[...state.users, ...action.users]}
        default:
            return {...state}
    }
}

export default usersReducer;