import * as ActionTypes from "../ActionTypes";
import * as Notifications from "../../common/Notifications";

let INITIAL_STATE = {notifications:Notifications.initNotifications()}

let NotificationReducer = (prevState=INITIAL_STATE, action)=>{
    console.log("reducer ", prevState, action);
    let notifIndex;
    switch(action.type){
        case ActionTypes.NOTIFICATION_UPDATE:
            notifIndex = prevState.notifications.findIndex((notif => notif.name == action.payload.name));
            prevState.notifications[notifIndex].qty = action.payload.qty;
            prevState.notifications[notifIndex].viewed = action.payload.viewed;
            return {...prevState};
        case ActionTypes.NOTIFICATION_REMOVE:
            notifIndex = prevState.notifications.findIndex((notif => notif.name == action.payload));
            prevState.notifications.splice(notifIndex,1);
            return {...prevState};
        default:
            return prevState;
    }
}

export default NotificationReducer;