let mongooseObj = require("mongoose"),
schemaObj = mongooseObj.Schema;

mongooseObj.connect("mongodb://127.0.0.1/reactdb");

let UserSchema = new schemaObj({
    username:{type:String,required:true},
    password:{type:String,required:true},
    age:Number,
    email:String,
    phone:Number,
    address:String
},{
    versionKey:false
});

let User2Model = mongooseObj.model("user2", UserSchema);
module.exports = User2Model;