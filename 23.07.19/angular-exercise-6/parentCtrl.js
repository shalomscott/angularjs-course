module.controller("parentCtrl", ParentCtrl)

function ParentCtrl($scope, $rootScope) {
    $scope.model = '';
    $scope.color = '';
    $scope.price = 0;
    $scope.id = 0;
    $scope.order = 'color';
    $scope.selected = 1;

    $rootScope.devices = [
        new Mobile({ model: "IPhone X", color: "black", price: 3500 }),
        new Mobile({ model: "Xiaomi", color: "green", price: 1000 }),
        new Mobile({ model: "Samsung Galaxy 11+", color: "black", price: 5500 }),
        new Mobile({ model: "LG V60", color: "White", price: 7500 })
    ]

    $scope.updateOrder = (newColor) => {
        if ($scope.order === newColor)
            $scope.order = `-${newColor}`;
        else
            $scope.order = newColor;
    }

    $scope.selectMobile = (index) => {
        $scope.selected = index;
    }

    $scope.removeMobile = (index) => {
        $rootScope.devices.splice(index, 1);
    }

    $scope.addMobile = () => {
        const { model, color, price } = $scope;
        $rootScope.devices.push(new Mobile({ model, color, price }))
    }

    $scope.updateMobile = () => {
        const { model, color, price } = $scope;
        $rootScope.devices[$scope.id] = new Mobile({ model, color, price });
    }
}
