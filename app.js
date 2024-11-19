var minHeading = document.getElementById("minHeading")
var secHeading = document.getElementById("secHeading")
var mSecHeading = document.getElementById("mSecHeading")


var min = 0
var sec = 0
var msec = 0
var interval;


function startTimer() {
    interval = setInterval(timer, 10)
    document.getElementById("startButton").disabled = true; 
    document.getElementById("stopButton").disabled = false; 
    document.getElementById("resetButton").disabled = false;
}


function timer() {
    msec++
    mSecHeading.innerHTML = msec
    if (msec == 100) {
        msec = 0
        console.log("1 sec")
        sec++
        secHeading.innerHTML = sec
        if (sec == 60) {
            sec = 0
            min++
            minHeading.innerHTML = min
        }
    }
}


function stopTImer(){
    clearInterval(interval)
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;  
}

function resetTimer(){
    clearInterval(interval)
    min= 0
    sec=0
    msec=0

    minHeading.innerHTML = "00"
    secHeading.innerHTML = "00"
    mSecHeading.innerHTML = "00"

    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;  
    document.getElementById("resetButton").disabled = true; 

}