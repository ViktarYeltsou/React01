import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let dialogs = [
    {id: 1, name: 'Victor'},
    {id: 2, name: 'Archy'},
    {id: 3, name: 'Ruslan'},
    {id: 4, name: 'Sega'},
    {id: 5, name: 'Igorek'},
]

let messages = [
    {id: 1, message: 'Hi every body!'},
    {id: 2, message: "We've got our own WEB!"},
    {id: 3, message: 'Congratulations!!'},
]
let posts = [
    {id: 1, message: 'Hi, how are you?', likes: 15},
    {id: 2, message: "i'm fine!", likes: 10},
]
ReactDOM.render(
  <React.StrictMode>
    <App dg={dialogs} msg={messages} pst={posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
