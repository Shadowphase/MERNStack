const mongoose = require("mongoose");
const schema = mongoose.Schema;

//mongoose.connect("mongodb://127.0.0.1/vaccines");

const vaccineSchema = new schema({
    name:String,
    doses:Number,
    gap:Number,
    price:Number
});

let vaccineModel = mongoose.model("vaccination", vaccineSchema);

module.exports = vaccineModel;