

let options = document.querySelector('.optionsPopupWrapper');
let defaultButton = document.querySelector('button.optionsButton.default');
let submitButton = document.querySelector('button.optionsButton.submit');

let canTake = document.querySelector('.optionsInput[name="canTake"]'); 
canTake.oninput = function() {
  document.querySelector('span.canTakeAmountResult').innerHTML = (2 * (+canTake.value) + 1);
}


defaultButton.addEventListener('click', defaultStart);
submitButton.addEventListener('click', modifiedStart);

function defaultStart(event) {
  event.preventDefault();

  totalCounter = totalPrimary;
  document.querySelector('.totalCounter').innerHTML = totalPrimary;
  max = 3;

  createButtons();
  options.style.display = 'none';
}

function modifiedStart(event) {
  event.preventDefault();

  let amount = document.querySelector('.optionsInput[name="amount"]');
  totalCounter = +amount.value;
  document.querySelector('.totalCounter').innerHTML = +amount.value;

  max = (2 * (+canTake.value) + 1);

  let firstTurn = document.querySelector('input.optionsCheckbox');
  if (!firstTurn.checked) {
    computerTakeMatch();
  }
  
  createButtons();
  options.style.display = 'none';
}

function createButtons() {
  for(let i = 1; i <= max; i++) {
    let button = document.createElement('button');
    button.className = 'btn';
    button.innerHTML = i;

    button.onclick = function(event) {
      event.preventDefault();
      playerTakeMatch(i);
    }

    let img = document.createElement('img');
    img.className = 'btn match';
    img.setAttribute('src', './images/match.svg');
    img.setAttribute('alt', 'match');

    button.appendChild(img);

    let container = document.querySelector('section.buttons');
    container.append(button);
  }
}