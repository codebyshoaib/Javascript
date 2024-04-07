document.addEventListener('DOMContentLoaded', function() {
    const clock = document.getElementById('clock');
    //set interval=> 
    setInterval(function () {
        let date = new Date();
        clock.innerHTML = date.toLocaleTimeString();
    }, 1000);
});