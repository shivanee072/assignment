// const express = require("express");
const express = require("express")
// Instantiate the app here
const app = express()


const PORT = process.env.PORT || 4001;

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// Invoke the app's `.listen()` method below:
app.listen(PORT,()=>{
  console.log(`Server is listening at port ${PORT}`)
})


var data = [{name:"shivanee",location:"nagpur"},{name:"astha",location:"nagpur"}]


app.get('/',(req,res,next)=>{
    res.send(data)
})
// app.get('/data/:name',(req,res,next)=>{
//     console.log(req.params)
//    res.send(req.params.name);
//      res.send(hello)
// })

// app.get('/data/:id',(req,res,next)=>{
//    var dt = data[req.params.id]
//  if(dt){
//      res.send(dt)
//  }
//  else{
//      res.sendStatus(404)
//     //  res.status(404).send("Data not found!!")
//  }
// })

app.put('/data/:id',(req,res,next)=>{
    // data[req.params.id] = req.body
    // res.send(data[req.params.id])
    res.send(req.body);
})



app.post('/data/:id',(req,res,next)=>{
  
    res.send(req.body)



})


