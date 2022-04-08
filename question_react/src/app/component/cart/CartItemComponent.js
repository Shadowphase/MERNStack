import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";

import { removeItem, updateItem, emptyCart } from "../../state/cart/CartActions";

const CartItemComponent = ({item, readOnly})=>{
    let [qty, setQty] = useState(item.qty);
    let cartDispatcher = useDispatch();

    let removeFromCart = (prodId)=>{
        cartDispatcher(removeItem(prodId));
    }

    let updateCart = (prodId, qty)=>{
        console.log("update cart");
        if(qty==0){
            removeFromCart(prodId);
        }else{
            cartDispatcher(updateItem(prodId, qty));
        }
    }

    return (
        <tr>
            <td>{item.prodName}</td>
            <td>{item.price}</td>
            <td>{item.desc}</td>
            <td>{item.rating}</td>
            <td>
                {!readOnly ? 
                    <input type="number" value={qty} onChange={(evt)=>{setQty(evt.target.value)}} maxLength="2" />
                    : item.qty
                }
            </td>
            <td>{item.price*item.qty}</td>
            {readOnly ? null:
                <Fragment>
                    <td><button onClick={()=>removeFromCart(item._id)}>Remove</button></td>
                    <td><button onClick={()=>updateCart(item._id, qty)}>Update</button></td>
                </Fragment>
            }
        </tr>
    );
}

export default CartItemComponent;