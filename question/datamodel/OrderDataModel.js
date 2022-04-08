let mongooseObj = require("mongoose"),
schema = mongooseObj.Schema;

mongooseObj.connect("mongodb://127.0.0.1/reactdb");

let OrderSchema = new schema({
    userId:{type:String, required:true},
    order:Object,
    orderDate:String,
    cancelDate:String,
    status:String
},
{
    versionKey:false
});

let OrderModel = mongooseObj.model("order", OrderSchema);
module.exports = OrderModel;