// let obj = {}; // blank object

// 1. Key-Value Structure

// let obj = {
//   name: "Harsh",
//   age: 26,
//   food: "noodles",
// };

// 2. Dot vs Bracket notation

// For directly accessing theobject properties
// console.log(obj.age);

// For accessing using reference

// let ab = "age";

// console.log(obj[ab]);

// 3. Nesting and Deep Access

// const user = {
//   // Nesting
//   name: "Harsh",
//   address: {
//     city: "Bhopal",
//     pin: 234578,
//     location: {
//       lat: 23.3,
//       lng: 87.3,
//     },
//   },
// };

// user.address.location.lng; // Deep access

// 4. Object Destructuring

// let {lat,lng} = user.address.location;

// 5. Looping - for-in , Object.keys , Object.entries

// a) for-in.

let obj = {
  name: "Harsh",
  age: 26,
  email: "test@test.com",
};

// for (let key in obj) {
//   console.log(key,":",obj[key]);
// }

// b) Object.keys - To make an array of object keys

// console.log(Object.keys(obj))

// c) Object.entries - To make Array of Arrays

// console.log(Object.entries(obj))

// 6. Copying objects: spread, Object.assign , deep clone

// a) Spread

// let obj2 = {...obj}

// b) Object.assign - very less used

// let obj2 = Object.assign({price: Infinity}, obj);

// c) Deep clone

// let obj1 = {
//   name: "Harsh",
//   age: 26,
//   email: "test@test.com",
//   address: {
//     city: "bhopal",
//   },
// };

// let obj2 = { ...obj1 };
// obj2.name = "Nikhil"; // this is a real copy
// // obj2.address.city = "Indore"; // here in nested properties only
// // reference is passed and to address this we needed deep clone

// // deep clone using JSON.stringify and to resolve this we use JSON.parse

// let obj3 = JSON.parse(JSON.stringify(obj1));
// obj3.name= "Rohan"
// obj3.address.city = "Indore";

// 7. Optional chaining and Computed properties

// a) Optional chaining

// let role = "admin"
// let obj4 = {
//   name: "Harsh",
//   age: 26,
//   email: "test@test.com",
//   addresses: {
//     city: "bhopal",
//   },
//   [role]: "Harsh"
// };

// console.log(obj?.address?.city) // optional chaining

// b) Computed properties

// console.log(obj4) // gives with role as Admin: 'Harsh'

// Questions

// Q1 . destructure city and lat

// const locations = {
//   city: "Bhopal",
//   coordinates: {
//     lat: 23.3,
//     lng: 87.3,
//   },
// };

// let { city } = locations;
// let { lat } = locations.coordinates;

// Q2. Destructure the key as "first-name" as variable name firstName

// const user = {
//   "first-name": "Harsh",
// };

// let { "first-name": firstName } = user;

// Q3. Use for in to log all keys in this object

// const course = {
//   title: "JS",
//   duration: "4 weeks",
// };

// for (let key in course) {
//   console.log(key)
// }

// Q4. Use Object.entries() to print all the key-value pairs as;

// Object.entries(course).forEach((val) => {
//   console.log(val[0],":",val[1]);
// });

// Q5. Copy using spread operator
// const original = { a: 1, b: 2 };

// const duplicate = { ...original };

// Q6. What is the problem with this?

// const obj1 = {info: {score: 80}};
// const clone = {...obj1};
// clone.info.score = 100;
// console.log(obj1.info.score);

// const obj1 = {info: {score: 80}};
// const clone = JSON.parse(JSON.stringify(obj1));

// clone.info.score = 100;
// console.log(`obj1 score: ${obj1.info.score}`);
// console.log(`clone score: ${clone.info.score}`);


// Q7. Use a variable to dynamically assign a property

// const key = "role";

// let obj1 = {
//     name: "harsh",
//     [key]: "admin",
// };
