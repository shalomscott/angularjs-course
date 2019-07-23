'use strict';

main.controller('calcController', ($scope, $rootScope) => {
    $scope.op = '+'
    $scope.lhv = 0
    $scope.rhv = 0
    $rootScope.result = 0
    $scope.calc = () => {
        const { op, lhv, rhv } = $scope;
        switch (op) {
            case '+':
                $rootScope.result = lhv + rhv;
                break;
            case '-':
                $rootScope.result = lhv - rhv;
                break;
            case '*':
                $rootScope.result = lhv * rhv;
                break;
            case '/':
                $rootScope.result = lhv / rhv;
                break;
        }
    }
});