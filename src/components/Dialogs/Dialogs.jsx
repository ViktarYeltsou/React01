import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );

}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Victor'},
        {id: 2, name: 'Archy'},
        {id: 3, name: 'Ruslan'},
        {id: 4, name: 'Sega'},
        {id: 5, name: 'Igorek'},
    ]

    let messageData = [
        {id: 1, message: 'Hi every body!'},
        {id: 2, message: "We've got our own WEB!"},
        {id: 3, message: 'Congratulations!!'},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>

            </div>
            <div className={s.messages}>
                <Message message={messageData[0].message}/>

            </div>
        </div>
    );
}

export default Dialogs;