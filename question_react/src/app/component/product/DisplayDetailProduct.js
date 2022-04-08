import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../state/cart/CartActions";

let DisplayDetailedProduct = ({product})=>{
    let [view, toggleDetails] = useState(false);
    let addToCartDispatcher = useDispatch(); 
    let addToCartFunc = (product)=>{
        addToCartDispatcher(addToCart(product))
    }

    return (
        <ul className="product">
            <li className="prodcut" onClick={()=>toggleDetails(!view)}>{product.prodName}</li>
                {view ? 
                <ul>
                    <li>{product.price}</li>
                    <li>{product.desc}</li>
                    <li>{product.rating}</li>
                    <button onClick={()=>addToCartFunc(product)}>Add To Cart</button>
                </ul>
                :""}
        </ul>
    )
}

export default DisplayDetailedProduct;