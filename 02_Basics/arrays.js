const myArr = [0,1,2,3,4]
console.log(myArr);

const myArr2 = new Array(1,2,3,4)
console.log(myArr2);

myArr.push(6)
myArr.push(7)
console.log(myArr);
myArr.pop()
console.log(myArr);

myArr.unshift(9)    //add value at starting
console.log(myArr);
myArr.shift()
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));  // -1 if value is not found in array

const newArr = myArr.join()
console.log(newArr);
console.log(typeof newArr);

//Slice works on the copy. Splice deletes the part of the array.