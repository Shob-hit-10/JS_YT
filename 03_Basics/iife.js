// Immediately Invoked Function Expressions (IIFE)

//Global scope ke pollution se bachne ke liye IIFE ka use krte hai
(function chai(){
    console.log(`DB CONNECT`);
})();    //It is like chai() Semicolon is necessary else funciton is unable to recognize where to end the function which will create problem for wanother funciton.

((name) => {
    console.log(`DB CONNECT TWO ${name}`);
})('Shobhit')










