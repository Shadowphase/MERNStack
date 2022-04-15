export const CART = "cart";
export const ORDERS = "orders";
export const CANCELLED_ORDERS = "cancelledOrders";
export const PRODUCTS = "products";
export const CHECKOUT = "checkout";

export const initNotifications = ()=>{
    return [
        {
            name:CART,
            qty:1,
            viewed:false,
            url:"/cart"
        },
        {
            name:ORDERS,
            qty:1,
            viewed:false,
            url:"/orders"
        },
        {
            name:PRODUCTS,
            qty:1,
            viewed:false,
            url:"/products"
        }
    ];
}