const ADD_MESSAGE = 'ADD-MESSAGE';
const UPD_NEW_MSG_TXT = 'UPD-NEW-MSG-TEXT'

const dialogsReducer = (state, action) => {

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