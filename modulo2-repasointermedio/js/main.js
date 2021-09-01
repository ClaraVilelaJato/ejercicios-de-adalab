'use strict';
const updateButton = document.querySelector('.js-update');
const smiley = document.querySelector('.js-title');
const select = document.querySelector('.js-select');
const body = document.querySelector('.js-body');

function changeMood() {
  smiley.innerHTML = select.value;
  let number = getRandomInt(100);
  if (number % 2 !== 0) {
    body.classList.remove('even');
    body.classList.add('odd');
  } else {
    body.classList.remove('odd');
    body.classList.add('even');
  }

  console.log(number);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

updateButton.addEventListener('click', changeMood);
