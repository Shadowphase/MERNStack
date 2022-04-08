import * as ActionTypes from "../ActionTypes";

export const addProducts = (products)=>({
    type: ActionTypes.PRODUCT_STORE,
    payload:{products}
});

export const saveProduct = (product)=>{
    console.log("saving product", product);
    return function (dispatch, getState){
        window.fetch("http://localhost:3131/prod/api/save",{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(product)
        })
        .then(res=>res.json())
        .then(prod=>{
            console.log("saved ", prod);
            dispatch(fetchProducts());
        })
        .catch((err)=>{
            console.log("Error saving product", err)
        })
    }
}

export const fetchProducts = ()=>{
    return function (dispatch){
        window.fetch("http://localhost:3131/prod/api/getProducts",{
            method:'GET'
        })
        .then(response=>response.json())
        .then((prodResp)=>{
            console.log("getP ", prodResp);
            dispatch(addProducts(prodResp));
        })
        .catch((err)=>{
            console.log("Error fetching products", err)
        })
    }
}