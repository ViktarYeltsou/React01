import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {subscribe} from './Redux/State.js'
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import App from "./App";
import {addMessage, addPost, updateNewMsgTxt, updateNewPostText} from "./Redux/State";

let renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state}
                     addPost={addPost}
                     addMessage={addMessage}
                     updateNewMsgTxt={updateNewMsgTxt}
                     updateNewPostText={updateNewPostText}/>
            </React.StrictMode>
        </BrowserRouter>
        , document.getElementById('root')
    );
}
renderEntireTree(state);

subscribe(renderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
