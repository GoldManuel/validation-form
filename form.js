let nam = document.getElementById('name');
let age = document.getElementById('age');
let sub = document.getElementById('submit');

let txt  = document.getElementById('txt');

sub.addEventListener('click', function() {

    if(nam.value === '' || age.value === '' || age.value <= 17) {
        alert('Please fill all fields appropriately');
    }else{
        alert('Check Complete');
    }
     if (nam.value === '') {
        nam.style.border = 'solid 2px red';
    }else{
        nam.style.border = 'solid 2px green';
    }

    if (age.value === '' || age.value <= 17) {
        age.style.border = 'solid 2px red';
    }else{
        age.style.border = 'solid 2px green';
    }

    if (age.value > 0 && age.value <= 10) {
        txt.innerHTML = `Dear ${nam.value}, you can not drive`;
    }else if (age.value > 10 && age.value <= 15) {
        txt.innerHTML = `Dear ${nam.value}, you can not drive yet`;
    }else if (age.value > 15 && age.value <= 17) {
        txt.innerHTML = `Dear ${nam.value}, you are not eligible to drive yet`;
    }else{
        txt.innerHTML = `Dear ${nam.value}, CONGRATULATIONS !!! You are now eligible to drive`;
        txt.style.color = 'green';
    }
    
})