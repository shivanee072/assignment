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

sqr(nums).then((r)=>
{
    console.log(sqnums);
},(err)=>{
    console.log(err);
})


