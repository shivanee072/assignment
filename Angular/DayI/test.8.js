var nums = [1,2,3,4,5,4];


var sqnums = nums.map(n=>n*n);
console.log(sqnums);

var srch  = nums.find(n=>n == 3); //to find element at 3 index

console.log(srch);


var fil = nums.filter(n=>n==4);    // to find the number of occerence of n in the array
console.log(fil);

// console.log(nums.fill(5,2,4))