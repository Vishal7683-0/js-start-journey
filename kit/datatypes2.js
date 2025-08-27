//primitive datatypes
// 7 types :String , Number, Boolean, null, undefined, Symbol, BigInt


const score = 100 // type of  number
const scoreValue = 100.1// type of number
const loggedIn = false // type of boolean
const outsideTemp = null //type of obj
let userEmail;// type of undefined
const Id = Symbol('123') // type of symbol
const anotherId = Symbol('123')
// console.log(Id === anotherId); // its not same always give same value symbol.
const bigNumber = 54655664645326856681655n //in add last add n convert in number Bigint type of bigint
// console.log(bigNumber);





//Reference or Nonprimitive datatypes

// Array , objects, function
const heros =["shaktiman", "Nagraj", "doga"] //type of obj and its array
let myObj = {
    name: "vishal",
    age: 22,
} //obj type
const myFunction = function(){
    console.log('hello world');
    
}//type of function object
console.log(typeof bigNumber);
console.log(typeof myObj);
console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof outsideTemp);
console.log(typeof Id);






