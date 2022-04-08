import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {NavLink, useNavigate} from "react-router-dom";
import NotificationContainerComponent from "../component/notification/NotificationContainer";
import { logout } from "../state/user/UserAction";

let Header = (props)=>{
    let user = useSelector((state)=>state.userReducer.user);
    let username = user && user.username ? user.username : "Guest";
    let cartList = useSelector((state)=>state.cartReducer.cart);
    let [cartSize, setCartSize] = useState(null);

    let navigator = useNavigate();
    let headerDispatcher = useDispatch();

    const logoutFunc = ()=>{
        headerDispatcher(logout());
        navigator('/user');
    }

    useEffect(()=>{
        let sum = 0;
        for(let item of cartList){
            if(item.qty){
                sum+=item.qty;
            }else{
                ++sum;
            }
        }
        setCartSize(sum);
    });

    return(
        <>
            <h1>Hi, {username}</h1>
            { user._id!="" ? 
                <div>
                    <NavLink to="/cart" className="button rightJustify" activeclassname="success" >Cart {cartSize}</NavLink>
                    <button className="rightJustify" onClick={logoutFunc}>Logout</button>
                    <button className="notification" onClick={()=>{}}>Notification</button>
                    <NotificationContainerComponent/>
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