import * as ActionType from "../ActionTypes";

export const addCoupon = (discount)=>({
    type: ActionType.COUPON_STORE,
    payload:{coupon:discount}
});