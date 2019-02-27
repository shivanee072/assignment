var nums = [2,2,2,2]

var_res;
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
           incr = nums.map(n=>n++);
           resolve(incr) 
        }
    })

}
sq(nums).then((res)=>{
    _res = res ;
}) 


console.log(_res)


