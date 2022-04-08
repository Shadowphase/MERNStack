import * as ActionTypes from "../ActionTypes";
import * as Notifications from "../../common/Notifications";

let INITIAL_STATE = {notifications:Notifications.initNotifications()}

let NotificationReducer = (prevState=INITIAL_STATE, action)=>{
    console.log("reducer ", prevState, action);
    switch(action.type){
        default:
            console.log("prevState", prevState);
            return prevState;
    }
}

export default NotificationReducer;