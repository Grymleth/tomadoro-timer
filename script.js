
let counter = 0;
let timeLeft = 10;
let timerInterval = null;

function timeFormat(seconds){
    let second = seconds % 60;
    seconds = seconds - second;
    let minute = seconds / 60;

    function pad(digit){
        let char = '';
        if(digit < 10){
            char += '0';
        }
    
        return char += digit;
    }

    return `${pad(minute)}:${pad(second)}`;
}

function optionClick(minutes){
    timeLeft = minutes * 60;

    if(timerInterval != null){
        clearInterval(timerInterval);
    }
    
    var timer = document.querySelector("#timer-pomodoro");
    console.log(timeFormat(timeLeft));
    timer.textContent = timeFormat(timeLeft);
}

function startClick() {
    let timer = document.querySelector('#timer-pomodoro');

    function timeIt(){
        counter++;
        timer.textContent = timeFormat(timeLeft - counter);
        if(counter == timeLeft){
            clearInterval(timerInterval);
        }
    }

    if(timerInterval == null){
        timerInterval = setInterval(timeIt, 1000);
    }
}

