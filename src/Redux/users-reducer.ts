export enum actionCreatorTypes {
    FOLLOW = "FOLLOW-USER",
    UNFOLLOW = "UNFOLLOW-USER",
    SHOW_MORE= "SHOW-MORE",
    SET_USERS= "SET-USERS",
    SET_CURRENT_PAGE= "SET-CURRENT-PAGE",
    SET_TOTAL_USERS_COUNT= "SET-TOTAL-USERS-COUNT",

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
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
}
export type actionsType = followACType | unFollowACType | showMoreACType | setUsersACType | setCurrentPageACType | setTotalUsersCountACType


let initialState:usersPageStoreType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 15,
    currentPage: 2,
}

type followACType = { type: actionCreatorTypes.FOLLOW, userId: string}
type unFollowACType = { type: actionCreatorTypes.UNFOLLOW, userId: string}
type showMoreACType = { type: actionCreatorTypes.SHOW_MORE, }
type setUsersACType = { type: actionCreatorTypes.SET_USERS, users: Array<userType>}
type setCurrentPageACType = {type: actionCreatorTypes.SET_CURRENT_PAGE, page: number}
type setTotalUsersCountACType = {type: actionCreatorTypes.SET_TOTAL_USERS_COUNT, count: number}



export const followAC  = (userId:string) =>  ({ type: actionCreatorTypes.FOLLOW, userId})
export const unFollowAC = (userId:string) => ({ type: actionCreatorTypes.UNFOLLOW, userId})
export const showMoreAC = () => ({ type: actionCreatorTypes.UNFOLLOW })
export const setUsersAC = (users:Array<userType>) => ({type:actionCreatorTypes.SET_USERS, users})
export const setUserPageAC = (page:number)=>({type:actionCreatorTypes.SET_CURRENT_PAGE,page})
export const setTotalUsersCountAC = (count:number)=>({type:actionCreatorTypes.SET_TOTAL_USERS_COUNT,count})

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
            return {...state, users:[...action.users]}
        case actionCreatorTypes.SET_CURRENT_PAGE:
            return {...state,currentPage: action.page}
        case actionCreatorTypes.SET_TOTAL_USERS_COUNT:
            return {...state,totalUsersCount:action.count}
        default:
            return {...state}
    }
}

export default usersReducer;