import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {NavLink, useNavigate} from "react-router-dom";
import { updateNotification } from "../state/notifications/NotificationActions";
import { logout } from "../state/user/UserAction";
import * as Notifications from "../common/Notifications";
import NotificationContainerComponent from "../component/notification/NotificationContainer";

let Header = (props)=>{
    let user = useSelector((state)=>state.userReducer.user);
    let username = user && user.username ? user.username : "Guest";
    let cartList = useSelector((state)=>state.cartReducer.cart);
    let [cartSize, setCartSize] = useState(null);
    let gotCart = true;

    let navigator = useNavigate();
    let headerDispatcher = useDispatch();

    const logoutFunc = ()=>{
        headerDispatcher(logout());
        navigator('/user');
    }

    useEffect(()=>{
        console.log("header didmount", cartList);
        gotCart = false;
    }, []);

    useEffect(()=>{
        setCartSize(getCartSum());
        if(!gotCart){
            console.log("got cart");
            headerDispatcher(updateNotification(Notifications.CART, getCartSum(), false));
            gotCart = true;
        }
    });

    function getCartSum(){
        let sum = 0;
        for(let item of cartList){
            if(item.qty){
                sum+=item.qty;
            }else{
                ++sum;
            }
        }
        return sum;
    }

    return(
        <>
            <h1>Hi, {username}</h1>
            { user._id!="" ? 
                <div>
                    <NavLink to="/cart" className="button rightJustify" activeclassname="success" >Cart {cartSize}</NavLink>
                    <button className="rightJustify" onClick={logoutFunc}>Logout</button>
                    <NotificationContainerComponent />
                </div> : "" }
            <hr/>
            <NavLink to="/" className="button" activeclassname="success" >Home</NavLink>
            <NavLink to="/about" className="button" activeclassname="success" >About</NavLink>
            { user._id!=""?"":
                <NavLink to="/user" className="button" activeclassname="success" >Login</NavLink>
            }
            { user._id!="" ?
                <Fragment>
                    <NavLink to="/product" className="button" activeclassname="success" >Product</NavLink>
                    <NavLink to="/orders" className="button" activeclassname="success" >Order History</NavLink>
                    <NavLink to="/cancelledOrders" className="button" activeclassname="success" >Cancelled Orders</NavLink>
                </Fragment>
            :""} 
            <hr/>
        </>
    )
}

export default Header;

//Coding Test 2
//create navigations for your own name page
// also move to that page on button click
// make a route with path params in it