// if(true){
//     let a=10;
//     var c=30;
//     const b=20;

// }
// //console.log(a); // let has local scope - invisible outside
// //console.log(b);
// console.log(c); //var has global scope - so it's visible outside its scope

// //always use let
let a=200;
if(true){
    let a=10;
    console.log(`${a} in side if`);
}
console.log(`${a} in outside`);