import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    debugger;
    return (
        <div>
            <ProfileInfo/>
            <MyPosts state={props.state.posts}
                     dispatch={props.dispatch}
                     // addPost={props.addPost}
                     // newPostText={props.state.newPostText}
                     // updateNewPostText={props.updateNewPostText}
            />
        </div>
    );
}
export default Profile;