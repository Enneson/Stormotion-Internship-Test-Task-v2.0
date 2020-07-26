

let options = document.querySelector('.options__wrapper');
let defaultButton = document.querySelector('.options__section_button-default');
let submitButton = document.querySelector('.options__section_button-submit');

let canTake = document.querySelector('.options__input[name="canTake"]'); 
canTake.oninput = function() {
  document.querySelector('.options__can-take-amount_result').innerHTML = (2 * (+canTake.value) + 1);
}


defaultButton.addEventListener('click', defaultStart);
submitButton.addEventListener('click', modifiedStart);

function defaultStart(event) {
  event.preventDefault();

  totalCounter = totalPrimary;
  document.querySelector('.count-container__counter_total-counter').innerHTML = totalPrimary;
  max = 3;

  createButtons();
  options.style.display = 'none';
}

function modifiedStart(event) {
  event.preventDefault();

  let amount = document.querySelector('.options__input[name="amount"]');
  totalCounter = +amount.value;
  document.querySelector('.count-container__counter_total-counter').innerHTML = +amount.value;

  max = (2 * (+canTake.value) + 1);

  let firstTurn = document.querySelector('.options__checkbox');
  if (!firstTurn.checked) {
    computerTakeMatch();
  }
  
  createButtons();
  options.style.display = 'none';
}

function createButtons() {
  for(let i = 1; i <= max; i++) {
    let button = document.createElement('button');
    button.className = 'match-game__button';
    button.innerHTML = i;

    button.onclick = function(event) {
      event.preventDefault();
      playerTakeMatch(i);
    }

    let img = document.createElement('img');
    img.className = 'match__logo';
    img.setAttribute('src', './images/match.svg');
    img.setAttribute('alt', 'match');

    button.appendChild(img);

    let container = document.querySelector('.options__section_buttons');
    container.append(button);
  }
}