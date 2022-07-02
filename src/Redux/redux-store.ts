import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogsReducer";
import {profileReducer} from "./profile-reducer";


export type RootStateType = ReturnType<typeof rootReducer>

//let initialState = {}
let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
})

export type  AppStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer);
export default store