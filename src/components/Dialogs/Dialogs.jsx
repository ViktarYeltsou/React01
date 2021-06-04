import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {addMessageActionCreator, updateNewMsgTxtActionCreator} from "../../Redux/dialogsReducer";

const Dialogs = (props) => {
    debugger;
    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElements = props.state.messages.map(m => <Message message={m.message} id={m.id}/>)

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }
    let onMsgChange = (e) => {
        let text = e.target.value; //достаем значение из элемента, который изменился
        props.dispatch(updateNewMsgTxtActionCreator(text));
     }
    return (
        <div className={s.dialogs}>
            <div>
                <button onClick={addMessage}>Add Message</button>
            </div>
            <div>
                <textarea onChange={onMsgChange}
                          // ref={newMsgElement}
                          value={props.state.newMsgText} />

        </div>

    <div className={s.dialogsItems}>
        {dialogsElements}
    </div>
    <div className={s.messages}>
        {messageElements}
    </div>
</div>
);
}

export default Dialogs;