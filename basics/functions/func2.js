// function calcCartPrice(num1){
//     return num1;
// }

// console.log(calcCartPrice(200,300,500));// willonly return 200,first 


//solution =>rest operator ...
function calcCartPrice(...num1){
    return num1;
}

console.log(typeof(calcCartPrice(200,300,500)));// return an object