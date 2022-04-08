//create a node server application using npm cli, with below structure
//express and nodemon
//server.js
//router.js
//two end points one for default
//another with name - vaccination
//that will take inputs as query string - vaccine name, vaccine doses, gap (in number of days), price
//next call should have booster dose as another value and its price
//data should be saved in json file and in mongodb using mongoose

const express = require("express");
const app = express();
const userApp = express();
const prodApp = express();
const cartApp = express();
const cors = require("cors");
const router = require('./routes/router');
const userRouter = require('./routes/userRouter');
const prodRouter = require('./routes/productRouter');
const cartRouter = require('./routes/cartRouter');

app.listen(3131);
app.use(cors());
app.use(express.json({limit:'2mb', extended:false}));

app.use("/user", userApp);
userApp.use("/", userRouter);

app.use("/prod", prodApp);
prodApp.use("/api", prodRouter);

app.use("/cart", cartApp);
cartApp.use("/api", cartRouter);

app.use("/", router);
app.get("*", (req, res)=>{
    res.send("Default response!");
})