

let options = document.querySelector('.options__wrapper');
let defaultButton = document.querySelector('#options-default');
let submitButton = document.querySelector('#options-submit');

let canTake = document.querySelector('#max-take'); 
canTake.oninput = function() {
  document.querySelector('.input-block__value').innerHTML = (2 * (+canTake.value) + 1);
}


defaultButton.addEventListener('click', defaultStart);
submitButton.addEventListener('click', modifiedStart);

function defaultStart(event) {
  event.preventDefault();

  totalCounter = totalPrimary;
  document.querySelector('#total-counter').innerHTML = totalPrimary;
  max = 3;

  createButtons();
  options.style.display = 'none';
}

function modifiedStart(event) {
  event.preventDefault();

  let amount = document.querySelector('#matches-amount');
  totalCounter = +amount.value;
  document.querySelector('#total-counter').innerHTML = +amount.value;

  max = (2 * (+canTake.value) + 1);

  let firstTurn = document.querySelector('.switch-block__checkbox');
  if (!firstTurn.checked) {
    computerTakeMatch();
  }
  
  createButtons();
  options.style.display = 'none';
}

function createButtons() {
  for(let i = 1; i <= max; i++) {
    let button = document.createElement('button');
    button.className = 'take-buttons__button';
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

    let container = document.querySelector('.take-buttons');
    container.append(button);
  }
}