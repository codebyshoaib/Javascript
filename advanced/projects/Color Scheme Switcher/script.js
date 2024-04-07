document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.button');
const body=document.querySelector('body');
console.log(buttons)
buttons.forEach((button)=>{
   button.addEventListener('click',function(e){
        console.log(e.target);
        if(e.target.id){
            body.style.backgroundColor=e.target.id;
        }
    
        
   });
});
});