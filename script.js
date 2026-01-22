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
