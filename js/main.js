"use strict";
const input = document.querySelector(".js-input");
const paragraph = document.querySelector(".text1");
const paragraph2 = document.querySelector(".text2");
const button = document.querySelector(".btn");

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const numberRandom = getRandomNumber(100);
console.log(numberRandom);

function numberMagic() {
  let inputValue = parseInt(input.value);
  if (inputValue < 0 || inputValue >= 100) {
    paragraph.innerHTML = "debe ser un numero de 0 a 100";
  }
  else if (input.value > numberRandom) {
    paragraph.innerHTML = "Es un numero demasiado alto";
  }
  else if (input.value < numberRandom) {
    paragraph.innerHTML = "Es un numero demasiado bajo";
  }
  else if (input.value === numberRandom) {
    paragraph.innerHTML = "¡¡¡Has ganado campeona!!!";
  }
}
let attemps = 0;
function numberTotal() {
  attemps = attemps + 1;
  paragraph2.innerHTML = (`numero de intentos:${attemps}`);
}

button.addEventListener("click", numberMagic);
button.addEventListener("click", numberTotal);