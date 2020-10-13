"use strict";
const input = document.querySelector(".js-input");
const paragraph = document.querySelector(".text1");
const paragraph2 = document.querySelector(".text2");
const button = document.querySelector(".btn")


function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const numberRandom = getRandomNumber(100);
function numberMagic() {
  if (input.value > numberRandom) {
    paragraph.innerHTML = classList.toggle("demasiado alto");
  }
  else if (input.value < numberRandom) {
    paragraph.innerHTML = "demasiado bajo";
  }
  else if (input.value === numberRandom) {
    paragraph.innerHTML = "¡¡¡Has ganado campeona";
  }
}



button.addEventListener("click", numberMagic)
console.log(getRandomNumber(100));