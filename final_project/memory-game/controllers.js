'use strict';

app.controller('boardCtrl', function($scope, guesses) {
	this.hintIndex = null;
	this.selectedIndex = null;
	this.squares = [];

	for (let i = 1; i <= guesses.needed; ++i)
		this.squares.push(new Square(i), new Square(i));
	shuffleArray(this.squares);

	this.selectSquare = index => {
		const { squares, selectedIndex, hintIndex } = this;
		if (hintIndex !== null) return;
		if (!squares[index].isAlive) return;
		if (index === selectedIndex) return;
		if (selectedIndex === null) {
			this.selectedIndex = index;
			return;
		}

		this.hintIndex = index;

		setTimeout(() => {
			const { squares, selectedIndex } = this;
			this.hintIndex = null;
			if (squares[selectedIndex].number === squares[index].number) {
				squares[selectedIndex].kill();
				squares[index].kill();
				this.selectedIndex = null;
				guesses.correct++;
			} else this.selectedIndex = index;
			guesses.total++;
			$scope.$apply();
		}, 700);
	};
});

app.controller('scoreCtrl', function(guesses) {
	this.guesses = guesses;
});

app.controller('bannerCtrl', function(guesses) {
	this.guesses = guesses;
});