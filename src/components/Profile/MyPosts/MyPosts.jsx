import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/State";

const MyPosts = (props) => {


    let postsElements = props.state.posts.map( p => <Post message={p.message} likes={p.likes} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        // props.addPost();
        props.dispatch(addPostActionCreator());
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text); //{type : 'UPD-NEW-POST-TEXT', newText : text};
        props.dispatch(action);
        // props.updateNewPostText(text);
    }
    return (
        <div className={s.postsBlock + ' ' + s.postWrapper}>
            <h3>My posts</h3>

            <div>
                <div>
                    <textarea ref={newPostElement}
                              onChange={onPostChange}
                                value={props.state.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;