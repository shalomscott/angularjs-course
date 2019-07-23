'use strict';

main.controller('displayController', ($scope, $rootScope) => {
    $scope.result = 0;
    $scope.fetchResult = () => {
        $scope.result = $rootScope.result;
    }
});