import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}
                // state={props.state}
                     // dispatch={props.dispatch}
                     // // addPost={props.addPost}
                     // // newPostText={props.state.newPostText}
                     // // updateNewPostText={props.updateNewPostText}
            />
        </div>
    );
}
export default Profile;