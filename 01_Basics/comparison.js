console.log(2>1);
console.log("2">1); //auto convert string to int

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
//Comparison converts ull to a number, treating it as 0. That's whu (3) null>=0 is true and others are false

// === (strict check)
console.log("2"===2);   //true for ==
