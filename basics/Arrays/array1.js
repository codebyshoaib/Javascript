//contingeous memory locations assigned to a variable
//multipe values/element stored-collection
//resizeable in Js
//can be of mixed datatype

const myArr=[0,1,2,3,4,5];
console.log(myArr);

//shallow copies => copy whose property is to share same reference point
//deep copy => not share same reference

const heroes=new Array("Spiderman","Superman");

//++++++++++++++++++++++++++++++ Methods in Arrays++++++++++++++++++++++++++++
heroes.push("new hero"); //add at end
heroes.push("another");
heroes.pop(); //delete from last


heroes.unshift('first'); //add at start --shifting ,time consuming
heroes.shift(); //deletes from start
console.log(heroes);

//include() --tells if element exists?
//indexOf() --place of element
//heroes.join(); converts array into string and binds them
//heroes.slice(1,3); //divides the array into a seperate array.last range not included 
//heroes.splice(1,3);  //included but takes away the chunk from original array