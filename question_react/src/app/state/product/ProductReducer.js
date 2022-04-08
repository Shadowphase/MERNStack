import * as ActionType from "../ActionTypes";

let INITIAL_STATE = {
    products:[],
    defaultProduct: {
        prodName:"",
        price:0.0,
        desc:"",
        rating:0.0
    }
}

let ProductReducer = (prevState=INITIAL_STATE, action)=>{
    switch(action.type){
        case ActionType.PRODUCT_STORE:
            return {...prevState, products:action.payload.products}
        default:
            return prevState;
    }
}

export default ProductReducer;