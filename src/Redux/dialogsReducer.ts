import {actionCreatorTypes, actionsType, dialogItemType, messageType} from "./Store";

type     dialogsPageStateType = {
    dialogsData: Array<dialogItemType>
    messageData: Array<messageType>
    newMessageText: string
}

let initialState = {
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
}

export const updateNewMessageTextAC = (text:string): actionsType =>{
    return {
        type:actionCreatorTypes.UPDATE_NEW_MESSAGE_TEXT, currentMessageText: text
    }
}
export const sendMessageAC = (): actionsType =>{
    return {type:actionCreatorTypes.SEND_MESSAGE}
}

export const dialogsReducer = (state:dialogsPageStateType = initialState, action:actionsType) =>{
switch (action.type) {
    case actionCreatorTypes.UPDATE_NEW_MESSAGE_TEXT:{
        state.newMessageText = action.currentMessageText
        return state
    }
    case actionCreatorTypes.SEND_MESSAGE:{
        let newMessage:messageType = {
            id: 5, messageText: state.newMessageText
        }
        state.messageData = [...state.messageData,newMessage,]
        state.newMessageText = ""
        return state
    }
    default: return state
}
    return state
}
export default dialogsReducer;