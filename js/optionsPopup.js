

let options = document.querySelector('.optionsPopupWrapper');
let defaultButton = document.querySelector('button.optionsButton.default');
let submitButton = document.querySelector('button.optionsButton.submit');

defaultButton.addEventListener('click', defaultStart);
submitButton.addEventListener('click', modifiedStart);

function defaultStart(event) {
  event.preventDefault();

  totalCounter = totalPrimary;
  document.querySelector('.totalCounter').innerHTML = totalPrimary;

  options.style.display = 'none';
}

function modifiedStart(event) {
  event.preventDefault();

  let amount = document.querySelector('.optionsInput[name="amount"]');
  totalCounter = +amount.value;
  document.querySelector('.totalCounter').innerHTML = +amount.value;

  let take = document.querySelector('.optionsInput[name="canTake"]');
  max = +take.value;

  options.style.display = 'none';
}