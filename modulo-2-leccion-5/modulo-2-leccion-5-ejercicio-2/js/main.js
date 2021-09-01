/* "use strict";

const button = document.querySelector(".boton");

function fillInput() {
  const name = document.querySelector(".name").value;
  console.log("Hola ${name}");
}

button.addEventListener("click", fillInput);
 */
"use strict";

// debugger;

const button = document.querySelector(".js-btn");

function sayHi() {
  const name = document.querySelector(".name").value;
  console.log(`Hola ${name}`);
}

button.addEventListener("click", sayHi);
