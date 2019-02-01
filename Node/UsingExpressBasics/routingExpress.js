var express = require("express")
var app = express()

var router = express.Router()
router.route('/products').get(function(req,res){
    var products = [
        {name:"Mobile",price:20000},
        {name:"TV",price:30000},
        {name:"laptop",price:40000}
    ];
    res.json(products);
    
})
app.use('/',router);
app.get('/',function(req,res){
    res.sendFile("Index.html",{root:__dirname})
})
app.listen(5000,()=>{
    console.log("Server running at port 5000!")
})