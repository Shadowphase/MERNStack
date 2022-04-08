import * as ActionType from "../ActionTypes";

const INITIAL_STATE = {cart:[]};

export default function CartReducer(state = INITIAL_STATE, action){
    switch(action.type){
        case ActionType.CART_ADD:
            let newState = state.cart.filter(item => item._id != action.payload.item._id);
            !action.payload.item["qty"] ? action.payload.item["qty"]=1 : action.payload.item["qty"]+=1;

            return {cart:[...newState, action.payload.item]};
        case ActionType.CART_EMPTY:
            return INITIAL_STATE;
        case ActionType.CART_REMOVE:
            return state.filter(item=>item._id!=action.payload.id);
        case ActionType.CART_UPDATE:
            console.log("update cart ", action.payload);
            return {cart:state.cart.map((item)=>{
                if(item._id == action.payload.id){
                    return {...item, qty:action.payload.qty};
                }
                return item;
            })};
        case ActionType.ORDER_STORE:
            return {...state, orders:action.payload.orders};
        default:
            return state;
    }
}