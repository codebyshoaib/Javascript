/*  code encapsulated in a package. 
    portable code
*/
function myfunc(){
    console.log("Hello,World");
}
myfunc(); //call
//parameters
function add(n1,n2){
    return n1+n2;
}
//arguments
// console.log(add(2,'3'));

//default parameters
function Greetings(username='Shoaib'){
    return `${username} just logged in.`;
}
console.log(Greetings('Ahmed'));