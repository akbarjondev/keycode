// variables
var elKeycode = document.querySelector('.keycode');
var elKeycodeNum = elKeycode.querySelector('.keycode__num');
var elKeycodeKeyboard = elKeycode.querySelector('.keycode__keyboard');

if(document.body.clientWidth < 768) {
	elKeycode.textContent = 'Only for computers!';
}

document.body.addEventListener('keydown', (evt) => {
	evt.preventDefault();

	elKeycodeNum.textContent = evt.which;
	elKeycodeKeyboard.textContent = evt.code;
});