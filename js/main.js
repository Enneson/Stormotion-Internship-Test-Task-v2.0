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
document.querySelector('.count-container__counter_computer-counter').innerHTML = computerPrimary;
document.querySelector('.count-container__counter_player-counter').innerHTML = playerPrimary;

function playerTakeMatch( playerValue ) {
    if( playerValue > totalCounter) {return};

    playerCounter = playerCounter + playerValue;
    totalCounter = totalCounter - playerValue;
    
    checkEndGame();

    computerTakeMatch();

    checkEndGame();

    document.querySelector('.count-container__counter_total-counter').innerHTML = totalCounter;
    document.querySelector('.count-container__counter_player-counter').innerHTML = playerCounter;
}

function computerTakeMatch() {
    if( totalCounter == 0 ) { return };

    let computerValue;

    if ( totalCounter == 7  && playerCounter % 2 != 0 && computerCounter % 2 != 0) {

        computerValue = 2;

    } else if( totalCounter == 5 && playerCounter % 2 != 0 && computerCounter % 2 == 0 ) {
          
        computerValue = 1; 
    
    } else if( totalCounter == 4 && playerCounter % 2 != 0 && computerCounter % 2 != 0) {
        
        computerValue = 2;
    
    } else if( totalCounter == 4 && computerCounter % 2 != 0 && playerCounter % 2 == 0) {

        computerValue = 3;

    } else if( totalCounter == 3 && computerCounter %2 != 0) {
        
        computerValue = 3;
     
    } else if( totalCounter == 3 && computerCounter %2 == 0 ) {
        
        computerValue = 2;

    } else if( totalCounter == 2 && computerCounter % 2 != 0 ) {

        computerValue = 1;

    } else if ( totalCounter == 2 && computerCounter % 2 == 0) {
        
        computerValue = 2;
    
    } else { //стандартный выбор случайного значения, если выше не оказалось подходящего условия
        
        computerValue = Math.floor(min + Math.random() * (max + min - 1));

        if( computerValue > totalCounter ) {
            max = totalCounter;
            computerValue = Math.floor(min + Math.random() * (max + min - 1));  
        }
    };
    
    computerCounter = computerCounter + computerValue;
    totalCounter = totalCounter - computerValue;

    document.querySelector('.count-container__counter_total-counter').innerHTML = totalCounter;
    document.querySelector('.count-container__counter_computer-counter').innerHTML = computerCounter;
};

function checkEndGame() {
    if(totalCounter != 0 || isEnded) { return };
    endGame();
}

function endGame() {
	
	if (playerCounter % 2 == 0) {
		
		showResultPopup('win');

  } else if (computerCounter % 2 == 0) {
		
		showResultPopup('defeat');

  } else if (playerCounter % 2 == 0 && computerCounter % 2 == 0) {
				
		showResultPopup('draw');

  } else if (playerCounter % 2 != 0 && computerCounter % 2 != 0) {
				
		showResultPopup('draw');

  };

    isEnded = true;
}