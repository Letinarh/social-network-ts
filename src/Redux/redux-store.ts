import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogsReducer";
import {profileReducer} from "./profile-reducer";
import usersReducer from "./users-reducer";


export type RootStateType = ReturnType<typeof rootReducer>

//let initialState = {}
let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
 // sidebar: sidebarReducer,
    usersPage: usersReducer,
})

export type  AppStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer);
export default store