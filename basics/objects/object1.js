//Singelton
//object literals

//key value pairs

const mySmb=Symbol("Key1"); //smbol declared
const User={name:"Shoaib",
    caste:"jamro",
    [mySmb]:"symbol1",
    lastLogin:['Monday',"Friday"]
}
//Object.create()
// console.log(User[mySmb]);ahsansnjkkkjnisdakak
//console.log(User.caste);
//console.log(User["caste"]);

//.freeze() - can not edit further
User.greetings=function(){
    console.log(`Hello, ${this.name}`);
}
console.log(User.greetings());
