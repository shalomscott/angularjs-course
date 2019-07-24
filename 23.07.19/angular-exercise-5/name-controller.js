'use strict';

main.controller('nameController', $scope => {
    $scope.name = '';
    $scope.$watch('name', (newName) => {
        if (newName === 'shalom')
            alert('Hey that\'s my name!');
    });
});