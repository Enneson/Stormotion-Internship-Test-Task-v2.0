let greetingPopup = document.createElement('div');
greetingPopup.className = 'greetingPopup';
greetingPopup.insertAdjacentHTML("afterbegin", '<div class="greetingPopupWindow"><h1>Игра Спички</h1><p>Двое играют в игру. Из кучки, где имеется 25 спичек, каждый берёт себе по очереди одну, две или три спички. Выигрывает тот, у кого в конце игры – после того, как все спички будут разобраны, – окажется четное число спичек. </p></div>')
document.body.append(greetingPopup);

window.onkeyup = closeGreetingPopup; 
greetingPopup.onclick = closeGreetingPopup;

function closeGreetingPopup(event) {
  greetingPopup.style.display='none';
  localStorage.setItem('greetingPopup', 'none');
}

if(localStorage.getItem('greetingPopup')) {
  greetingPopup.style.display='none';
};
