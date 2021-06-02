
let store = {

    _renderEntireTree() {}, //заглушка, будет переопределена из subsribe

    _state: {
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
            newMsgText: 'newMsg',
        },
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likes: 15},
                {id: 2, message: "i'm fine!", likes: 10},
            ],
            newPostText: 'newPostText',

        },
    },
    getState(){
        return this._state;
    },
    setNewMsgTxt(newMsg){
        this._state.dialogsPage.newMsgText = newMsg;
    },
    addMessage() {
        debugger;
        let newMessage = {
            id: 4,
            message: this._state.dialogsPage.newMsgText
        }
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMsgText = '';
        this._renderEntireTree(this._state);
    },
    updateNewMsgTxt(newMsg){
        this.setNewMsgTxt(newMsg);
        this._renderEntireTree(this.getState);
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likes: 0,
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._renderEntireTree(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._renderEntireTree(this._state);
    },

    subscribe(observer) {
        this._renderEntireTree = observer;
    }
}
export default store;//state;
