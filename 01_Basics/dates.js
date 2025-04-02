let myDate = new Date()
console.log(myDate)
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toJSON());
console.log(myDate.toISOString);
console.log(typeof myDate);

let myCreatedDate = new Date(2002, 00, 23, 5, 3)    //For time
//let myCreatedDate = new Date("2002-01-23")
console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp)




