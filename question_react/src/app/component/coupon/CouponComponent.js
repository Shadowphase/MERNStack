import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCoupon } from "../../state/coupon/CouponAction";

const CouponComponent = ()=>{
    let coupon = useSelector((state)=>state.couponReducer.coupon);
    let [discount, setDiscount] = useState(coupon);
    let dispatch = useDispatch();

    console.log("dis1", discount);

    let generateCoupon = ()=>{
        console.log("dis2", discount);
        const calc = Math.floor(Math.random()*41)+10;
        setDiscount(calc);
        console.log("dis3", calc);
        dispatch(addCoupon(calc));
    }

    return (<>
        <h1>Coupon Page</h1>
        {!discount || discount==0?
            <button onClick={generateCoupon}>Get Coupon</button>
            :<h2>Your discount is ${discount}</h2>
        }
    </>)
}

export default CouponComponent;