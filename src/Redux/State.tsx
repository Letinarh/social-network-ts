import {strict} from "assert";

export enum actionCreatorTypes {
    ADD_POST = "ADD-POST",
    UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
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
    }
    profilePage: {
        posts: Array<postsType>,
        textAreaText: string,
    }
}

export type actionsType = addPostActionType | updateTextAreaActionType
export type addPostActionType = {
    type: actionCreatorTypes.ADD_POST,
}
export type updateTextAreaActionType = {
    type: actionCreatorTypes.UPDATE_NEW_POST_TEXT
    currentText: string
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
        if (action.type === "ADD-POST") {
            let newPost: postsType = {
                id: 2,
                message: this._state.profilePage.textAreaText,
                avatar: "https://stickers.wiki/static/stickers/cisforcookie/file_164842.webp?ezimgfmt=rs:134x134/rscb1/ng:webp/ngcb1",
                likesCount: 0,
            }
            this._state.profilePage.textAreaText = ""
            this._state.profilePage.posts = [...this._state.profilePage.posts, newPost]

            this._callSubscribe(this.getState())
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.textAreaText = action.currentText
            this._callSubscribe(this.getState())
        }
    },

}
export const addPostAC = (): actionsType => {
    return {
        type: actionCreatorTypes.ADD_POST
    }
}
export const updateTextAreaAC = (TEXT: string): actionsType => {
    return {
        type: actionCreatorTypes.UPDATE_NEW_POST_TEXT,
        currentText: TEXT,
    }
}

export default store