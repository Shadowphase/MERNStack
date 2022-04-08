import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cancelOrder, getOrders } from "../../state/cart/CartActions";
import CartItemComponent from "../cart/CartItemComponent";

const OrderComponent = (props)=>{
    let orders = useSelector((state)=>state.cartReducer.orders);
    let user = useSelector((state)=>state.userReducer.user);
    console.log("orders ", orders);

    let dispatcher = useDispatch();

    useEffect(()=>{
        dispatcher(getOrders(user._id, "pending"))
    }, []);

    let cancelOrderFunc = (event)=>{
        let orderId = event.target.value;
        console.log(orderId);
        dispatcher(cancelOrder(orderId));
        dispatcher(getOrders(user._id, "pending"));
    }

    return(<>
        <table>
            <tbody>
                {orders && orders.length>0?
                    orders.map((order)=>{
                        return <tr key={order._id}><td>
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
                                    }):null
                                }
                            </tbody>
                            </table>
                            </td><td><button onClick={cancelOrderFunc} value={order._id}>Cancel</button></td></tr>
                    }):null
                }
            </tbody>
        </table>
    </>);
}

export default OrderComponent;

// Upon MakePayment Click
// Save the cart to RecentOrders collection (should have userid, order, dateTime)
// Make API to Save and Fetch from RecentOrders
// Make a component RecentOrders to Show all previous Orders of current user
// Add a button to Cancel (like) we have remove in CartComponent and then save again, 
// order can be cancelled within 2 days after that it should be marked delivered

// Save the order to CancelledOrders collection (should have userid, cancelled, dateTime)
// Make API to Save and Fetch from CancelledOrders
// Make a component CancelledOrders to Show all cancelled Orders of current user in Latest First
// Add a button to Buy Again, (also show a message - This offer is much more exciting)
// Upon Adding this should get appended to the existing Cart that is shown in Carts App
