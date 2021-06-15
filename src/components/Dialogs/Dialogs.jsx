import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {
    let state = props.state;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElements = state.messages.map(m => <Message message={m.message} id={m.id}/>)

    let onAddMessage = () => {
        props.addMessage();
    }
    let onMsgChange = (e) => {
        let text = e.target.value; //достаем значение из элемента, который изменился
        props.updateNewMsgTxt(text);
     }
    return (
        <div className={s.dialogs}>
            <div>
                <button onClick={onAddMessage}>Add Message</button>
            </div>
            <div>
                <textarea onChange={onMsgChange}
                          value={state.newMsgText} />

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