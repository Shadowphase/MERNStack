import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { saveToOrders } from "../../state/cart/CartActions";
import CartItemComponent from "../cart/CartItemComponent";
import CartSummaryComponent from "../cart/CartSummaryComponent";

const Checkout = ()=>{
    let user = useSelector((state)=>state.userReducer.user);
    let cartList = useSelector((state)=>state.cartReducer.cart);
    let coupon = useSelector((state)=>state.couponReducer.coupon);

    let dispatcher = useDispatch();
    let navigator = useNavigate();

    const calculate = (cartItems)=>{
        let subtotal = 0, count = 0;
        for(let item of cartItems){
            subtotal += item.qty * item.price;
            count += item.qty;
        }

        console.log("coupon", coupon);
        return {subtotal, discount:coupon, count};
    }

    const func = function(event){
        event.preventDefault();
        console.log("user in func", user);
        dispatcher(saveToOrders(cartList, user._id));
        navigator('/orders');
    }

    return (<>
        <h2>Review Order {coupon}</h2>
        <div><b>Name: {user.username}</b></div>
        <div><b>Shipping address: {user.address}</b></div>
        {cartList && cartList.length > 0 ?
            <Fragment>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Rating</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartList.map((cartItem)=>{
                                return <CartItemComponent item={cartItem} readOnly={true} key={cartItem._id} />
                            })
                        }
                    </tbody>
                </table>
            </Fragment>
            : <b>Cart is empty.</b>
        }
        <div><NavLink to="/coupon" className="button" activeclassname="success" >Get Coupon</NavLink></div>
        <CartSummaryComponent data={calculate(cartList)}/>
        
        <button onClick={func}>Payment</button>
    </>)
}

export default Checkout;