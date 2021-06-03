import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElements = props.state.messages.map(m => <Message message={m.message} id={m.id}/>)
    let newMsgElement = React.createRef();

    let addMessage = () => {
        props.dispatch({ type: 'ADD-MESSAGE'});
        // props.addMessage();
    }
    let onMsgChange = () => {
        let text = newMsgElement.current.value;
        let action = { type: 'UPD-NEW-MSG-TEXT', newMsg: text};
        props.dispatch(action);
        // props.updateNewMsgTxt(text);
    }
    return (
        <div className={s.dialogs}>
            <div>
                <button onClick={addMessage}>Add Message</button>
            </div>
            <div>
                <textarea onChange={onMsgChange}
                          ref={newMsgElement}
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