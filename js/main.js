'use strict';

const numInput = document.querySelector('.js_input');

const actionBtn = document.querySelector('.js_btn');

const hintText = document.querySelector('.js_hint');

const tryNumber = document.querySelector('.js_num');


function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
   }

let randomNumber = getRandomNumber(100);

console.log(randomNumber);


function getHintText () {
    const numInputValue = numInput.value;
    
    if (numInputValue == randomNumber) {
        hintText.innerHTML = `¡¡¡Has ganado campeona!!!`
    }
    else if (numInputValue > randomNumber) {
        hintText.innerHTML = `Pista: Demasiado alto`
    }
    else if (numInputValue < randomNumber) {
        hintText.innerHTML = `Pista: Demasiado bajo`
    }

    
    if (numInputValue > 100) {
        hintText.innerHTML = `Pista: El número debe estar entre 1 y 100`
    }    
    else if (numInputValue < 0) {
        hintText.innerHTML = `Pista: El número debe estar entre 1 y 100`
   }
    
};

let countTrying = 0;

function countText () {
    countTrying += 1;
    tryNumber.innerHTML = countTrying
}

function handleClick (ev) {
    ev.preventDefault();
    getHintText();
    countText();
};

actionBtn.addEventListener('click', handleClick);