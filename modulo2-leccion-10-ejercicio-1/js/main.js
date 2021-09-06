'use strict';
/* fetch('https://api.rand.fun/games/rockpaperscissorslizardspock')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    document.body.innerHTML = data.result;
  });
 */
function getEmoji() {
  fetch('https://api.rand.fun/number/integer')
    .then((response) => response.json())
    .then((data) => {
      document.querySelector('.js-result').innerHTML = data.result;
    });
}
document.querySelector('.js-emoji').addEventListener('click', getEmoji);

fetch('https://dog.ceo/api/breeds/image/random')
  .then((response) => response.json())
  .then((data) => {
    const img = document.querySelector('img');
    img.src = data.message;
    img.alt = 'Un perro';
  });
