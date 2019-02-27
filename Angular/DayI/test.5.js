function greet()
{
    return function(){
       return "hello";
    }
}


var msg = greet();
console.log(msg());