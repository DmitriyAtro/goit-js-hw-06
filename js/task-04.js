const decremBtn = document.querySelector('[data-action="decrement"]');
const incremBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

let counterVal = 0;

decremBtn.addEventListener('click', onDecrBtnClick);
incremBtn.addEventListener('click', onIncrBtnClick);

function onDecrBtnClick() {
  valueEl.textContent = counterVal -= 1;
}
function onIncrBtnClick() {
  valueEl.textContent = counterVal += 1;
}
