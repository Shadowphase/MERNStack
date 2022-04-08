import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../state/cart/CartActions";
import CartItemComponent from "../cart/CartItemComponent";

const CancelledOrderComponent = (props)=>{
    let user = useSelector((state)=>state.userReducer.user);
    let orders = useSelector((state)=>state.cartReducer.orders);
    console.log("orders ", orders);
    
    let dispatcher = useDispatch();

    useEffect(()=>{
        dispatcher(getOrders(user._id, "cancelled"))
    }, []);

    return(<>
        <table>
            <tbody>
                {orders && orders.length>0?
                    orders.map((order)=>{
                        return <tr><td>
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
                                {order.order && order.order.length>0?
                                    order.order.map((product)=>{ 
                                        return <CartItemComponent item={product} readOnly={true} key={product._id} />
                                    }):""
                                }
                            </tbody>
                            </table>
                        </td></tr>
                    }):""
                }
            </tbody>
        </table>
    </>);
}

export default CancelledOrderComponent;