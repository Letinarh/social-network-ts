import {renderEntireTree} from "../render";

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
export type StateType = {
    DialogsPage: {
        dialogsData: Array<dialogItemType>
        messageData: Array<messageType>
    }
    ProfilePage: {
        Posts: Array<postsType>,
        AddPostCallBack: (newPostText:string) => void,
    }
}

export let addPost = (newPostText:string)=>{
    let newPost:postsType = {
        id: 2,
        message: newPostText,
        avatar: "https://iconarchive.com/download/i45701/tooschee/medievalish-gaming/wow-orc.ico",
        likesCount: 0,
    }
    State.ProfilePage.Posts = [...State.ProfilePage.Posts,newPost]
    renderEntireTree(State)
}

export let State: StateType = {
    DialogsPage: {
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
    ProfilePage: {
        Posts:[
            {
                id: 0,
                message: "Hello people sd fh   fsdj hfsdhf d fsd fisdiu df sdf ds f sd fjd hfh sdk fsd fs df hsdk fusd fsd f sd fsdf sdi fsd  fsd fsd d sfiu diu sd fius dfi !",
                avatar: "https://iconarchive.com/download/i45701/tooschee/medievalish-gaming/wow-orc.ico",
                likesCount: 3,
            },
            {
                id: 1,
                message: "Hello too",
                avatar: "https://iconarchive.com/download/i45729/tooschee/water-gaming/wow-worgen.ico",
                likesCount: 5,
            }
        ],
        AddPostCallBack: addPost,
    }
}

