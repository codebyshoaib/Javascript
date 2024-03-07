const hero=['Thor','Ironman'];
const hero2=['Superman','Batman',"Spiderman"];
//hero.push(hero2); //adds the complete array as an element - not merging
// const heroC=hero.concat(hero2); //combines and returns a new array
// console.log(heroC);

//Spread operator - combine after spreading the array
const heroS=[...hero,...hero2]
console.log(heroS);

//flat() - flatens the nested arrays
const arr=[1,2,[3,4,5],6,7,[8,[9,10]]];
const arrF=arr.flat(Infinity);
console.log(arrF);

//Array.isArray()
//Array.from("Shoaib","Uddin")
//Array.of()