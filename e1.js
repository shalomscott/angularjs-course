'use strict';

// Part 1

const myself = {
    name: 'Shalom',
    age: 22,
    address: {
        city: 'Hashmona\'im',
        country: 'Israel'
    },
    family: [
        {
            name: 'Chaya',
            age: 52
        },
        {
            name: 'Talia',
            age: 21
        }
    ],

    getAddress() { return this.address; },

    howMayRelatives() { return this.family.length; },

    printMyName() { console.log(this.name); },

    addFamilyRelative(newRelative) { this.family.push(newRelative) },

    setName(newName) { this.name = newName; },
}

function printObj(obj) {
    console.log(buildObjString(obj));
}

function buildObjString(node, indent = 0) {
    let str = '';
    if (Array.isArray(node)) {
        str += '[';
        for (const item of node) {
            str += '\n' + ' '.repeat(indent + 1);
            str += buildObjString(item, indent + 1) + ',';
        }
        str += '\n' + ' '.repeat(indent) + ']';
    } else if (typeof node === 'object') {
        str += '{';
        for (const key in node) {
            str += '\n' + ' '.repeat(indent + 1) + key + ': ';
            str += buildObjString(node[key], indent + 1);
        }
        str += '\n' + ' '.repeat(indent) + '}';
    } else {
        str += node;
    }
    return str;
}

console.log(myself.getAddress());
console.log(myself.howMayRelatives());
myself.printMyName();
myself.addFamilyRelative({ name: 'Bob', age: 134 });
myself.setName('Scott');

printObj(myself);

// Part 2

// Regular Function
function mobilePhone(model, size, price, number) {
    return {
        model,
        size,
        price,
        number,
        getNumber() { return this.number; },
        setNumber(newNumber) { this.number = newNumber; }
    }
}

const nokia = mobilePhone('Nokia', 5, 20, '052-111-1111');
console.log(`Nokia: ${JSON.stringify(nokia, null, 2)}`);
console.log(`Nokia#getNumber: ${nokia.getNumber()}`);
nokia.setNumber('052-222-2222');
console.log(`Nokia#setNumber: ${nokia.getNumber()}`);

// Constructor Function
function MobilePhone(model, size, price, number) {
    this.size = size;
    this.number = number;

    let _price = 0;
    let _model = '';

    this.getNumber = function () { return this.number; };
    this.setNumber = function (newNumber) { this.number = newNumber; }
    this.getPrice = function () { return _price; }
    this.setPrice = function (newPrice) {
        if (newPrice > _price)
            _price = newPrice;
    }
    this.getModel = function () { return _model; };
    this.setModel = function (newModel) {
        if (newModel.length >= 4)
            _model = newModel;
    };

    this.setPrice(price);
    this.setModel(model);
}

const iphone = new MobilePhone('iPhone', 7, 50, '054-xxx-xxxx');
console.log(`iPhone: ${JSON.stringify(iphone, null, 2)}`);
console.log(`iPhone#getNumber: ${iphone.getNumber()}`);
iphone.setNumber('054-XXX-XXXX');
console.log(`iPhone#setNumber: ${iphone.getNumber()}`);
console.log(`iPhone#getPrice: ${iphone.getPrice()}`);
iphone.setPrice(100);
iphone.setPrice(5);
console.log(`iPhone#setPrice: ${iphone.getPrice()}`);
console.log(`iPhone#getModel: ${iphone.getModel()}`);
iphone.setModel('iPhone X');
iphone.setPrice('a');
console.log(`iPhone#setModel: ${iphone.getModel()}`);