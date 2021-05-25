import {renderEntireTree} from "../Render";

let state = {
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Victor'},
            {id: 2, name: 'Archy'},
            {id: 3, name: 'Ruslan'},
            {id: 4, name: 'Sega'},
            {id: 5, name: 'Igorek'},
        ],
        messages: [
            {id: 1, message: 'Hi every body!'},
            {id: 2, message: "We've got our own WEB!"},
            {id: 3, message: 'Congratulations!!'},
        ],
        newMsgText: 'newMsg'
    },
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likes: 15},
            {id: 2, message: "i'm fine!", likes: 10},
        ],
        newPostText: 'newPostText',

    },
}
export let addMesaage = () => {
    let newMessage = {
        id: 4,
        message: state.dialogsPage.newMessage,
    }
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessage = '';
    renderEntireTree(state);
}
export let updateNewMsgTxt = (newMsg) => {
    state.dialogsPage.newMessage = newMsg;
    renderEntireTree(state);
}
export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likes: 0,
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
}
export let updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}

export default state;