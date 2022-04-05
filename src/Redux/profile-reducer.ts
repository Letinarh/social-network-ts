import {postsType, actionCreatorTypes, actionsType} from '../Redux/State'





type     profilePageStoreType = {
    posts: Array<postsType>,
    textAreaText: string,
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




const profileReducer = (state: profilePageStoreType, action: actionsType): profilePageStoreType => {
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