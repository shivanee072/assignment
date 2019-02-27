var nums = [2,2,2,2]
function sqr(nums){
let p = new Promise((resolve,reject)=>{
   if(sqr.length<1)
   reject("Invalid no")
   else
   {
    sqnums = nums.map(n=>n*n);
    resolve(sqnums)
   }
})
return p ;
}


function inc(nums){
    let p = new Promise((resolve,reject)=>{
        if(sqnums.length<1)
        reject("No element")
        else{
           incr = nums.map(n=>n+1);
           resolve(incr) 
        }
    })
    return p;

}

sqr(nums).then((r)=>
{
    console.log(r);
    inc(nums).then((ir)=>{
        console.log(ir);
    })
},(err)=>{
    console.log(err);
})


