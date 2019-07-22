'use strict';

class Person {
    constructor({ name, age, password, gender, carType, hasBike }) {
        this.name = name;
        this.age = age;
        this.password = password;
        this.gender = gender;
        this.carType = carType;
        this.hasBike = hasBike;
    }
}

main.controller('personController', $scope => {
    $scope.person = new Person({
        name: 'Shalom Steinbach',
        age: 22,
        password: '1234',
        gender: 'male',
        carType: 'volvo',
        hasBike: false
    });
});