// variables
var elKeycodeNum = document.querySelector('.keycode__num');
var elKeycodeKeyboard = document.querySelector('.keycode__keyboard');

document.body.addEventListener('keydown', (evt) => {
	evt.preventDefault();

	elKeycodeNum.textContent = evt.which;
	elKeycodeKeyboard.textContent = evt.code;

	console.log(evt);
});