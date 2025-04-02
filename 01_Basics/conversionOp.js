let score = 33
console.log(typeof score)

let score1="44"
console.log(typeof score1);
let ValueInNum1=Number(score1);
console.log(typeof ValueInNum1);

let score2="55abc"
let ValueInNum2=Number(score2);
console.log(ValueInNum2) //It is showing NAN i.e not a number
console.log(typeof ValueInNum2) //but type is showing number

//String cannot be converted in number like ABCDE
//"33" = 33
//"33abc" = NaN
//true = 1, false = 0

let isLoggedIn=1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn)

// "" = false
// "shobhit" =  true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber)

/**********OPERATION****************/

let value = 3
let negvalue = -value
console.log(negvalue)

console.log(2+2); //and other operations like this can be written

let str1 = "Hello"
let str2 = " Shobhit"
let str3 = str1+str2
console.log(str3);

//Problems
console.log("1"+2)
console.log("1"+2+2);
console.log(1+2+"2");

console.log(+true) //(true+) will show error

console.log(+"")

let gameCounter = 100
gameCounter++
console.log(gameCounter)