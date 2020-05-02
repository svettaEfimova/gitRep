import { combineReducers, applyMiddleware, createStore } from "redux";
import textAreaReducer from "./text-reducer";
import thunkMiddleware from 'redux-thunk'


let reducers =combineReducers({
    textAreaPage: textAreaReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store= store;

export default store;