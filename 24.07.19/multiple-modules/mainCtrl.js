"use strict";

app.controller("mainCtrl", function($scope, ngDialog) {
	$scope.message = "I'm the main module.";
	$scope.clickToOpen = function() {
		ngDialog.open({
			template: "index.html",
			className: "ngdialog-theme-default"
		});
	};
});
