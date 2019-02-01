var fs = require('fs')

fs.mkdir("temp",function(err){
    if(err){
        console.log("Error "+err)
    }
    else{
        fs.exists("temp",function(exists){
            if(exists){
                process.chdir("temp")
                fs.writeFile("test.txt","this is written using fs.writeFile",function(err){
                    if(err){
                        console.log("Error "+err)
                    }
                    else{
                        fs.readFile("test.txt",function(err,data){
                            console.log(data.toString())
                        })
                    }
                } )
            }
        })
    }
})