const express = require("express");
const router = express.Router({});
let userModel = require("../datamodel/datamodel");

router.get('/', function(req, res){
    res.send('Hello World');
});

//http://localhost:3030/home/()=%3E%7Bconsole.log(this);res.send(%22haha%22);%7D
router.get('/home/:id', function(req, res){
    let id = eval("("+req.params["id"]+")")();
    console.log(id);
    res.send('Home');
});

router.get('/qs', function(req, res){
    const qsData = req.query;
    res.json(qsData);
});

router.get('/getfile', function(req, res){
    res.sendFile(__dirname+'/public/index.html');
});

router.use('/static', express.static("public"));

router.get('/saveUser', function(req, res){
    console.log("save user ", req.query);
    let userObj = new userModel(req.query);

    userObj.save((err, data)=>{
        if(err){
            res.json(err);
        }else{
            res.json(data);
        }
    });
});

module.exports = router;