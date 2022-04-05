import {postsType, actionCreatorTypes, actionsType} from './Store'

type     profilePageStoreType = {
    posts: Array<postsType>,
    textAreaText: string,
}

let initialState = {
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




export const profileReducer = (state: profilePageStoreType = initialState, action: actionsType): profilePageStoreType => {
    switch (action.type) {

        case actionCreatorTypes.ADD_POST: {
            let newPost: postsType = {
                id: 2,
                message: state.textAreaText,
                avatar: "https://stickers.wiki/static/stickers/cisforcookie/file_164842.webp?ezimgfmt=rs:134x134/rscb1/ng:webp/ngcb1",
                likesCount: 0,
            }
            state.textAreaText = ""
            state.posts = [...state.posts, newPost]
            return state
        }
        case actionCreatorTypes.UPDATE_NEW_POST_TEXT: {
            state.textAreaText = action.currentText
            return state
        }
        default:
            return state
    }
}

export default profileReducer;