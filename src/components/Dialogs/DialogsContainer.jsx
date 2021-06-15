import React from "react";
import {addMessageActionCreator, updateNewMsgTxtActionCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {
    // let state = props.store.getState();


    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let onAddMessage = () => {
                        store.dispatch(addMessageActionCreator());
                    }
                    let onMsgChange = (text) => {
                        store.dispatch(updateNewMsgTxtActionCreator(text));
                    }
                    return <Dialogs addMessage={onAddMessage}
                                    updateNewMsgTxt={onMsgChange}
                                    state={store.getState().dialogsPage}
                    />
                }
            }
        </StoreContext.Consumer>
    );
}

export default DialogsContainer;