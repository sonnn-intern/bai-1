let currentNumber = 10;

function updateCountdown() {
    console.log(currentNumber)

    if (currentNumber > 0) {
        currentNumber--;
        setTimeout(updateCountdown, 1000);
        return;
    } 
    
    console.log("yeah, time's up!");
}

updateCountdown();