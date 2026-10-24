// Functions
// In JS , functions are reusable blocks of code designed to perform specific
// tasks or calculate values, serving as fundamental building blocks for
// program logic. They can accept parameters and receive arguments, and
// may optionally return a result using a return statement.

// 1. Function declarations , expressions , and arrow functions

// a) declarations
// cant use number, special character and keyword to declare a function

function huihui() {
  console.log("Function Statement");
  console.log("Shadow N");
}

// b) Functions Expressions
// when we save function in a variable

let fnc = function () {
  console.log("Function Expressions");
  console.log("heyheyheyheyeheyheyheyeheyhey");
};

//fnc();

// c) Fat Arrow Functions

// ()=>{

// }

let fnc1 = () => {
  console.log("Fat Arrow Function");
};
//fnc1()

// 2. Parameters vs Arguments

function dance(v1) {
  //parameter - are the variables listed inside the parentheses
  console.log(`${v1} is dancing`);
}

// dance("ikin") //argument - are actual values passed to the function
// dance("amritesh")
// dance("nikam")
// dance("amani")

// 3. Default , Rest and Spread parameters

// a) default parameter

function add(v1 = 0, v2 = 0) {
  console.log(v1 + v2);
}
//add(1,2);

// b) Rest  operator
// when multiple arguments are to be taken rest ... is used

function abcd(a, b, c, ...val) {
  console.log(a, b, c, val);
}

//abcd(1,2,3,4,5,6)

// c) Spread Operators

// they are used in arrays and objects

// 4. Return values and early returns

function abc(v) {
  return 12 + v;
}

let value = abc(35);
//console.log(value);

//5. First Class Functions
// we can use them as values

function abcd(val) {
  val();
}

abcd(function () {
  //console.log("huihui");
});

// 6. Higher Order Functions
// it is a function which returns a function or accepts a function

// a) Accepting a Function
function abcd1(val) {
  // here abcd1 is hof accepting a function val
}

abcd1(function () {});

// b) Returning a Function

function abcd2() {
  return function () {
    console.log("returning function");
  };
}

//abcd2()();

// 7. Pure vs Impure Functions

// a) Pure functions - gives same output for same input , and doesnt
//                     change the outside value.

let a = 12;

function abcd3() {
  console.log("Pure", a);
}

// b) Impure functions - gives different output for same input , and
//                       can change outside value.

function abcd3_1() {
  console.log("Impure", a);
  a++;
  console.log("Impure", a);
}
// abcd3()
// abcd3_1()

// 8. Closures and Lexical Scoping

// a) Closures - Function which can return a function , and the function
//               being returned uses a variable from parent function.

function abcd4() {
  let a = 12;
  return function () {
    console.log(a); // using parents variable
  };
}
//abcd4()();

// b) Lexical Scoping

function abcd4_1() {
  let a = 12;
  console.log("inside abcd4_1");
  console.log(a);

  bcde();

  function bcde() {
    let b = 13;
    console.log("inside bcde");
    console.log(b);

    cdef();

    function cdef() {
      let c = 14;
      console.log("inside cdef");
      console.log(c);
    }
  }
}

//abcd4_1();

// 9. IIFE (Immediately Invoked Function Expressions)

(function () {})();

// 10. Hoisting Differences b/w declarations & expressions

// Hoisting

//abcd5();

function abcd5() {
  // hoisting allowed in function declarations
  console.log("hoisting");
}

let abcd5_1 = function () {
  // hoisting not allowed in function expressions
  console.log("function expressions");
};
//abcd5_1();

// Questions

// Q1. Convert the function into arrow function
//  function multiply(a,b){
// return a * b;
// }

// let multiply = (a,b) => {
//     return a*b;
// }

// Q2. Identify parameters and Arguments
// function welcome(name){   //parameter
//     console.log(name);
// }
// welcome("Harsh");  //argument

// Q3. What does the ... operator in parameters mean?
// it allows a function to accept an indefinite number of arguments

// Q4. Use rest operator to accept any number of scores and return the total

// function score(...scores){
//     let total = 0;
//     scores.forEach(function(val){
//         total = total + val;
//     });
//     return total;
// }
// console.log(score(6,7,8,9));

// Q5. Whats the return value of below function
// function f(){
// return;
// }

// undefined

// Q6. What does it mean when we say "functions are first-class citizens"?

// functions can be treated as values , we can save em in variables ,
// we can pass em in functions

// Q7. Can you assign a function to a variable and then call it?
// let getAdd = function (a, b) {
//   console.log(a + b);
// };
// getAdd(2, 3);

// Q8. Pass a function into another function and execute it inside

// function doing(value){
//     value();
// }
// doing(function (){
//     console.log("Inside");
// })

// Q9. Identify Higher Order Functions
// [1,2,3].map(function(x){
// return x * 2;
// });

// here map is the hof as it is accepting a function

// Q10. Convert the function into a pure function
// let total = 0;
// function addToTotal(num) {
//     total += num;
// }

// Pure Function
// let total = 0;
// function addToTotal(num) {
//   let newTotal = 0;
//   newTotal += num;
//   console.log(newTotal);
  
// }
// addToTotal(3);

// Q11. Find Output Closures

// function outer(){
//     let count = 0;
//     return function(){
//         count++;
//         console.log(count)
//     };
// }
// const counter = outer();
// counter(); //1
// counter(); //2



// Q12. Convert this normal function into an IIFE

// (function init(){
//     console.log("Initialized")
// })();

// Q13. what is the use of IIFE? Name one real world use case?
// let shery = (function(){
//     let score = 0;
//     return {
//         getScore: function(){
//             console.log(score);
//         },
//         setScore: function(val){
//             score = val;
//         },
//     };
// })();


// Q14. Create a BMI Calculator?
// function BMI(weight,height){
//     return weight/(height*height);
// }

// console.log(BMI(70,1.75).toFixed(2))

// Q15. Create a discount calculator to calculate discount
// function discountCalculator(discount){
//     return function (price) {
//         return price - price * (discount / 100);
//     };
// } 

// let ten = discountCalculator(10);
// let twenty = discountCalculator(20)

// console.log(ten(1200))

// Q16. Closures Creating Counters

// function counter(){
//     let count = 0;
//     return function (){
//         count++;
//         return count;
//     }
// }

// let c = counter();
// console.log(c());
// console.log(c())

// let d = counter()
// console.log(d())

// Q17. Create a pure function to transform a value

// function double(val){
//     return val*2;
// }
// console.log(double(2))


// Q18. Use IIFE to isolate variables

// (function(){
//     const password = "secret password"
//     console.log(password)
// })();

// console.log(password);