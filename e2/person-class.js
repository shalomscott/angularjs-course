'use strict';

class PersonClass {
    constructor({ name, age, password, gender, carType, hasBike }) {
        this.name = name;
        this.age = age;
        this.password = password;
        this.gender = gender;
        this.carType = carType;
        this.hasBike = hasBike;
    }

    toString() {
        const { name, age, password, gender, carType, hasBike } = this;
        return `{
    name: ${name},
    age: ${age},
    password: ${password},
    gender: ${gender},
    carType: ${carType},
    hasBike: ${hasBike}
}`;
    }
}