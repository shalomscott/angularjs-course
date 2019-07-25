'use strict';

class Square {
	constructor(number) {
		this.number = number;
		this.isAlive = true;
	}

	kill() {
		this.isAlive = false;
	}
}

function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}
