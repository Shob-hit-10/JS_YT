const tinderUSer = new Object() //singleton object
//const tinderUser = {} //non-singleton object

tinderUSer.id = "123abc"
tinderUSer.name = "Sammy"
tinderUSer.isLoggedIn = false

//console.log(tinderUSer);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullName: {
            firstName: "Shobhit",
            lastName: "Kumar"
        }
    }
}

//console.log(regularUser.fullname/*?*/.userFullName.lastName) //optional chaining if value is not present than question mark

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 ={ obj1, obj2 }
const obj3 = Object.assign({}, obj1, obj2) //paranthesis is optional parameter to ensure that all elements are stored in new source array
console.log(obj3);

console.log(Object.keys(tinderUSer));


const course = {
    coursename: "dunno",
    price: "999",
    courseInstructor: "Shobhit"
}

//course.courseInstructor

const {courseInstructor : instruct} = course
console.log(instruct)

// {
//     "name": "shobhit"
//     "coursename": "dunno"
//     "price": "free"
// }