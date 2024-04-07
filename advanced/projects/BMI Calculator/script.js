document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        let height = parseInt(document.querySelector('#height').value);
        let weight = parseInt(document.querySelector('#weight').value);
        let result = document.querySelector("#results");

        if (isNaN(height) || height <= 0) {
            result.innerHTML = "Enter a valid height";
        } else if (isNaN(weight) || weight <= 0) {
            result.innerHTML = "Enter a valid weight";
        } else {
            const bmi = (weight / ((height * height) / 10000)).toFixed(2);
            // Show the result
            result.innerHTML = `Your BMI : <span>${bmi}</span>`;
            let guide=document.createElement('h5');
            guide.setAttribute('class','guide');
            if(bmi<18.6){
                guide.innerHTML='Under Weight';

            }
            else if(bmi>=18.6 && bmi<24.9){
                guide.innerHTML='Healthy Weight';
            }
            else{
                guide.innerHTML='Over Weight';

            }
            result.appendChild(guide);
        }
    });
});
