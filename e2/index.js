'use strict';

function onClick() {
    const name = document.getElementById('nameText').value;
    const age = document.getElementById('ageText').value;
    const password = document.getElementById('passwordText').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    const carTypeElement = document.getElementById('carTypeSelector');
    const carType = carTypeElement.options[carTypeElement.selectedIndex].value;

    const hasBike = document.getElementById('hasBikeCheckbox').checked;

    const personConstructor = new PersonConstructor({ name, age, password, gender, carType, hasBike });
    const personClass = new PersonClass({ name, age, password, gender, carType, hasBike });
    // Print a new person
    console.log(personConstructor);
    console.log(personClass);

    // Print toString() result
    console.log(personConstructor.toString())
    console.log(personClass.toString())
}