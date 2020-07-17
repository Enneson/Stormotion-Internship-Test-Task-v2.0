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
totalCounter = totalPrimary;
playerCounter = playerPrimary;
document.querySelector('.computerCounter').innerHTML = computerPrimary;
document.querySelector('.totalCounter').innerHTML = totalPrimary;
document.querySelector('.playerCounter').innerHTML = playerPrimary;


document.querySelector('.one').addEventListener('click',
    function() {playerTakeMatch( 1 )}
);
document.querySelector('.two').addEventListener('click',
    function() {playerTakeMatch( 2 )}
);
document.querySelector('.three').addEventListener('click',
    function() {playerTakeMatch( 3 )}
);

document.body.addEventListener('keyup', function(event) {
    switch(event.code) {
      case 'Digit1': 
        playerTakeMatch(1);
        break;
      case 'Digit2':
        playerTakeMatch(2);
        break;
      case 'Digit3':
        playerTakeMatch(3);
        break;
    }
});


function playerTakeMatch( playerValue ) {
    if( playerValue > totalCounter) {return};

    playerCounter = playerCounter + playerValue;
    totalCounter = totalCounter - playerValue;
    
    checkEndGame();

    computerTakeMatch();

    checkEndGame();

    document.querySelector('.totalCounter').innerHTML = totalCounter;
    document.querySelector('.playerCounter').innerHTML = playerCounter;
    document.querySelector('.computerCounter').innerHTML = computerCounter;
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
};

function checkEndGame() {
    if(totalCounter != 0 || isEnded) { return };
    endGame();
}

function endGame() {

    if (playerCounter % 2 == 0) {
        alert(`Победа игрока!`);
     } else if (computerCounter % 2 == 0) {
        alert('Победа компьютера!');
     } else if (playerCounter % 2 == 0 && computerCounter % 2 == 0) {
        alert('Ничья!');
     } else if (playerCounter % 2 != 0 && computerCounter % 2 != 0) {
        alert('Ничья!');
     };

    isEnded = true;
}