import {actionCreatorTypes, actionsType, dialogItemType, messageType} from "./State";

type     dialogsPageStateType = {
    dialogsData: Array<dialogItemType>
    messageData: Array<messageType>
    newMessageText: string
}

export const updateNewMessageTextAC = (text:string): actionsType =>{
    return {
        type:actionCreatorTypes.UPDATE_NEW_MESSAGE_TEXT, currentMessageText: text
    }
}
export const sendMessageAC = (): actionsType =>{
    return {type:actionCreatorTypes.SEND_MESSAGE}
}

const dialogsReducer = (state:dialogsPageStateType, action:actionsType) =>{
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