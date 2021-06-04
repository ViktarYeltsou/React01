const ADD_POST = 'ADD-POST';
const UPD_NEW_POST_TXT = 'UPD-NEW-POST-TEXT'
const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likes: 15},
        {id: 2, message: "i'm fine!", likes: 10},
    ],
    newPostText: 'newPostText',
}
const profileReducer = (state = initialState, action) => {
    if (action.type === ADD_POST) {
        let newPost = {
            id: 5,
            message: state.newPostText,
            likes: 0,
        }
        state.posts.push(newPost);
        state.newPostText = ' ';
        return state;
    }
    else if (action.type === UPD_NEW_POST_TXT) {
        state.newPostText = action.newText;
        return state;
    }
}
export const addPostActionCreator = () => ({type : ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type : UPD_NEW_POST_TXT, newText: text});

export default profileReducer;