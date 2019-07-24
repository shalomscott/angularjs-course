angular.module("secondModule", []).controller("secondCtrl", $scope => {
	$scope.message = "Hey there.";
});

const app = angular.module("mainModule", ["ngDialog", "secondModule"]);
