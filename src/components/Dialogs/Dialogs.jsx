import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElements = props.state.messages.map(m => <Message message={m.message} id={m.id}/>)
    let newMsg = React.createRef();
    let newMessage = () => {
        let text = newMsg.current.value;
        props.addMessage(text);
    }
    let onMsgChange = () => {
        let text = newMsg.current.value;
        props.updateNewMsgTxt(text);
    }
    return (
        <div className={s.dialogs}>
            <div>
                <button onClick={newMessage}>Add Message</button>
            </div>
            <div>
                <textarea onChange={onMsgChange}
                          ref={newMsg}
                          value={props.newMsgText}>
                </textarea>
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