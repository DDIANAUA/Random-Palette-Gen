const colElements = document.querySelectorAll('.col');

document.addEventListener('keydown', (event) => {
	if ((event.code.toLowerCase = 'space')) {
		event.preventDefault();
		setRandomColours();
	}
});

setRandomColours();

document.addEventListener('click', (event) => {
	const buttonLockElement = event.target.closest('button[data-type="lock"]');
	const headindColorTextElement = (event.target.dataset.type = 'copy');
	if (buttonLockElement) {
		const lockIconElement = buttonLockElement.children[0];
		lockIconElement.classList.toggle('fa-lock-open');
		lockIconElement.classList.toggle('fa-lock');
	} else if (headindColorTextElement) {
		copyToClipboard(event.target.textContent);
	}
});

function getRandomColour() {
	const generating = () =>
		Math.round(Math.random() * 255)
			.toString(16)
			.padStart(2, '0');
	let red = generating();
	let green = generating();
	let blue = generating();
	return `#${red}${green}${blue}`;
}

function copyToClipboard(text) {
	return navigator.clipboard.writeText(text);
}

function setRandomColours() {
	colElements.forEach(function (colElement) {
		if (colElement.querySelector('i').classList.contains('fa-lock-open')) {
			const headingElement = colElement.querySelector('h2');
			const buttonElement = colElement.querySelector('button');
			const color = getRandomColour();
			headingElement.textContent = color;
			colElement.style.background = color;

			setTextColor(headingElement, color);
			setTextColor(buttonElement, color);
		}
	});
}

function setTextColor(text, color) {
	const luminance = chroma(color).luminance();
	text.style.color = luminance > 0.5 ? 'black' : 'white';
}
