main.controller('timeController', $scope => {
    $scope.time = new Date();
    $scope.updateTime = () => $scope.time = new Date();
});