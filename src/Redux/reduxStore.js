import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReduser";

let reducers = combineReducers({
    sidebar : sidebarReducer,
    profilePage : profileReducer,
    dialogsPage : dialogsReducer,

});

let store = createStore(reducers);


export default store;