//random color
const randomColor=function(){
    const hex="0123456789ABCDEF";
    let color="#";
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
}
console.log(randomColor());
let intervalID;
const changeColor=function(){
    if(intervalID==null){
        intervalID=setInterval(change,1000);
    }
    
    function change(){
        document.body.style.backgroundColor=randomColor();
    }
}
const stopChanging=function(){
    clearInterval(intervalID);
    intervalID=null;
}
document.querySelector("#start").addEventListener('click',changeColor);
document.querySelector("#stop").addEventListener('click',stopChanging);
