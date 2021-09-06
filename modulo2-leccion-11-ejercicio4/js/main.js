'use strict';
const name = document.querySelector('.js-name');
const message = document.querySelector('.js-message');

name.addEventListener('keyup', function () {
  message.innerHTML = name.value;
  localStorage.setItem('name', name.value);
});

function recovery() {
  const userName = localStorage.getItem('name');
  name.value = userName;
  message.innerHTML = userName;
}

recovery();
