import * as ActionType from "../ActionTypes";

const INITIAL_STATE = {
    user:{
        username:"",
        password:"",
        age:0,
        email:"",
        phone:0,
        address:"",
        _id:""
    }
}

const UserReducer = (prevState=INITIAL_STATE, action)=>{
    switch(action.type){
        case ActionType.USER_STORE:
            return {...prevState, user:action.payload.user};
        case ActionType.USER_EMPTY:
            return {...prevState, user:INITIAL_STATE.user};
        default:
            return prevState;
    }
}

export default UserReducer;