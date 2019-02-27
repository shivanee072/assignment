var n1 = [1,2,3,4,5];


var n2 = [...n1,7,8,9]; //... --> spread operator

console.log(n2);

var arr = ['Java','Angular'];
var[j,a] = arr;
console.log(j)


var person = {
    name:"john ",email:"john@gmail.com"
};


console.log(person.name)

console.log(person.email)


//object destructuring
const {name,email} = person;
console.log(name)