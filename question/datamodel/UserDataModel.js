let mongoosObj = require("mongoose"),
schemaObj = mongoosObj.Schema;

mongoosObj.connect("mongodb://127.0.0.1/reactdb");

let UserSchema = new schemaObj({
    username: {type:String, required:true},
    password: {type:String, required:true},
    street: String,
    mobile: Number
}, {
    versionKey:false
});

let UserModel = mongoosObj.model("user", UserSchema);
module.exports = UserModel;