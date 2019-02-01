var fs = require('fs');
// fs.readFile('Data.txt',function(err,dataFromFile){
//     if(err){
//         console.log("Error Found : "+err)
//     }
//     else{
//         console.log("reading file (async) :" +dataFromFile)
//     }
// })
//console.log("Program Ended!!!")
var content = fs.readFileSync("Data.txt","UTF-8")
console.log(content)
// console.log(content.toString())
console.log("Program Ended !!!")