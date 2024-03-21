// const username={
//     name:"Shoaib",
//     price:999,
//     welcomeMessage:function (){
//         console.log(`${this.name} , Welcome to the club`);
//     }
// }
// //This => Current context
// //context means current values inside variables

// username.name="ali"
// username.welcomeMessage();

// console.log(this); //empty object , no context yet

// function one(){
//    let username="Shoaib"
//     console.log(this.username); //works like this in objects only
// }

// one=()=>{
//     let username="Shoaib";
//     console.log(this); //empty

// }
// one();

//explicit return
// const addTwo=(num1,num2)=>{
//     return num1+num2;
// }

//implicit return
//const addTwo=(num1,num2)=>  num1+num2;
//const addTwo=(num1,num2)=>  (num1+num2);
const addTwo=(num1,num2)=>  ({username:"Shoaib"});
console.log(addTwo(9,6));