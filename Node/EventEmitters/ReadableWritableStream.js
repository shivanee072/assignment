var fs = require("fs")
var readableStream = fs.createReadStream("Input.txt")
var writableStream = fs.createWriteStream("Output.txt")



var allData =""
readableStream.setEncoding("UTF-8")


//
readableStream.pipe(writableStream)