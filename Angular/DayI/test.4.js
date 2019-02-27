var add =function(a,b,cb){
    let res = a+b;
    cb(res);
}


add(100,200,function(r){ 
    console.log(r);
});