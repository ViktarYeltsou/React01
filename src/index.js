import './index.css';
import reportWebVitals from './reportWebVitals';
// import {subscribe} from './Redux/State.js'
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import App from "./App";
import store from "./Redux/reduxStore"; //State.js";

let renderEntireTree = (state) => {
    debugger;
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state}
                     dispatch={store.dispatch.bind(store)}
                     store={store}
                    />
            </React.StrictMode>
        </BrowserRouter>
        , document.getElementById('root')
    );
}
renderEntireTree(store.getState());

store.subscribe(renderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
