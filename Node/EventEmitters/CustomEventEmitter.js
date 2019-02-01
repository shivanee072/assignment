var EventEmitter = require('events').EventEmitter;


function GetCount(maxIteration){
    var e = new EventEmitter()


    //emit events here..
    process.nextTick(function(){
        var cnt = 0;
        e.emit('start')
        var t = setInterval(function(){
            e.emit("count",++cnt)
            if(cnt==maxIteration){
                e.emit("end",cnt)
                clearInterval(t)
            }

            if(cnt==8){
                e.emit("error",cnt)
                clearInterval(t)
            }
        },1000)
    })

    return e;
}
var evt = GetCount(10)


evt.on('start',function(){
    console.log("Loop started ")
})



evt.on("count",function(c){
    console.log("recevied :"+c)
})


evt.on("error",function(c){
    console.log("Ended with error "+c)
})

evt.on("end",function(){
    console.log("Finish")
})