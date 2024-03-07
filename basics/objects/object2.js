//singleton objects
const user=new Object(); //empty object
//const user={} //same 

user.id=1;
user.name='Shoaib';
user.isLoggedIn=false;
//console.log(user);
const user2={
    fullName:{
        username:{uname:"Shobbi"},
        firstName:"Shoaib",
        lastName:"Uddin"
    },
    age:19
};
console.log(Object.keys(user2));
console.log(Object.values(user2));
console.log(Object.entries(user2));
//merging two objects ? Object.assign({},obj1,obj2)
//{...obj1,...obj2}  spread

//array of objects
const User=[
    {
        name:"Shaoib"
    },
    {

    }
]