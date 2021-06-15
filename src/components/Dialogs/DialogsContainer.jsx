import React from "react";
import {addMessageActionCreator, updateNewMsgTxtActionCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState();


    let onAddMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }
    let onMsgChange = (text) => {
        props.store.dispatch(updateNewMsgTxtActionCreator(text));
    }
    return (
        <Dialogs addMessage={onAddMessage}
                 updateNewMsgTxt={onMsgChange}
                 state={state.dialogsPage}
        />
    );
}

export default DialogsContainer;