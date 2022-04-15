import * as ActionTypes from "../ActionTypes";

export const addNotification = (name, qty, viewed, url)=>({
    type:ActionTypes.NOTIFICATION_STORE,
    payload:{
        name,
        qty,
        viewed,
        url
    }
});

export const updateNotification = (name, qty, viewed)=>({
    type:ActionTypes.NOTIFICATION_UPDATE,
    payload:{
        name,
        qty,
        viewed
    }
});

export const removeNotification = (name)=>({
    type:ActionTypes.NOTIFICATION_REMOVE,
    payload:name
})