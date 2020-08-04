let options = document.querySelector('.options__wrapper');
let defaultButton = options.querySelector('#options-default');
let submitButton = options.querySelector('#options-submit');
let selectButton = document.querySelector('#select-take');

let maxTake = document.querySelector('#max-take'); 
maxTake.oninput = function() {
  document.querySelector('.input-block__value').innerHTML = (2 * (+maxTake.value) + 1);
}

let inputs = options.querySelectorAll('.input-block__input');
let labels = options.querySelectorAll('.input-block__label');

for(let input of inputs) {    
  input.addEventListener('focus', swipeLabel);
  input.addEventListener('input', checkInput);
  input.addEventListener('blur', unswipeLabel);

  defaultLabel(input);
}

function defaultLabel(input) {
  if(input.value != '') {
    for(label of labels) {
      if( label.getAttribute('for') == input.name) {
        label.classList.add('default');
      }
    }  
  }
}

function swipeLabel(event) {
  for(let label of labels) {
    if( label.getAttribute('for') == event.target.name ) {
      label.classList.remove('default');
      label.classList.add('active');
    }
  }
}

function unswipeLabel(event) {
  for(let label of labels) {
    if( label.getAttribute('for') == event.target.name ) {
      if( event.target.value != '') { return false };
      label.classList.remove('active');
    }
  }
}

function checkInput(event) {
  event.target.value = event.target.value.replace(/[^\d]/g, '');
}

defaultButton.addEventListener('click', defaultStart);
submitButton.addEventListener('click', modifiedStart);

function defaultStart(event) {
  event.preventDefault();

  totalCounter = totalPrimary;
  document.querySelector('#total-counter').innerHTML = totalPrimary;
  max = 3;

  createSelectItem();
  options.style.display = 'none';
}

function modifiedStart(event) {
  event.preventDefault();

  let amount = document.querySelector('#matches-amount');
  totalCounter = +amount.value;
  document.querySelector('#total-counter').innerHTML = +amount.value;

  max = (2 * (+maxTake.value) + 1);

  let firstTurn = document.querySelector('.switch-block__checkbox');
  if (!firstTurn.checked) {
    computerTakeMatch();
  }
  
  createSelectItem();
  options.style.display = 'none';
}

function createSelectItem() {
  for(let i = 1; i <= max; i++) {
    if( i == 1) {
      let current = document.querySelector('.select__current');
      current.innerText = 'Take ' + [i];
      current.dataset.value = i
    }

    let item = document.createElement('li');
    item.className = 'select__item';
    item.dataset.value = i;
    item.setAttribute('role','option');
    item.tabIndex = '-1';
    item.innerHTML = 'Take ' + i;

     let container = document.querySelector('.select__list');
     container.append(item);

     item.addEventListener('click', selectChoose);
  }
}

let select = document.querySelector('.select');
let selectHeader = document.querySelectorAll('.select__header');
let selectItem = document.querySelectorAll('.select__item');
let selectIcon = document.querySelector('.select__icon');

selectHeader.forEach( item => {
  item.addEventListener('click', selectToggle);
});

function selectToggle() {
  let thisSelect = this.parentElement;
  thisSelect.classList.toggle('open');
  let icon = thisSelect.querySelector('.select__icon');
  icon.classList.toggle('icon-open');

  document.addEventListener('click', function(event) {
    if( select.classList.contains('open') && !event.target.closest('.select__header') ){
      select.classList.toggle('open');
      selectIcon.classList.toggle('icon-open');
    }
  });

}


function selectChoose() {
  let thisText = this.innerText;
  let thisValue = this.dataset.value;

  let select = this.closest('.select');
  let current = select.querySelector('.select__current');
  current.innerText = thisText;
  current.dataset.value = thisValue;

  selectIcon.classList.toggle('icon-open');
  select.classList.toggle('open');
}

selectButton.addEventListener('click', takeMatch);

function takeMatch(event) {
  event.preventDefault();
  let select = this.closest('.select');
  let current = select.querySelector('.select__current');
  playerTakeMatch(+current.dataset.value);
}
