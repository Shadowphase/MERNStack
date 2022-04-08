import * as ActionTypes from "../ActionTypes";

let INITIAL_STATE = {
    user2:{
        username:"",
        password:"",
        age:0,
        email:"",
        phone:0,
        _id:""
    }
}

let User2Reducer = (previousState=INITIAL_STATE, action)=>{
    switch(action.type){
        case ActionTypes.addUser2ToStore:
            console.log("User2 reducer");
            return {...previousState, user2:action.payload.user}
        case ActionTypes.emptyData:
            return {...previousState, user2:INITIAL_STATE.user2}
        default:
            return previousState;
    }
}

export default User2Reducer;