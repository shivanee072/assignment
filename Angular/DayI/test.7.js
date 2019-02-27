function greet(a)
{
    return function(b){
       
           return a+b;
       
    }
}


var msg = greet(10)(20);
console.log(msg);