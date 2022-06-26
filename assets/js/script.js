let currentNumberWrapper = document.getElementById('currentNumber');
let currentNumber = 0;

function increment() {
    currentNumber =  currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber >= 0){ // Condição para permanecer na cor branca
        document.getElementById('currentNumber').style.color = 'white';
    }
}

function decrement() {
    currentNumber =  currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber < 0) { // Condição para mudar de cor quando negativo
        document.getElementById('currentNumber').style.color = 'red';
    }
}

