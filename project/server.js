console.log("running server");
const fsObj = require("fs"); 
const express = require('express');
const app = express();
const student = express();
const router = require('./routes/router');
const studentRouter = require('./routes/studentRouter');
const adminRouter = require('./routes/adminRouter');

app.listen(3030);
app.use("/stu", student);
student.use("/", studentRouter);
app.use("/admin", adminRouter);
app.use("/", router);

app.get('*', function(req, res){
    res.send("Default response");
});
