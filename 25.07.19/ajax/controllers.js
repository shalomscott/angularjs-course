'use strict';

app.controller('tableCtrl', ($scope, postsService, response) => {
	$scope.posts = [];

	postsService.getAllPosts().then(() => ($scope.posts = response.data));
});

app.controller('selectCtrl', ($scope, postsService, response) => {
	$scope.selectedId = 0;
	$scope.valid = false;
	$scope.id;
	$scope.userId;
	$scope.title = '';
	$scope.body = '';
	$scope.errMessage = '';

	$scope.updateSelection = () => {
		postsService
			.getPostById($scope.selectedId)
			.then(() => {
				$scope.id = response.data.id;
				$scope.userId = response.data.userId;
				$scope.title = response.data.title;
				$scope.body = response.data.body;
				$scope.valid = true;
			})
			.catch(() => ($scope.valid = false));
	};
});
