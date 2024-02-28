let name="  Shoaib  ";
console.log(name);
console.log(name.trim()); //remove the extra white spaces , trimStart, trimEnd
//replace() method
//includes() method
//split() seperator, limit  //returns array
const repoCOunt=50;

console.log(name + repoCOunt + " Value");
//String Interpolation : create placeholders to inject variables on the go
console.log(`Hello, My name is ${name} and my repo count is ${repoCOunt}`)

console.log(name.charAt(3));
console.log(name.indexOf('h'));

let newName=name.substring(0,2); //2 is excluded here , Sh only
console.log(newName);


let newName2=name.slice(-9,2); //accepts negative values too.
console.log(newName2);