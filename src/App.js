import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {
    return (

            <div className='app-wrapper'>

                <Header/>
                <Navbar/>

                <div className='app-wrapper-content'>

                    <Route path="/dialogs"
                           render={ () => <DialogsContainer store={props.store}
                                                   // state={props.state.dialogsPage}
                                                   // dispatch={props.dispatch}
                                                   // addMessage={props.addMessage}
                                                   // updateNewMsgTxt={props.updateNewMsgTxt}
                           />}
                    />
                    <Route path="/profile"
                           render={ () => <Profile store={props.store}
                                                   // {props.state.profilePage}
                                                   //     state={props.state.profilePage}
                                                   // dispatch={props.dispatch}

                                                    // addPost={props.addPost}
                                                   // updateNewPostText={props.updateNewPostText}
                           />}
                    />

                </div>
            </div>
    );
}

export default App;