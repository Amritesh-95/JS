// 1. Arithmetic Operators

// + - / * % **

// +
a = 1 + 2; //addition
a = "ha" + "rsh"; //concatenation

// -
a = 2 - 1;

// /
a = 69 / 3;

// *
a = 23 * 3;

// &
a = 9 % 10;

// ** exponentiation
a = 2 ** 3;

// 2. Comparison Operators

// =  assignment
// == double equal(not strict), only checks value
// === triple equal(strict). checks value and type
// != not equal to(not strict), only checks value
// !== strictly not equal to , checks value and type
// >= greater than equal to
// <= less than equal to
// > greater than
// < less than

// 3. Assignment Operators

// = += -= *= /= %=

// 4. Logical Operators

// a) &&
// true && true = true
// true && false = false
// false && true = false
// false && false = false

// b) ||
// true  || true = true
// true  || false = true
// false || true = true
// false || false = false

// c) !
// changes the nature of values to opposite
// to check the nature of values : !!12

// 5) Unary Operators

// Unary Operators in JS are operators that work on a single
// operand to perform operations such as incrementing, decrementing
// type conversion , or negation

// + Unary Plus
// +"12" = 12
// +"Harsh" = NaN

// - Unary Negation
// -5 = -5

// ! Logical NOT, Converts the operand to a boolean and negates it
// ~ Bitwise NOT, Inverts all the bits of its operand

// ++ Increment , prefix and postfix
// let a = 12
// ++a = 13
// a++ = 12

// -- Decrement ,prefix and postfix
// let a = 12
// --a = 11
// a-- = 12

// typeof , returns a string indicating the data type of the operand
// typeof 12 = number

// delete removes a property from an object or an index from an array
// void Evaluates an expression and returns undefined

// 6. Ternary Operator  ?:
12 > 13 ? console.log("haihai") : console.log("huihui");

// 7. typeof (only works with primitive values)

//In JavaScript, the typeof operator returns the string
// "object" for most object types, including plain objects,
// arrays, dates, and regular expressions.  This includes
//  the special case of null, which historically returns 
// "object" despite being a primitive value.

// right typeof values
// typeof {} gives 'object' which is true
// typeof function(){} give 'function' which is true

// wrong type of some values
// typeof null is NULL but gives 'object' (which is not true)
// typeof [] gives 'object' which is not true
// typeof NaN gives 'number' which is not equal to itself


// 8. instanceof  (only works with reference values) 

// a instanceof Array gives true

// let b = {}
// b instanceof Object gives true
// b instanceof Array gives false