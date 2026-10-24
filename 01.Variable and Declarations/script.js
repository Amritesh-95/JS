//1. var , let , const - line by line comparison

a = 12; //this is a problem which is not advised to be used
var a;
var a = 12;
//let b
//let b= 12
//const a = 12

// 2. declaration and initialization

var a; //declaration
a = 15; //initialization
var a = 15; //declare and initialize

// VAR
// When we create variable using var it adds itself into window
// It is always function scoped
// We can declare it again and it wont give an error
//var a = 16
//let b = 13

//const discount = 15

function abcd() {
  if (true) {
    var a = 12;
  }
}

// 3. Scope (global, block , functional)

var c = 12; // global scope , not inside any curly braces

{
  var d = 12; //it can used in entire code as var do not respect blocks
  let d1 = 13; //it is block scoped
}

// 4. Reassignment and Redeclaration

var d = 12;
d = 32;

var a = 233;

let e = 12;
e = 32; // reassignment with let is allowed

//let e = 433; // redeclaration with Let is not allowed

// 5. Temporal Dead Zone (only in let)
//area in which js knows variable exists but cant access the value

//console.log(f); // cannot access 'f' before initialization
// TDZ of 'f' is 1-60
let f = 12;

//6. Hoisting impact per type
// when we create a varioble in js , the var breaks into two parts , declarations and intialization 
// its declartions goes above and initialization stays at its place
var g = undefined

console.log(g);

//var g = 12
g = 12

// var -> hoist -> undefined
// let -> hoist -> uninitialized
// const -> hoist -> uninitialized 