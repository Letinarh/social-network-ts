export enum actionCreatorTypes {
    FOLLOW = "FOLLOW-USER",
    UNFOLLOW = "UNFOLLOW-USER",
    SHOW_MORE= "SHOW-MORE",

}
type user = {
    id:string
    fullName:string
    range: "Support" | "Hang Around"| "Nomad "|"Prospect"| "Member "
    location: {
        city: string
        country: string
    }
    followed: boolean


}
type usersPageStoreType = {
    users: Array<user>,
}

let initialState:usersPageStoreType = {
    users: [
        {
            id: "0",
            followed: false,
            fullName: "Vladimir Bukhta  ",
            range: "Support",
            location: {city: "Drogichin", country: "Belarus"}
        },
        {
            id: "1",
            followed: true,
            fullName: "Alexandr Smirnov  ",
            range: "Hang Around",
            location: {city: "Kyiv", country: "Ukraine"}
        },
        {
            id: "2",
            followed: true,
            fullName: "Victor Kosyak  ",
            range: "Hang Around",
            location: {city: "Brest", country: "Belarus"}
        },
        {
            id: "3",
            followed: false,
            fullName: "Ivan Kozak  ",
            range: "Support",
            location: {city: "Brest", country: "Belarus"}
        },
    ],
}

type followACType = { type: actionCreatorTypes.FOLLOW, payload: string}
type unfollowACType = { type: actionCreatorTypes.UNFOLLOW, }
type showMoreACType = { type: actionCreatorTypes.SHOW_MORE, }


 const followAC  = () =>  ({ type: actionCreatorTypes.FOLLOW, payload: this.})
 const unfollowAC = () => ({ type: actionCreatorTypes.UNFOLLOW })
 const showMoreAC = () => ({ type: actionCreatorTypes.UNFOLLOW })
type actionsType = followACType | unfollowACType | showMoreACType

export const usersReducer = (state: usersPageStoreType = initialState, action: actionsType): usersPageStoreType => {
    switch (action.type) {
        case actionCreatorTypes.FOLLOW:

        case actionCreatorTypes.UNFOLLOW:


        default:
            return {...state}
    }
}

export default usersReducer;