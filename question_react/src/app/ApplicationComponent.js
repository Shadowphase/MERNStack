import React, { Component } from "react";
import Loadable from "react-loadable";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import Header from "./common/HeaderComponent";
// import Name from "./common/NameComponent";
// import User from "../app/component/user/UserComponent";
// import Product from "../app/component/product/ProductComponent";
// import About from "./common/AboutComponent";
// import Cart from "./component/cart/CartComponent";
// import Checkout from "./component/checkout/CheckoutComponent";
// import Coupon from "./component/coupon/CouponComponent";
// import Orders from "./component/order/OrderComponent";
// import CancelledOrders from "./component/order/CancelledOrderComponent";
import "./app.css";

function loading(){
    return(<>Loading</>);
}

const Header = Loadable({
    loader: ()=> import("./common/HeaderComponent"),
    loading
});

const Name = Loadable({
    loader: ()=> import("./common/NameComponent"),
    loading
});

const User = Loadable({
    loader: ()=> import("../app/component/user/UserComponent"),
    loading
});

const Product = Loadable({
    loader: ()=> import("../app/component/product/ProductComponent"),
    loading
});

const About = Loadable({
    loader: ()=> import("./common/AboutComponent"),
    loading
});

const Cart = Loadable({
    loader: ()=> import("./component/cart/CartComponent"),
    loading
});

const Checkout = Loadable({
    loader: ()=> import("./component/checkout/CheckoutComponent"),
    loading
});

const Coupon = Loadable({
    loader: ()=> import("./component/coupon/CouponComponent"),
    loading
});

const Orders = Loadable({
    loader: ()=> import("./component/order/OrderComponent"),
    loading
});

const CancelledOrders = Loadable({
    loader: ()=> import("./component/order/CancelledOrderComponent"),
    loading
});

export default class AppComponent extends Component{
    constructor(props){
        super(props);

        this.state={
            myName:"Cody"
        }
    }

    render(){
        return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/product" element={<Product />} />
                <Route path="/about" element={<About />} /> 
                <Route path="/user" element={<User />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/coupon" element={<Coupon />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/cancelledOrders" element={<CancelledOrders />} />
                <Route path="/" element={<Name myName={this.state.myName} />} />
            </Routes>
        </Router>
        );
    }
}