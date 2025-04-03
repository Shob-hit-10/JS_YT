// Singleton
//Object.create()

// Object Literals
//creating object

const mysym = Symbol("key1")


const jsUser = {
    name : "shobhit",
    "full name" : "Shobhit Kumar",
    [mysym] : "mykey1", //Keep in mind for Symbol
    age : 23,
    location: "Ghaziabad",
    email: "shobhit@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "saturday"],
}

console.log(jsUser.email);
console.log(jsUser["email"]);
//console.log(jsUser.full name);    //This cannot be done
console.log(jsUser["full name"])
console.log(typeof (jsUser.mysym)); //it is creating as string not a symbol
console.log(jsUser[mysym]);

//JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
//JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());