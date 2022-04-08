import * as ActionType from "../ActionTypes";

export const addToCart = (item)=>({
    type:ActionType.CART_ADD,
    payload:{item}
});

export const emptyCart = ()=>({
   type:ActionType.CART_EMPTY 
});

export const removeItem = (id)=>({
    type:ActionType.CART_REMOVE,
    payload:{id}
});

export const updateItem = (id, qty)=>({
    type:ActionType.CART_UPDATE,
    payload:{id, qty:parseInt(qty)}
});

export const addOrders = (orders)=>({
    type:ActionType.ORDER_STORE,
    payload:{orders}
});

export const saveCart = (cart, userId)=>{
    console.log("save cart", cart, userId);
    return function(dispatch){
        window.fetch("http://localhost:3131/cart/api/saveCart", {
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({userId, cart})
        })
        .then(res=>res.json())
        .then(cartRes=>{
            console.log("saved cart ", cartRes);

        })
        .catch((err)=>{
            console.log("Error saving cart", err);
        });
    }
}

export const getCart = (userId)=>{
    return function(dispatch){
        window.fetch("http://localhost:3131/cart/api/getCart/"+userId, {
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(res=>res.json())
        .then(cartRes=>{
            console.log("Got cart ", cartRes);
            dispatch(emptyCart());

            for (const item of cartRes.cart) {
                console.log("item in for of", item);
                dispatch(addToCart(item));
            }      
        })
        .catch((err)=>{
            console.log("Error getting cart", err);
        });
    }
}

export const saveToOrders = (order, userId)=>{
    let payload = {userId, order, orderDate:Date.now(), status:"pending"};
    console.log("save orders", payload);
    return function(dispatch){
        window.fetch("http://localhost:3131/cart/api/saveToOrders", {
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(payload)
        })
        .then(res=>res.json())
        .then(orderRes=>{
            console.log("saved order ", orderRes);
            dispatch(getOrders(userId, "pending"));
            dispatch(emptyCart());
        })
        .catch((err)=>{
            console.log("Error getting cart", err);
        });
    }
}

export const getOrders = (userId, status)=>{
    console.log("get orders", userId);
    return function(dispatch){
        window.fetch("http://localhost:3131/cart/api/getOrders/"+userId+"/"+status, {
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(res=>res.json())
        .then(orderRes=>{
            console.log("Got orders ", orderRes);
            dispatch(addOrders(orderRes));
        })
        .catch((err)=>{
            console.log("Error getting orders", err);
        });
    }
}

export const cancelOrder = (orderId)=>{
    console.log("cancel order", orderId);
    return function(dispatch){
        window.fetch("http://localhost:3131/cart/api/cancelOrder", {
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({orderId})
        })
        .then(res=>res.json())
        .then(orderRes=>{
            console.log("saved order ", orderRes);
        })
        .catch((err)=>{
            console.log("Error getting cart", err);
        });
    }
}