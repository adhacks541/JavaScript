//**Variables and Declarations**//
// var a;    declaration
// var a = 12;   declaration and initialization
// let a;
// let a=12;
// const a =10;

// var a=12;
//window mein add hota hai
//function scoped hota hai
//aap firse declare kar sakte hai same name se and error nhi aayega

//Scope (global , block, functional)
// global scope -- Access in all Code
// block scope -- Access in block
// functional scope -- Access in function

//Reassignment , Redeclaration
// var a = 12;
// a = 34;
// let b = 43;
// b = 65;

//Temporal Dead Zone -- utna area jitne mein js ko pata to hai ki variable exist karta hai par woh aapko value nhi de sakta
// console.log(a);
// let a = 12;


//Hoisting impact per type
//hoisting -> ek variable ko jab js mein banate hai toh woh variable do hisso mein toot jaata hai and uska declare part upar chala jaata hai and uska initialization part reh jata hai
// console.log(a);
// var a = undefined;
// a = 12;
// var --> hoist --> undefined
// let --> hoist --> x
// const --> hoist --> x


//**Data Types + Type System**//

// 12 harsh true [] {} () null undefined NaN Symbol bigInt

//Primitive Data Types
// -> aise saari value jinko copy karne par tumhe ek real copy mil jaaye.
//1. Number  
// let a = 12;
//2. String  
// let b = "harsh";
// ' ' - single quote
// " " - double quote
// ` ` - backtick
//3. Boolean    
// let c = true;
//4. Undefined
// let d;
//5. Null
// let e = null;
//6. Symbol --> unique immutable value
// future mein hum koi libraries use karenge ab is case mein un libraries mein kai baar kuch fields hoti hai jinse similar hum bhi bana dete hai aur galti se humari bannai hui fields us library ki original fields ko change kar deta hai.

// let f = Symbol("harsh");
// let g = Symbol("harsh");
// console.log(f==g);
//7. BigInt
// let h = BigInt(12);
// let h = 9007199254740991n;


//Reference Data Types
// -> aise saari value jinko copy karne par tumhe ek real copy na mile but aapko reference milega parent ka.
// [] () {}
//1. Array
// let a = [1,2,3,4,5];
//2. Object
// let b = {name: "harsh", age: 20};
//3. Function
// let c = function() {
//     console.log("hello");
// }



//Dynamic Typing -> js mein static typing nahi hai and yaha par hai dynamic typing jiska matlab hai aap data ko change kar sakte ho kyounki yahan par dynamic data types hai



//typeof quirks (e.g. typeof null === 'object)

//typeof NaN --> number
//typeof null --> object
//typeof [] --> object
//typeof {} --> object
//typeof function --> function

// Type coercion (== vs ===) --> concept jisme aapka ek type automatically convert hojayega
// "5" + 1 = '51' --> string + number = string
// "5" - 1 = 4 --> string - number = number

// Truthy vs falsy values --> aise values jo true ya false ki tarah behave kare
// falsy values --> false, 0, "", null, undefined, NaN , document.all
// truthy values --> rest all --> [] {} () function
// !! --> double negation --> check truthy or falsy


//undefined vs null
// undefined --> variable declare kiya but value nhi di
// null --> intentional empty value
//let x;
//console.log(x);
//let y = null;
//console.log(y);


//**Operators**//

//Arithmetic Operators
// +, -, *, /, %, **

//Assignment Operators
// =, +=, -=, *=, /=, %=, **=

//Comparison Operators
// ==, !=, ===, !==, >, <, >=, <=

//Logical Operators
// &&, ||, !

//Unary Operators
// ++, --, typeof, delete, void, in, instanceof