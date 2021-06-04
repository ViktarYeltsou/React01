import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReduser";

let store = {
    _state: {
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Victor'},
                {id: 2, name: 'Archy'},
                {id: 3, name: 'Ruslan'},
                {id: 4, name: 'Sega'},
                {id: 5, name: 'Ignore'},
            ],
            messages: [
                {id: 1, message: 'Hi every body!'},
                {id: 2, message: "We've got our own WEB!"},
                {id: 3, message: 'Congratulations!!'},
            ],
            newMsgText: 'newMsg',
        },
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likes: 15},
                {id: 2, message: "i'm fine!", likes: 10},
            ],
            newPostText: 'newPostText',

        },
        sidebar: {},
    },
    _callSubscriber() {}, //заглушка, будет переопределена из subscribe

    getState(){
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    // addMessage() {
    //     let newMessage = {
    //         id: 4,
    //         message: this._state.dialogsPage.newMsgText
    //     }
    //     this._state.dialogsPage.messages.push(newMessage);
    //     this._state.dialogsPage.newMsgText = '';
    //     this._callSubscriber(this.getState());
    // },
    // addPost() {
    //     let newPost = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText,
    //         likes: 0,
    //     }
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = ' ';
    //     this._callSubscriber(this.getState());
    // },
    // updateNewMsgTxt(newMsg){
    //     this.setNewMsgTxt(newMsg);
    //     this._callSubscriber(this.getState());
    // },
    // updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this.getState());
    // },

    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this.getState());


        // if (action.type === ADD_MESSAGE) {this.addMessage();}
        // else if (action.type === ADD_POST) {this.addPost()}
        // else if (action.type === UPD_NEW_MSG_TXT) {this.updateNewMsgTxt(action.newMsg)}
        // else if (action.type === UPD_NEW_POST_TXT) {this.updateNewPostText(action.newText)}
    }
}

export default store;//state;
window.store = store;