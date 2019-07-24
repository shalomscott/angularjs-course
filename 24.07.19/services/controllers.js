'use strict';

app.controller('inputCtrl', ($scope, appValues) => {
	$scope.appValues = appValues;
});

app.controller('sumCtrl', ($scope, appValues) => {
	$scope.appValues = appValues;

	const classMap = {
		'green-yellow': {
			positive: 'green',
			negative: 'yellow'
		},
		'blue-brown': {
			positive: 'blue',
			negative: 'brown'
		}
	};

	$scope.getClass = () =>
		appValues.a + appValues.b > 0
			? classMap[appValues.colors].positive
			: classMap[appValues.colors].negative;
});

app.controller('divCtrl', ($scope, appValues, errorMessages) => {
	$scope.appValues = appValues;
	$scope.$watch('appValues.b', (newVal, oldVal) => {
		if (newVal === 0) {
			alert(errorMessages.divideByZero);
			appValues.b = oldVal;
		}
	});
});

app.controller('ACtrl', ($scope, countToA, appValues, errorMessages) => {
	$scope.appValues = appValues;
	$scope.errorMessages = errorMessages;
	$scope.countToA = countToA;
});

app.controller('BCtrl', ($scope, countDownToB, appValues, errorMessages) => {
	$scope.appValues = appValues;
	$scope.errorMessages = errorMessages;
	$scope.countDownToB = countDownToB.countdown;
});

app.controller('historyCtrl', ($scope, appValues) => {
	$scope.appValues = appValues;
	$scope.historyA = [];
	$scope.historyB = [];
	$scope.$watch('appValues.a', newValue => $scope.historyA.push(newValue));
	$scope.$watch('appValues.b', newValue => $scope.historyB.push(newValue));
});
