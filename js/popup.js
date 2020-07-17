let popup = document.createElement('div');
popup.setAttribute('id', 'popup');
popup.insertAdjacentHTML("afterbegin", '<div id="popupWindow"><h1>Игра Спички</h1><p>Двое играют в игру. Из кучки, где имеется 25 спичек, каждый берёт себе по очереди одну, две или три спички. Выигрывает тот, у кого в конце игры – после того, как все спички будут разобраны, – окажется четное число спичек. </p></div>')
document.body.append(popup);

window.onkeyup = closePopup; 
document.getElementById('popup').onclick = closePopup;

function closePopup(event) {
    document.getElementById('popup').style.display='none';
}
