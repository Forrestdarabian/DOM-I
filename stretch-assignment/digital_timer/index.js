

/* elements for digits*/
let msTensElement = document.getElementById('msTens');
let msHundredsElement = document.getElementById('msHundreds');
let secondOnesElement = document.getElementById('secondOnes');
let secondTensElement = document.getElementById('secondTens');

/* elements for buttons */
let startButton = document.getElementById('startButton');
let resetButton = document.getElementById('resetButton');

/* variables for time */
var msTens = 0;
var msHundreds = 0;
var seconds = 0;


function timer() {

    msTens++;

    if (msTens === 10) {
        msHundreds++;
        msTens = 0;

    }

    if (msHundreds === 10) {
        seconds++;
        msHundreds = 0;
    }

    if (seconds === 10) {
        msHundreds = 0;
        msTens = 0;
        startButton.disabled = false;
        resetButton.disabled = false;
        clearInterval(clock);
    }

    msTensElement.innerHTML = msTens;
    msHundredsElement.innerHTML = msHundreds;
    secondOnesElement.innerHTML = seconds;

}

/* event listeners */
startButton.addEventListener('click', (event) => {
    const clock = setInterval(timer, 10);
    startButton.disabled = true;
    resetButton.disabled = true;

})

resetButton.addEventListener('click', (event) => {
    var msTens = 0;
    var msHundreds = 0;
    var seconds = 0;
    msTensElement.innerHTML = msTens;
    msHundredsElement.innerHTML = msHundreds;
    secondOnesElement.innerHTML = seconds;
})