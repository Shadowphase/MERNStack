let express = require("express");
let router = express.Router({}),
ProductModel = require("../datamodel/ProductDataModel");

router.post("/save", (req, res) =>{
    console.log("searching", req.body);
    ProductModel.findOne({prodName: req.body.prodName}, (error, prod)=>{
        console.log("Found", prod);
        if(error){
            console.log("error", error);
            res.send("Error fetching product");
        } else if(prod){
            res.send(prod);
        }else{
            let prodData = new ProductModel(req.body);
            prodData.save((err, newProd)=>{
                if(err){
                    console.log("err", err);
                    res.send("Error creating product");
                } else {
                    console.log("newProd", newProd);
                    res.send(newProd);
                }
            });
        }
    });
});

router.get('/getProducts',(req, res)=>{
    ProductModel.find((err, products)=>{
        if (err) {
                res.send("Error in getting products");
        } else {
                res.send(products);
        }
    })
})

module.exports = router;