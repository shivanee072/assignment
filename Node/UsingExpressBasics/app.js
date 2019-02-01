var express = require("express")
var app = express()
var bodyParser = require('body-parser');

// app.get('/',(req,res) => {
    // var skills = [{name:"Angular"},{name:"react"},{name:"Node"}]
    // res.send("<h1>Welcome to Express</h1>")
    // res.sendFile("Index.html",{root:__dirname})
    // res.json(skills)
// })
app.listen(5000,()=>{
    console.log("Server running at port 5000")
})
app.get('/',function(req,res){
    res.sendFile("index1.html",{root:__dirname})
})

app.use(bodyParser.json())

app.post('/login',function(req,res){
    console.log(req.body)
    res.send("succes")
})