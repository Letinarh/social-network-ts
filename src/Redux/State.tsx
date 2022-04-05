import {strict} from "assert";
import {ChangeEventHandler, TextareaHTMLAttributes} from "react";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogsReducer";

export enum actionCreatorTypes {
    ADD_POST = "ADD-POST",
    UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT",
    UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT",
    SEND_MESSAGE = "SEND-MESSAGE"
}

export type dialogItemType = {
    id: number
    name: string
}
export type messageType = {
    id: number
    messageText: string
}
export type postsType = {
    id: number,
    avatar: string,
    message: string,
    likesCount: number,
}
export type RootStateType = {
    dialogsPage: {
        dialogsData: Array<dialogItemType>
        messageData: Array<messageType>
        newMessageText: string
    }
    profilePage: {
        posts: Array<postsType>,
        textAreaText: string,
    }
}

export type actionsType = addPostActionType | updateTextAreaActionType | updateNewMessageTextType | sendMessageType
export type addPostActionType = {
    type: actionCreatorTypes.ADD_POST,
}
export type updateTextAreaActionType = {
    type: actionCreatorTypes.UPDATE_NEW_POST_TEXT
    currentText: string
}
export type updateNewMessageTextType={
    type:actionCreatorTypes.UPDATE_NEW_MESSAGE_TEXT
    currentMessageText: string
}
export type sendMessageType={
    type:actionCreatorTypes.SEND_MESSAGE
}

export type StoreType = {
    _state: RootStateType
    subscribe: (observer: () => void) => void
    _callSubscribe: (state: RootStateType) => void
    getState: () => RootStateType
    dispatch: (action: actionsType) => void
}
//________________________________________________________________________
let store: StoreType = {
    _state: {
        dialogsPage: {
            dialogsData: [
                {id: 1, name: "Petro"},
                {id: 2, name: "Nikola"},
                {id: 3, name: "Zahar"},
                {id: 4, name: "Kat"},
            ],
            messageData: [
                {id: 1, messageText: "Bachelor degree"},
                {id: 2, messageText: "I love Type Script"},
                {id: 3, messageText: "In't gonna live forever"},
                {id: 4, messageText: "Just do it"},
            ],
            newMessageText:"",
        },
        profilePage: {
            posts: [
                {
                    id: 0,
                    message: "Hello people sd fh   fsdj hfsdhf d fsd fisdiu df sdf ds f sd fjd hfh sdk fsd fs df hsdk fusd fsd f sd fsdf sdi fsd  fsd fsd d sfiu diu sd fius dfi !",
                    avatar: "https://stickers.wiki/static/stickers/cisforcookie/file_164842.webp?ezimgfmt=rs:134x134/rscb1/ng:webp/ngcb1",
                    likesCount: 3,
                },
                {
                    id: 1,
                    message: "Hello too",
                    avatar: "https://stickers.wiki/static/stickers/cisforcookie/file_164842.webp?ezimgfmt=rs:134x134/rscb1/ng:webp/ngcb1",
                    likesCount: 5,
                }
            ],
            textAreaText: "",
        }
    },
    _callSubscribe() {
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscribe = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage,action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action)
        this._callSubscribe(this._state)
    },

}
export default store