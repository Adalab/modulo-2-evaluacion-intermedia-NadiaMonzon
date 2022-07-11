'use strict';

const numInput = document.querySelector('.js_input');

const actionBtn = document.querySelector('.js_btn');

const hintText = document.querySelector('.js_hint');

const tryNumber = document.querySelector('.js_num');

let randomNumber = getRandomNumber(100);

let countTrying = 0;

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
   }

function getHintText () {
    const numInputValue = parseInt(numInput.value);
    
    if (isNaN(numInputValue)){
        hintText.innerHTML = `Tienes que poner un número válido`
    }
    else if (numInputValue > 100) {
        hintText.innerHTML = `Pista: El número tiene que ser menor que 100`
    }    
    else if (numInputValue < 1) {
        hintText.innerHTML = `Pista: El número debe ser mayor de 1`
    }
    else if (numInputValue > randomNumber) {
        hintText.innerHTML = `Pista: Demasiado alto`
    }
    else if (numInputValue < randomNumber) {
        hintText.innerHTML = `Pista: Demasiado bajo`
    }
    else if (numInputValue === randomNumber) {
        hintText.innerHTML = `¡¡¡Has ganado campeona!!!`
    } 
};

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