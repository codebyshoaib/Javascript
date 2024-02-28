let num=200;
const num2=new Number(300);
console.log(num);
console.log(num2.toFixed(3));
//toPrecision
//localeString , local format - toLocaleString('en-US')
//MAX_VALUE, MIN_VALUE
let num2String=num.toString();
console.log(num2String.includes(2));
console.log(num2String.length);

// +++++++++++++++++++++++++++++++ MATH +++++++++++++++++++++++++++++++++ object with many properties
console.log(Math.abs(-2));
console.log(Math.round(4.56));
console.log(Math.floor(4.5)); //ceil pow,min,max

console.log(Math.random());
//ranging
console.log((Math.random()*10) + 1);

const min=10;
const max=20;
console.log((Math.random()*(max-min+1)));