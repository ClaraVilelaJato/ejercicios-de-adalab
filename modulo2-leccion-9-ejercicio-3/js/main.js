'use strict';
const lostNumbers = [4, 8, 15, 16, 23, 42];
function bestLostNomber() {
  const pairLostNumber = [];
  const multipleOfThree = [];
  for (let i = 0; i < lostNumbers.length; i++) {
    if (lostNumbers[i] % 2 === 0) {
      pairLostNumber.push(lostNumbers[i]);
    }
  }
  for (let i = 0; i < lostNumbers.length; i++) {
    if (lostNumbers[i] % 3 === 0) {
      multipleOfThree.push(lostNumbers[i]);
    }
  }
  return pairLostNumber.concat(multipleOfThree);
}
console.log(bestLostNomber());

/* const lostNumbers = [4, 8, 15, 16, 23, 42];

function bestLostNumber() {
  const pairNumbers = [];
  const threeMultiple = [];
  for (let i = 0; i < lostNumbers.length; i++) {
    if (lostNumbers[i] % 2 === 0) {
      pairNumbers.push(lostNumbers[i]);
    }
  }
  for (let i = 0; i < lostNumbers.length; i++) {
    if (lostNumbers[i] % 3 === 0) {
      threeMultiple.push(lostNumbers[i]);
    }
  }

  return pairNumbers.concat(threeMultiple);
}

console.log(bestLostNumber()); */
/* const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const springMonths = months.splice(2, 4);
console.log(months);
console.log(springMonths); */
/* const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const springMonths = months.splice(2, 4, 'MARCH', 'APRIL', 'MAY', 'JUNE');
console.log(months);
console.log(springMonths); */
