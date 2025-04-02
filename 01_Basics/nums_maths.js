const score = 400
const balance = new Number(100)
console.log(balance);
console.log(score);

console.log(balance.toString().length);
console.log(balance.toFixed(3));

const otherNum = 23.8966
console.log(otherNum.toPrecision(3));

const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN'))

/****************************MATHS*****************************/

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(3.2));
console.log(Math.ceil(3.2));
console.log(Math.floor(3.6));
console.log(Math.min(9,6,7,8));
console.log((Math.random()*10)+1);  //+1 to take value > 0 only (or to avoid 0.something)


const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min)