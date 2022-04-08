const express = require("express");
const router = express.Router({});
const fsObj = require("fs"); 
const vaccineModel = require("../datamodel/vaccineModel");

//vaccine name, vaccine doses, gap (in number of days), price
router.get("/vaccination", (req, res)=>{
    console.log("query", req.query);
    let ws = fsObj.createWriteStream("./vaccines.json","utf8");
    ws.write(JSON.stringify(req.query));
    ws.end();

    let vaccine = new vaccineModel(req.query);
    console.log("Vaccine ", vaccine);
    vaccine.save((err, data)=>{
        if(err){
            console.log("err ", err);
            res.send(err);
        }else{
            console.log("data ", data);
            res.json(data);
        }
    });
});

module.exports = router;