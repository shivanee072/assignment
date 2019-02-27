// function sayHello(){
//     return "hello";
// }

// function sayHi(){
//     return "hi";
// }


// let r1 = sayHello()
// let r2 = sayHi()

// console.log(r1+ ","+r2);



function sayHello(cb){
    setTimeout(()=>{
    cb("hello");
    },5000)
}

function sayHi(cb){
    cb("hi");
}


sayHello((msg)=>{
    console.log(msg)
})
sayHi((msg)=>{console.log(msg)})
