const ADD_POST = 'ADD-POST';
const UPD_NEW_POST_TXT = 'UPD-NEW-POST-TEXT';

let initialState = {
    newPostText: 'newPostText',
    posts: [
        {id: 1, message: 'Hi, how are you?', likes: 15},
        {id: 2, message: "i'm fine!", likes: 10},
    ],
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likes: 0,
            }
            state.posts.push(newPost);
            state.newPostText = ' ';
            return state;
        case UPD_NEW_POST_TXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }

}
export const addPostActionCreator = () => ({type : ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type : UPD_NEW_POST_TXT, newText: text});

export default profileReducer;