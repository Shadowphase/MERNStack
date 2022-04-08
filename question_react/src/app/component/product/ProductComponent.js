import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveProduct } from "../../state/product/ProductAction";
import DisplayProducts from "./DisplayProduct";

let UserComponent = ()=>{
    let defaultProduct = useSelector((state)=>state.productReducer.defaultProduct);
    let user = useSelector((state)=>state.userReducer.user);
    let dispatchProd = useDispatch();

    const [prodName, setName] = useState(defaultProduct.prodName); 
    const [price, setPrice] = useState(defaultProduct.price);
    const [desc, setDescription] = useState(defaultProduct.desc);
    const [rating, setRating] = useState(defaultProduct.rating);

    let handleSubmit = (event)=>{
        event.preventDefault();
        let prod = {
            prodName,
            price,
            desc,
            rating
        }

        dispatchProd(saveProduct(prod));
    }

    return (<>
        <h1>Product Form</h1>
        <form className={"form col-md-10"} onSubmit={handleSubmit}>
            <label>
                <b>Name</b>
                <input type="text" className="form-control col-md-12" placeholder="Product Name" 
                    value={prodName} onChange={(evt)=>setName(evt.target.value)} readOnly={(user && user.username.toLowerCase()!=='admin')}/>
            </label>
            <label>
                <b>Price</b>
                <input type="number" step="0.01" className="form-control col-md-12" value={price} 
                    onChange={(evt)=>setPrice(evt.target.value)} readOnly={(user && user.username.toLowerCase()!=='admin')}/>
            </label>
            <label>
                <b>Rating</b>
                <input type="number" step="0.1" className="form-control col-md-12" value={rating} 
                    onChange={(evt)=>setRating(evt.target.value)} readOnly={(user && user.username.toLowerCase()!=='admin')}/>
            </label>
            <label>
                <b>Description</b>
                <input type="textarea" className="form-control col-md-12" value={desc} 
                    onChange={(evt)=>setDescription(evt.target.value)} readOnly={(user && user.username.toLowerCase()!=='admin')}/>
            </label>
            { (user && user.username.toLowerCase()==='admin') ?
                <input type="submit" className={"btn btn-primary col-md-2"} value={"Save"} />
            :""}
        </form>
        <DisplayProducts/>
    </>)   
}

export default UserComponent;

// Create a product component using functional component and hooks (try using use state to read default values from reducer)
// Create a form to allowuser to submit Product Details - name, price, desc, rating
// Create an action method to add the detail to database using a server api
// Server Side - Create product router and api to save the product using productdatamodel