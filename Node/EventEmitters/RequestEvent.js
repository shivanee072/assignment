var request = require("request")     
var fs = require("fs")
var src = request("http://www.google.com")   //Return object of EventEmitter
var response =""
src.on("data",function(chunkOfData){
    console.log("\n\n>>>>>>>>>>>>>>>>>>>>>>>>>>Data>>>>>>>>>>>>>>>>>>>>>>>>>>"+chunkOfData)
    response += chunkOfData.toString();
})



src.on("end",function(){        //just like addeventListeners , this function will be registered for end 
    console.log(">>>>>>>>>>DONE>>>>>>>>>>>>>>")
    fs.writeFile("GoogleResponse.txt",response,function(err){
        if(err){ console.log("error")}
        else{ console.log("DOne")}
    })
})