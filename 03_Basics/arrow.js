// This is used in only objects not in functions

const user = {
    username: "Shobhit",
    price: 999,

    welcomeMess: function(){
        console.log(`${this.username}, welcome to website`) //THIS is used for current context
        // console.log(this);
        
    }
}
// user.welcomeMess()
// user.username = "sam"
// user.welcomeMess()
//console.log(this);

// function chai(){
//     let username = "shobhit"
//     console.log(this.username); //See on top
// }
// chai()

// const chai = function(){
//     let username = "shobhit"
//     console.log(this.username);
// }
// chai()

const chai = () => {
    let username = "shobhit"
    console.log(this.username);
}
// chai()

// const addTwo = (num1, num2) => {
//     return num1+num2
// }
// console.log(addTwo(2,3));

// const addTwo = (num1, num2) => num1+num2    //implicit return
// console.log(addTwo(2,3));

const addTwo = (num1, num2) => ({username: "Shobhit"})
console.log(addTwo(2,3));
