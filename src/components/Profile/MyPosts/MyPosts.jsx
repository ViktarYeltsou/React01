import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {

    let postsElements =
        props.posts.map( p => <Post message={p.message} likes={p.likes} />)

    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    }
    return (
        <div className={s.postsBlock + ' ' + s.postWrapper}>
            <h3>My posts</h3>

            <div>
                <div>
                    <textarea
                              onChange={onPostChange}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;