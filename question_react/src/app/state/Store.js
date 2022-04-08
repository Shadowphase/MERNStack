import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import userReducer from "./user/UserReducer";
import productReducer from "./product/ProductReducer";
import cartReducer from "./cart/CartReducer";
import couponReducer from "./coupon/CouponReducer";
import notificationReducer from "./notifications/NotificationReducer";

let logger = () => (next) => (action) => {
    console.log("Logged Action : Store File", action);
    next(action);
}

export default createStore (
    combineReducers({
        userReducer,
        productReducer,
        cartReducer,
        couponReducer,
        notificationReducer
    }),
    {},
    applyMiddleware(logger, thunk, promise)
)