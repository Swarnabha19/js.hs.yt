//primitives

// 7 types of primitive (call by value)

//String , Number , Boolean , null , undefined, Symbol , BigInt


const score = 100 //Number but we are not defining the datatype
let usermail = undefined
const id = Symbol('123') // Symbol
const id2 = Symbol('123')
console.log(id==id2);
console.log(id);
console.log(id2);

const  BigNumber = 54445452123456789034577n // BigInt
console.log(BigNumber)

console.log( typeof BigNumber)

let nam = 'tojo'
console.log('tojo');


//Reference (Non Primitive)

//Array , Objects , Functions  // these datatypes are object
// only function returns functions called function object


const heros = ["ironman , hulk , strange"]  //array
console.log(heros);
console.log(typeof heros);
let myObj=  // object
{
name: "tojo" ,
age: 22 ,
} 

console.log(myObj);
console.log(typeof myObj);
 

const myFunction = function()
{

    console.log("hello world");
}

console.log(typeof myFunction);
console.log( typeof myObj)
console.log(typeof heros);
