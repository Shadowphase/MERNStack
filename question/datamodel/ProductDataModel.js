let mongooseObj = require("mongoose"),
schemaObj = mongooseObj.Schema;

mongooseObj.connect("mongodb://127.0.0.1/reactdb");

let ProductSchema = new schemaObj({
    prodName:{type:String, required:true},
    price:Number,
    desc:String,
    rating:Number
},{
    versionKey:false
});

let ProductModel = mongooseObj.model("product", ProductSchema);

module.exports = ProductModel;