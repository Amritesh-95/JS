// 1. Create , Access , Modify arrays

// a) Creating Arrays
// let marks = [10,20,30,40,50]

// b) Accessing Arrays
// marks[0]

// c) Modifying Arrays
// marks[2] = 69

//2. Arrays Methods

// push, pop, shift, unshift, splice, slice,
// reverse, sort
// map, filter, find, some, every

// a)
// let arr = [1, 2, 3, 4, 5];
// arr.push(7000);
// arr.pop();
// arr.shift();
// arr.unshift(0);
// arr.splice(2, 1);
// let newArr = arr.slice(0, 4);
// arr.reverse();

// #Sort

// let arr = [11,32,4,2,42]
// arr.sort(function (a, b) {
//   return a - b;
// });

// #forEach

// let arr = [11,62,3,4,25];
// arr.forEach(function(val){
//   console.log(val+5)
// })

// b) Map
// use map only when you want to create a new array on the basis of
// previous array . Always imagine an empty array when you see a map.

// let newArr = arr.map(function(val){
//   return 12;
// })

// c) filter

// let arr = [1,2,3,4,5,6,7,8];

// arr.filter(function(val){
//   if(val>4) return true;
// })

// d) reduce

// let arr = [1, 2, 3, 4, 5, 6];

// let ans = arr.reduce(function (accumulator, val) {
//   return accumulator + val;
// },0);

// e) find

// let arr = [1, 2, 3, 1, 4, 5, 6];

// let va = arr.find(function (val) {
//   return val === 1;
// });

// let arr1 = [
//   {id: 1, key:1},
//   {id: 2, key:2},
//   {id: 3, key:1},
// ]
// let va1 = arr1.find(function (val) {
//   return val.key === 1;
// });

// f) some

// let arr = [50,30,45,80,90,96]
// let som = arr.some(function(val){
//   return  val>85;
// })

// g) every

// let ever = arr.every(function(val){
//   return val>24
// })

// 4. Destructuring and spread operator

// a) Array Destructuring

// let arr = [1, 2, 3, 4, 5];
// let [a, b, , c] = arr;

// b) Spread Operator

// let arr = [1,2,3,4,5,6,7]
// let arr2 = [...arr]

// Questions

// Q1. Add Mango at the end and Guava in the beginning

// let arr = ["Apple","Banana"]
// arr.push("Mango")
// arr.unshift("Guava")

// Q2. Insert "red" And "blue" at index 1

// let colors = ["Green","Yellow"];
// colors.splice(1,0,"Red","Blue")

// Q3. Extract only the middle three elements from this array

// let items = [1, 2, 3, 4, 5, 6];
// let newArr = items.slice(1, 4);
// console.log(newArr)

// Q4. Use .map() to square each number :

// let arr = [1,2,3,4]

// let newarr = arr.map(function(val){
//   return val*val;
// })

// Q5. Use .filter() to keep numbers greater than 10:

// let arr = [5,12,8,20,3]
// let ans = arr.filter(val => {
//   return val > 10
// })

// Q6. Use .reduce() to find the sum of this array :

// let arr = [10,20,30]
// let ans = arr.reduce(function(acc,val){
//   return acc + val;
// },0)

// Q7. First number less than 10

// let arr = [12,15,3,7,20]

// let ans = arr.find(val =>{
//   return val<10
// })

// Q8. Check if any student has scored less than 35

// let arr = [45,60,28,90]
// let ans = arr.some(val => {
//   val < 35
// })

// Q9. Check if every number is even is array 
// let arr = [2,4,6,8,10];

// let ans = arr.every(val =>{
//   return val % 2 == 0
// })

// Q10. Destructure the array to get FirstName and LastName

// let fullname = ["Harsh", "Sharma"]
// let [a,b] = fullname

// Q11. Merge two arrays using spread operator:

// let a = [1,2]
// let b = [3,4]

// let c = [...a,...b]

// let countries = ["US","UK"]
// countries = ["India", ...countries]