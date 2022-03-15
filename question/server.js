//create a node server application using npm cli, with below structure
//express and nodemon
//server.js
//router.js
//two end points one for default
//another with name - vaccination
//that will take inputs as query string - vaccine name, vaccine doses, gap (in number of days), price
//next call should have booster dose as another value and its price
//data should be saved in json file and in mongodb using mongooset

const express = require("express");
const app = express();
const router = require('./routes/router');

app.listen(3131);
app.use("/", router);

app.get("*", (req, res)=>{
    res.send("Default response!");
})