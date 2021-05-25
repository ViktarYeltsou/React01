import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import App from "./App";
import {addMesaage, addPost, updateNewMsgTxt, updateNewPostText} from "./Redux/State";

export let renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state}
                     addPost={addPost}
                     addMessage={addMesaage}
                     updateNewMsgTxt={updateNewMsgTxt}
                     updateNewPostText={updateNewPostText}/>
            </React.StrictMode>
        </BrowserRouter>
        , document.getElementById('root')
    );
}
