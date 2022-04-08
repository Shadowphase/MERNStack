import * as ActionTypes from "../ActionTypes";

let INITIAL_STATE = {
    user: {
        username:"",
        password:"",
        street:"Somewhere",
        mobile:0,
        _id: ""
    }
}

let UserReducer = (previousState = INITIAL_STATE, action) =>{
    switch(action.type){
        case ActionTypes.addUserToStore:
            console.log("user reducer addUserToStore");
            return {...previousState, user:action.payload.user}
        default:
            return previousState;
    }
}

export default UserReducer;