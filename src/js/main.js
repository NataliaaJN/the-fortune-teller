/* eslint-disable indent */
'use strict';

// Bring HTML's elements
const inputValue= document.querySelector('.js-input');
const tryBtn= document.querySelector('.js-btn');
const resetBtn= document.querySelector('.js-reset');
const clue= document.querySelector('.js-clue');
const attempts= document.querySelector('.js-attempts');

const randomNumber= getRandomNumber(100);
// Show random number in console
console.log(randomNumber);

let counter= 0;


// FUNCTIONS:

// Generate random number
function getRandomNumber(max){
  return Math.ceil(Math.random() * max);
}

// Bring user guess
function tryANumber(){
    const userNumber= parseInt(inputValue.value);
    if(userNumber < 1|| userNumber > 100){
        clue.innerHTML= "It's out of range: introduce a number between 1 and 100";
    }else if(userNumber===randomNumber){
        clue.innerHTML= 'Congrats, you guessed it!';
        tryBtn.disabled= true;
    }else if(userNumber<randomNumber){
        clue.innerHTML= 'Too low';
    }else if(userNumber>randomNumber){
        clue.innerHTML= 'Demasiado high';
    }
}

// Attempts counter
function attemptsCounter(){
    for(let i=0; i<1; i++){
    counter+= 1;
    attempts.innerHTML= `Number of attemps: ${counter}`;
    }
}

function playAgain(){
    counter= 0;
    attempts.innerHTML= `Number of attemps: ${counter}`;
    clue.innerHTML= 'Hint: write a number and try';
    tryBtn.disabled= false;
}

//EVENT
function handleClickTry(event){
    event.preventDefault();
    if(inputValue.value !== ''){
    tryANumber();
    attemptsCounter();
    inputValue.value= '';
    }
}


// LISTENER
tryBtn.addEventListener('click', handleClickTry);
resetBtn.addEventListener('click', playAgain);


