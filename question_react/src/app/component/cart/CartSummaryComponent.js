import React, { Fragment } from "react";

const CartSummaryComponent = (props)=>{
    let {count, subtotal, discount, total = subtotal-subtotal*discount/100} = props.data;

    return(
        <div>
            <h2>Cart Summary</h2>
            <b>Items: {count}</b><br/>
            <b>Subtotal: {subtotal}</b><br/>
            {discount?
                <Fragment><b>Discount: {discount}%</b><br/></Fragment>
                :""
            }
            <b>Total: {total}</b>
        </div>
    )
}

export default CartSummaryComponent;