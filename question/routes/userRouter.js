let express = require("express");
let router = express.Router({}),
UserDataModel = require("../datamodel/UserDataModel");
User2DataModel = require("../datamodel/User2DataModel");

router.post("/api/signinup", (req, res) =>{

    UserDataModel.findOne({username: req.body.username}, (error, user)=>{
        if(error){
            console.log("error", error);
            res.send("Error fetching user");
        } else if(user){
            res.send(user);
        }else{
            let userData = new UserDataModel(req.body);
            userData.save((err, newUser)=>{
                if(err){
                    console.log("err", err);
                    res.send("Error creating user");
                } else {
                    console.log("newUser", newUser);
                    res.send(newUser);
                }
            });
        }
    });
});

router.post("/api/login", (req, res)=>{
    console.log("user login" ,req.body);
    User2DataModel.findOne({username: {$regex:req.body.username, $options: 'i'}}, (error, user)=>{
        if(error){
            console.log("error", error);
            res.send(JSON.stringify("Error finding user"));
        } else if (user){
            if(user.password === req.body.password){
                res.send(user);
            }else{
                res.send({status:"invalid"});
            }
        } else {
            let userData = new User2DataModel(req.body);
            userData.save((err, newUser)=>{
                if(err){
                    console.log("err", err);
                    res.send(JSON.stringify("Error creating user"));
                } else {
                    res.send(newUser);
                }
            });
        }
    });
});

module.exports = router;