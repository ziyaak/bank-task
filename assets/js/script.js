
let hrs = document.querySelector("#hrs .time-value");
let mins = document.querySelector("#mins .time-value");
let sec = document.querySelector("#sec .time-value");


setInterval(function() {
    
    let currentTime = new Date();

    
    let hours = currentTime.getHours().toString().padStart(2, '0');
    let minutes = currentTime.getMinutes().toString().padStart(2, '0');
    let seconds = currentTime.getSeconds().toString().padStart(2, '0');

    
    hrs.innerHTML = hours;
    mins.innerHTML = minutes;
    sec.innerHTML = seconds;
}, 1000);
