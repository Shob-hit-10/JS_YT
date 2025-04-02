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


/*************************************MEMORY*******************************/
// Stack (Premitive), Heap (Non-Premitive)

//Here it will create a copy and make changes in the copy only, not the original file.
let myYTName = "ShobhitYT"
let anotherName = myYTName
anotherName = "nameChanged"
console.log(myYTName);
console.log(anotherName);


//Here it will make changes in the original file itself, without making a copy.
let userOne = {
    email : "sk@gmail.com",
    upi: "user@okaxis",
}
let userTwo = userOne

userTwo.email="shobhit@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);

