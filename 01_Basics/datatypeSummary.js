// Premitive DataType (These are call by value, changes are done in copy)
// 7 types: String, Number, Boolean, Null, undefined, Symbol(to make a value unique), BigInt

const score = 100
const scoreVal = 100.3 //There is no float datatype
//Check previous file for examples.

const id = Symbol('123')
const id1 = Symbol('123')
console.log(id===id1);  //It will return false, as symbols are unique

const bigNum = 32432525253n //put n for bigInt dataType

// Reference (Non-Premitive) DataType
// Array, Objects, Functions

const heros = ["Shaktiman, naagraj, doga"]
//These are objects below
let myObj = {
    name: "Shobhit",
    age: 23,
}

const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof myFunction); //More specifically its dataType is Function_Object
