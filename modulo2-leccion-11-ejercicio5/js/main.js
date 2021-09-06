'use strict';
const container = document.querySelector('body');

function changeStyle(event) {
  if (event.currentTarget.id === 'dark') {
    container.classList.add('dark');
    container.classList.remove('bright');
  } else {
    container.classList.add('bright');
    container.classList.remove('dark');
  }
  localStorage.setItem('theme', event.currentTarget.id);
}

const select = document.querySelectorAll('.js-select');
for (let radio of select) {
  radio.addEventListener('click', changeStyle);
}

function keepStyle() {
  if (localStorage.getItem('theme') === 'dark') {
    container.classList.add('dark');
    container.classList.remove('bright');
  } else if (localStorage.getItem('theme') === 'bright') {
    container.classList.remove('dark');
    container.classList.add('bright');
  }
}

keepStyle();
