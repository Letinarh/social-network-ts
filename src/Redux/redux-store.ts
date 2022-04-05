import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogsReducer";
import {profileReducer} from "./profile-reducer";

let initialState = {

}
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})
let store = createStore(reducers);
export default store