let computerCounter = 0;
let totalCounter = 0; 
let playerCounter = 0;
let computerPrimary = 0;
let totalPrimary = 25;
let playerPrimary = 0;
let min = 1;
let max = 3;
let isEnded = false;


computerCounter = computerPrimary;
playerCounter = playerPrimary;
document.querySelector('#computer-counter').innerHTML = computerPrimary;
document.querySelector('#player-counter').innerHTML = playerPrimary;

function playerTakeMatch( playerValue ) {
    if( playerValue > totalCounter) {return};

    playerCounter = playerCounter + playerValue;
    totalCounter = totalCounter - playerValue;
    
    checkEndGame();

    computerTakeMatch();

    checkEndGame();

    document.querySelector('#total-counter').innerHTML = totalCounter;
    document.querySelector('#player-counter').innerHTML = playerCounter;
}

function computerTakeMatch() {
    
    let computerValue = turnAlgorithm(totalCounter, playerCounter, computerCounter, max);

    //test
    //console.log('totalCounter='+totalCounter+' playerCounter='+playerCounter+' computerCounter'+computerCounter+' totalEven='+totalEven+' playerEven='+playerEven+' computerEven='+computerEven);
    //test

    computerCounter = computerCounter + computerValue;
    totalCounter = totalCounter - computerValue;

    document.querySelector('#total-counter').innerHTML = totalCounter;
    document.querySelector('#computer-counter').innerHTML = computerCounter;
};

function checkEndGame() {
    if(totalCounter != 0 || isEnded) { return };
    endGame();
}

function endGame() {	
  if (playerCounter % 2 == 0 && computerCounter % 2 != 0) {
		
	showResultPopup('win');

  } else if (playerCounter % 2 != 0 && computerCounter % 2 == 0) {
		
	showResultPopup('defeat');

  } else if (playerCounter % 2 == 0 && computerCounter % 2 == 0) {
				
	showResultPopup('draw');

  } else if (playerCounter % 2 != 0 && computerCounter % 2 != 0) {
				
	showResultPopup('draw');

  };

  isEnded = true;
}

