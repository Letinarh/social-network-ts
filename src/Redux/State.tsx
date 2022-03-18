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


export type StoreType = {
    _state: RootStateType
    addPost: () => void
    changeTextArea: (currentText: string) => void
    subscribe: (observer: () => void) => void
    render: (state:RootStateType) => void
    getState: () => RootStateType
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
            textAreaText: "525",
        }
    },
    addPost() {
        let newPost: postsType = {
            id: 2,
            message: this._state.profilePage.textAreaText,
            avatar: "https://iconarchive.com/download/i45701/tooschee/medievalish-gaming/wow-orc.ico",
            likesCount: 0,
        }
        this._state.profilePage.textAreaText = ""
        this._state.profilePage.posts = [...this._state.profilePage.posts, newPost]

        this.render(this.getState())
    },
    changeTextArea(currentText: string) {
        this._state.profilePage.textAreaText = currentText
        this.render(this.getState())
    },
    subscribe(observer) {
        this.render = observer
    },
    render() {},
    getState() {
        return this._state;
    }


}

export default store