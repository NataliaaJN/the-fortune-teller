"use strict";const inputValue=document.querySelector(".js-input"),tryBtn=document.querySelector(".js-btn"),resetBtn=document.querySelector(".js-reset"),clue=document.querySelector(".js-clue"),attempts=document.querySelector(".js-attempts"),randomNumber=getRandomNumber(100);console.log(randomNumber);let counter=0;function getRandomNumber(e){return Math.ceil(Math.random()*e)}function tryANumber(){const e=parseInt(inputValue.value);e<1||e>100?clue.innerHTML="It's out of range: introduce a number between 1 and 100":e===randomNumber?(clue.innerHTML="Congrats, you guessed it!",tryBtn.disabled=!0):e<randomNumber?clue.innerHTML="Too low":e>randomNumber&&(clue.innerHTML="Demasiado high")}function attemptsCounter(){for(let e=0;e<1;e++)counter+=1,attempts.innerHTML="Number of attemps: "+counter}function playAgain(){counter=0,attempts.innerHTML="Number of attemps: "+counter,clue.innerHTML="Hint: write a number and try",tryBtn.disabled=!1}function handleClickTry(e){e.preventDefault(),tryANumber(),attemptsCounter()}tryBtn.addEventListener("click",handleClickTry),resetBtn.addEventListener("click",playAgain);