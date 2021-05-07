import s from './MyPosts.module.css'
import Post from "./Post/Post";
const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                New post
            </div>
            <div className={s.posts}>
                <Post message='How are you&' likes={15}/>
                <Post message="i 'm fine!" likes={10}/>

            </div>
        </div>
    );
}

export default MyPosts;