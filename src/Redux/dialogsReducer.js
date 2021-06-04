const ADD_MESSAGE = 'ADD-MESSAGE';
const UPD_NEW_MSG_TXT = 'UPD-NEW-MSG-TEXT'

const initialState = {
    dialogs: [
        {id: 1, name: 'Victor'},
        {id: 2, name: 'Archy'},
        {id: 3, name: 'Ruslan'},
        {id: 4, name: 'Sega'},
        {id: 5, name: 'Ignore'},
    ],
    messages: [
        {id: 1, message: 'Hi every body!'},
        {id: 2, message: "We've got our own WEB!"},
        {id: 3, message: 'Congratulations!!'},
    ],
    newMsgText: 'newMsg',
}
const dialogsReducer = (state = initialState, action) => {

    if (action.type === ADD_MESSAGE) {
        let newMessage = {
            id: 4,
            message: state.newMsgText
        }
        state.messages.push(newMessage);
        state.newMsgText = '';
    return state;
    }
    else if (action.type === UPD_NEW_MSG_TXT) {
        state.newMsgText = action.newMsg;
        return state;
    }
}
export const addMessageActionCreator = () => ({type : ADD_MESSAGE});
export const updateNewMsgTxtActionCreator = (text) => ({type : UPD_NEW_MSG_TXT, newMsg: text});

export default dialogsReducer;