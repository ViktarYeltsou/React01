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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Victor' id='1'/>
                <DialogItem name='Archy' id='2'/>
                <DialogItem name='Ruslan' id='3'/>
                <DialogItem name='Sega' id='4'/>
                <DialogItem name='Igorek' id='5'/>
            </div>
            <div className={s.messages}>
                <Message message='Hi every body!'/>
                <Message message="We've got our own WEB!"/>
                <Message message='Congratulations!!'/>
            </div>
        </div>
    );
}

export default Dialogs;