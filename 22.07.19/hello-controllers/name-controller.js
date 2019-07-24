main.controller('nameController', $scope => {
    $scope.name = 'Shalom Steinbach';
    $scope.flipName = () => {
        $scope.name = $scope.name.split('').reverse().join('');
    }
});