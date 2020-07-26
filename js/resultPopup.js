let resultPopupContainer = document.createElement('div');
resultPopupContainer.className = 'resultPopupContainer';
let resultPopup = document.createElement('div');
resultPopup.className = 'resultPopup';
resultPopupContainer.append(resultPopup);
document.body.append(resultPopupContainer);
resultPopupContainer.style.display = 'none';

function showResultPopup(result) {
	
  switch (result) {
    case 'win' :
			resultPopup.innerHTML = 'Победа игрока!';
      break;

    case 'defeat' :
			resultPopup.innerHTML = 'Победа компьютера!';
			break;

		case 'draw' :
			resultPopup.innerHTML = 'Ничья!';
			break;
	};
	
	resultPopupContainer.style.display = '';

	window.onkeyup = function(event) {
		 if (event.code == `Escape`) {
		 	closeResultPopup();	
		 } 
	};
	
	resultPopup.onclick = closeResultPopup;
}

function closeResultPopup(event) {
	resultPopupContainer.style.display = 'none';
}

