const incr = document.querySelector('button[data-action="increment"]');
const decr = document.querySelector('button[data-action="decrement"]');
const value = document.querySelector('#value');
let currentNumber = 0;

incr.addEventListener('click', event => {
  currentNumber++;
  value.textContent = currentNumber;
});
decr.addEventListener('click', event => {
  currentNumber--;
  value.textContent = currentNumber;
});

console.log(currentNumber)