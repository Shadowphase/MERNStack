import React from "react";
import { useSelector, useDispatch } from "react-redux";
import DisplayDetailedProduct from "./DisplayDetailProduct";
import { fetchProducts } from "../../state/product/ProductAction";

let DiplayProducts = (props)=>{
    let products = useSelector((state)=>state.productReducer.products);
    let productDispatcher = useDispatch();
    
    products && products.length < 1 ? productDispatcher(fetchProducts()) : "";

    return(
        <>
            <h2>Below products are available</h2>
            <div>
                {products && products.length > 0 ?
                    products.map((product)=>{
                        return <DisplayDetailedProduct product={product} key={product._id}/>
                    }):<b>No products available.</b>
                }
            </div>
        </>
    )
}

export default DiplayProducts;