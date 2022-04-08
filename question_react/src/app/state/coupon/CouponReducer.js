import * as ActionType from "../ActionTypes";

let INITIAL_STATE = {
    coupon:0
}

let CouponReducer = (prevState = INITIAL_STATE, action)=>{
    switch(action.type){
        case ActionType.COUPON_STORE:
            return {...prevState, coupon:action.payload.coupon};
        default:
            return prevState;
    }
}

export default CouponReducer;