

var http = require("http")
var fs = require("fs")
var port = 5000
var server  = http.createServer(function(req,res){
    
    fs.readFile(__dirname+"/Index.html",function(err,data){
        if(err){
            console.log(err)
        }
        else{
            res.writeHead(200,{"Content-Type":"text/html"})
            return res.end(data)
        }//
    })



    // console.log(req.method)
    // res.statusCode = 200;
    // res.setHeader("Content-type",'text/html');
    // res.end("<h1>HEllo from node server</h1>")
})
server.listen(port,'127.0.0.1',() => {
    console.log(`Server running at localhost:${port}`)
})