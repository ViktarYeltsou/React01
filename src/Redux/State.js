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
    },
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likes: 15},
            {id: 2, message: "i'm fine!", likes: 10},
        ],
    },
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likes: 0,
    }
    state.profilePage.posts.push(newPost);
}

export default state;