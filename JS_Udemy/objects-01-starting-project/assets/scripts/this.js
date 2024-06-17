// // Global Context

// //1. this in Global Context  (i.e Outside of any function)
// "use strict";
// function something() {
//     console.log('something')
// }
// console.log('njsdnsaclkam', this);// logs global object (window in browser) - ALWAYS (also in strict mode)!
// // something();

// // 2. In a function (Non-Arrow Function) in GC.

// function inside() {
//     console.log(this); // logs global object (window in browser) in non-strict mode, undefined in strict mode
// }

// inside();


// // 3. 
// const somethings = () => { 
//     console.log(this);
// }
 
// somethings(); // logs global object (window in browser) - ALWAYS (also in strict mode)!

// // 4. 
