import * as ActionType from "../ActionTypes";
import { getCart } from "../cart/CartActions";

export const addUser = (user)=>{
    return{
        type:ActionType.USER_STORE,
        payload: {user}
    }
}

export const loginUser = (user)=>{
    return function (dispatch, getState){
        window.fetch("http://localhost:3131/user/api/login",
            {
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(user)
            })
        .then(repsonse=>repsonse.json())
        .then(res => {
            console.log("reponse ", res);
            if(res.status==="invalid"){
                alert("Invalid username or password");
            }else{
                dispatch(addUser(res));
                dispatch(getCart(res._id));
            }
        })
        .catch();
    }
}

export const logout=()=>{
    return{
        type:ActionType.USER_EMPTY
    }
}