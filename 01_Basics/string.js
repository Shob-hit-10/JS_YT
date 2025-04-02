const name = "Shobhit"
const repoCnt = 50
//console.log(name + repoCnt + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCnt}`);
const gameName = new String('Shobhit-sk-com')
console.log(gameName[0]);
console.log(gameName.__proto__);    //you see it in console log in browser use F12 key

console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(2));
//console.log(gameName.charAt(2));
//console.log(gameName.indexOf('s'));

const newString = gameName.substring(0, 4)  //4 is excluded and you can't give negative value
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   Shobhit   "
console.log(newStringOne);
console.log(newStringOne.trim());   //removes extra spaces i.e white space or line terminator(\n).

const url = "https://shobhit.com/shobhit%20kumar"
console.log(url.replace('%20', '-'));
console.log(url.includes('shobhit'));

console.log(gameName.split('-'))    //It creates an array, seperated by dash(-)


