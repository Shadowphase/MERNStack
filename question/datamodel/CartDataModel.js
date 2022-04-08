let mongooseObj = require("mongoose"),
schema = mongooseObj.Schema;

mongooseObj.connect("mongodb://127.0.0.1/reactdb");

let CartScema = new schema({
    userId:{type:String, required:true},
    cart:Object
},
{
    versionKey:false
});

let CartModel = mongooseObj.model("cart", CartScema);
module.exports = CartModel;