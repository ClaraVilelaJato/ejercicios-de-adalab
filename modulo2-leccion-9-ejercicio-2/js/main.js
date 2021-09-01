'use strict';
'use strict';

function get100numbers() {
  let arrayNumeritos = [];
  for (let i = 1; i <= 100; i++) {
    arrayNumeritos.push(i);
    console.log(arrayNumeritos);
  }
  return arrayNumeritos;
}

get100numbers();

function getReversed100Numbers() {
  let getReturnFunction = get100numbers();
  getReturnFunction = getReturnFunction.reverse();
  console.log(getReturnFunction);
}

getReversed100Numbers();
