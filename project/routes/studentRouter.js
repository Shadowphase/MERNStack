const express = require("express");
const router = express.Router({});

router.get("/details", (req, res)=>{
    res.json({
        name:"Joe",
        age:23,
        GPA:3.7
    });
});

//saveStudent?name=foo&id=42&session=node
//create an api to save student details in a file - where we'll get student info like - name, age, session, etc from query string
//create another api to fetch student details from a file in json object - if student id is less 
//than 50 it should return the info saved in prev api, using routeparam
router.get('/saveStudent', function(req, res){
    console.log("save student");
    let writerStream = fsObj.createWriteStream("./student.json","utf8");

    writerStream.write(JSON.stringify(req.query));
    writerStream.end();
    res.json(req.query);
});

router.get('/getStudent/:id', function(req, res){
    let id = req.params["id"];
    console.log("id " + id);
    if(id<50){
        let readerStream = fsObj.createReadStream("./student.json","utf8");
        let data = "";
        readerStream.on("data",(chunks)=>{
            data = data+ chunks
        })
        readerStream.on("end",()=>{
            res.send(data);
        })
        //res.sendFile(__dirname+"/student.json");
    }else{
        res.send("no student found");
    }
});

module.exports = router;