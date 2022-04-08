import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItemComponent from "./CartItemComponent";
import CartSummaryComponent from "./CartSummaryComponent";
import { getCart, saveCart } from "../../state/cart/CartActions";

let CartComponent = (props)=>{
    let cartList = useSelector((state)=>state.cartReducer.cart);
    let user = useSelector((state)=>state.userReducer.user);
    console.log("CARTLIST", cartList);

    const cartDispatcher = useDispatch(); 

    const recalculate = (cartItems)=>{
        let amount = 0, count = 0;
        for(let item of cartItems){
            amount += item.qty * item.price;
            count += item.qty;
        }

        return {subtotal:amount, count, discount:0};
    }

    const saveCartFunc = (cartListObj, userId)=>{
        console.log("saving cart", cartListObj, userId);
        if(!userId){
            alert("Please loging to save");
        }else{
            cartDispatcher(saveCart(cartListObj, userId));
        }
    }

    const navigate = useNavigate();
    const func = function(event){
        event.preventDefault();

        if(user._id==""){
            alert("Please log in to continue.");
            navigate('/user');
        }else{
            navigate('/checkout');
        }
    }
    
    useEffect(()=>{
        return function cleanup() {
            //saveCartFunc(cartList, user._id);
        };
    });
    
    useEffect(()=>{
        //cartDispatcher(getCart(user._id));
        //cartList = useSelector((state)=>state.cartReducer);
    },[]);

    return (
        <>
            <h1>Cart</h1>
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
                                {
                                    props.readOnly ? null :
                                        <Fragment>
                                            <th>Remove</th>
                                            <th>Edit</th>
                                        </Fragment>
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartList.map((cartItem)=>{
                                    return <CartItemComponent item={cartItem} readOnly={props.readOnly} key={cartItem._id} />
                                })
                            }
                        </tbody>
                    </table>
                </Fragment>
                : <b>Cart is empty.</b>
            }
            <CartSummaryComponent data={recalculate(cartList)}/>
            {
                props.readOnly ? null :
                <Fragment>
                    <button onClick={()=>saveCartFunc(cartList, user._id)}>Save Cart</button>
                    <button onClick={func}>Checkout</button>
                </Fragment>
            }
        </>
    )
}

export default CartComponent;