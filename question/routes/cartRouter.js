let express = require("express");
let router = express.Router({});
let CartDataModel = require("../datamodel/CartDataModel");
let OrderDataModel = require("../datamodel/OrderDataModel");


router.post("/saveCart", (req, res)=>{
    console.log("save cart ", req.body);
    CartDataModel.findOne({userId: req.body.userId}, (err, cartObj)=>{
        if(err){
            console.log(JSON.stringify("Error fetching cart ", err));
            res.send(JSON.stringify("Error " + err));
        }

        if(!cartObj){
            console.log("Cart empty");
            let cartObj = new CartDataModel(req.body);
            cartObj.save((err, data, next)=>{
                if(err){
                    res.send(JSON.stringify("Error adding item" + err));
                }
                res.json(data);
            });
        }else{
            console.log("Replacing cart ", cartObj.cart, req.body.cart);
            cartObj.cart = req.body.cart;
            cartObj.save((err, data, next)=>{
                if(err){
                    res.send(JSON.stringify("Error saving cart " + err));
                }
                res.json(data);
            });
        }
    });
});

router.get("/getCart/:userid", (req, res)=>{
    CartDataModel.findOne({userId: req.params["userid"]}, (err, cart)=>{
        if(err){
            res.send(JSON.stringify("Could not get cart " + err));
        }
        res.json(cart);
    });
});

router.post("/saveToOrders", (req, res)=>{
    console.log("save order ", req.body);
    let order = new OrderDataModel(req.body);
    order.save((err, data, next)=>{
        if(err){
            res.send(JSON.stringify("Error adding order " + err));
        }
        res.json(data);
    });
});

router.get("/getOrders/:userid/:status", (req, res)=>{
    OrderDataModel.find({userId: req.params["userid"], status:req.params["status"]}, (err, cart)=>{
        if(err){
            res.send(JSON.stringify("Could not get orders " + err));
        }
        res.json(cart);
    });
});

router.post("/cancelOrder", (req, res)=>{
    console.log("cancel ", req.body);
    OrderDataModel.findOne({_id: req.body.orderId}, (err, order)=>{
        if(err){
            console.log(JSON.stringify("Error fetching order ", err));
            res.send(JSON.stringify("Error " + err));
        }
        console.log("order ", order);
        if(!order){
            console.log("No order");
            res.send(JSON.stringify("Error no order"));
        }else{
            console.log("Cancelling order ", order);
            order.status = "cancelled";
            order.cancelDate = Date.now();
            order.save((err, data, next)=>{
                if(err){
                    res.send(JSON.stringify("Error saving order " + err));
                }
                res.json(data);
            });
        }
    });
});

module.exports = router;