app.value('appValues', {
	a: 1,
	b: 1,
	colors: 'green-yellow'
});

app.constant('errorMessages', {
	divideByZero: 'You cannot divide by zero!',
	aIsNegative: 'A cannot be less than 1!',
	bIsNegative: 'B cannot be less than 1!'
});

app.factory('countToA', appValues => {
	return () => {
		const result = [];
		for (let i = 1; i <= appValues.a; ++i) result.push(i);
		return result;
	};
});

app.service('countDownToB', function(appValues) {
	this.countdown = () => {
		const result = [];
		for (let i = appValues.b; i >= 1; --i) result.push(i);
		return result;
	};
});
