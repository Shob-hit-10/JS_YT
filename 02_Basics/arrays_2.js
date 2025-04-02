const marvel = ["thor", "Ironman", "Spiderman"]
const dc = ["superman", "flash", "batman"]

//marvel.push(dc)    //This will create array within the array
//console.log(marvel)

const allHeros = marvel.concat(dc)
console.log(allHeros)
//These both does similar works
const allNewHero = [...marvel, ...dc]
console.log(allNewHero)


const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const realAnotherArr = anotherArr.flat(Infinity)
console.log(realAnotherArr);

console.log(Array.isArray("Shobhit"))
console.log(Array.from("Shobhit"));
console.log(Array.from({name:"Shobhit"}));  //interesting part as it will ask you to convert keys or values

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2, score3));


