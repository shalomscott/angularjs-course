"use strict";

module.controller("formCtrl", ($scope, $rootScope) => {
	$scope.name = "";
	$scope.email = "";
	$scope.age = 0;

	$scope.verificationClass = () => {
		const { name, email, age } = $scope;
		if (!name && !email && !age) return "empty";
		if (!name || !email || !age) return "partial";
		if (age < 18) return "underage";
		return "of-age";
	};
});
