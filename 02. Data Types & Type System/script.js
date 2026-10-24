//data types

//types of data - primitive and reference

// primitives -> when we copy these we get a real copy of the values
// string , number , boolean , null , undefined , symbol , bigint

// reference  -> when we copy these we get do not get the real copy
//  instead a reference to the parent
// arrays , objects , functions

// 1.Primitives

// a) String
// '' - single quotes
// "" - double quotes
// `` - back ticks

// b) Number
// 12 - number
// 12.3 - number

// c) Boolean
// true and false

//let a = true;
// let b = false;

// d) null
// When we dont know the exact value so we "give" this null
let selectedStudents = null;

// e) undefined
// the default value we "get" when we dont initialize a variable

// f) symbol -> In JavaScript, a Symbol is a unique and immutable primitive 
// data type introduced in ES6, primarily used to create unique identifiers 
// for object properties to prevent naming collisions.  Because every symbol 
// is distinct—even if they share the same description string—they allow 
// developers to add hidden or private properties to objects that do not 
// appear in standard enumeration methods like for...in or Object.keys().


// g) bigint

//let a = 9007199254740991n



// 2. References

// a) Arrays
let a = [1,2,3]
let b = a
b.pop()


// b) Objects

let c = {
    name: "harsh"
};

let d = c;

d.name = "harshita"


// 3. Dynamic Typing

// No static typing in js , dynamic typing means you can change the data, 
// as dynamic data types are available here

var e = 12;
e = true
e = "harsh";
e = []
e = null
e = undefined


// 4. typeof quirks

typeof null //object
typeof NaN //number
NaN === NaN //false
//[] + [] // ''


// 5. Type Coercion

// concept in which one type automatically converts 
f = "5" + 1 //in js if any string is present + operator does concatenation
g = "5" - 1 //here - operator has only one operation possible and subtracts


// 6. Truthy vs Falsy values

// falsy values = 0 , false , "" , null , undefined , NaN , document.all