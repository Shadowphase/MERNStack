import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import UserReducer from "./user/UserReducer";
import user2Reducer from "./user/User2Reducer";

let logger = () => (next) => (action) => {
    console.log("Logged Action : Store File", action);

    next(action);
}

export default createStore (
    combineReducers({
        UserReducer,
        user2Reducer
    }),
    {},
    applyMiddleware(logger, thunk, promise)
)