import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    let postData = [
        {id: 1, message: 'Hi, how are you?', likes: 15},
        {id: 2, message: "i'm fine!", likes: 10},
    ]

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>

            <div>
                <div>
                    <textarea>
                        Enter next here
                    </textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message={postData[0].message} likes={postData[0].likes} />
                <Post message={postData[1].message} likes={postData[1].likes} />
            </div>
        </div>
    );
}

export default MyPosts;