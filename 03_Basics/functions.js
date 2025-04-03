// console.log("H");
// console.log("I");

function sayHi(){   //this is function definition
    console.log("H");
    console.log("I");
}

sayHi()

// function addTwoNum(num1, num2){
//     console.log(num1 + num2);
// }
// addTwoNum(3,"4")
// addTwoNum(3,"a")
// const result = addTwoNum(3,5)

function addTwoNum(num1, num2){
    let result = num1 + num2
    return result;
}
const result = addTwoNum(3,5)
console.log(result)

function loginUserMess(username = "user"){
    if(username === undefined){
        console.log("Please enter user name")
        return;
    }
    return `${username} just logged in`;
}
console.log(loginUserMess())

function calCartPrice(...num1){ //rest operator (also known as spread operator depending upon its use)
    return num1
}

console.log(calCartPrice(200,400,500))

const user = {
    username: "Shobhit",
    price: 199,
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)
handleObject({
    username:"sam",
    price: 399
})

const myNewArr = [200, 400, 100, 600]
function returnSecondVal(getArr){
    return getArr[1]
}
console.log(returnSecondVal(myNewArr))



