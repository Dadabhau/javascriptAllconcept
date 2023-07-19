'use strict';

// Create consturctor function
const Person = function (firstName, birthYear) {
    // console.log(this);
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never to this if thosand object
    // this.calcAge = function () {
    //     console.log(2023 - this.birthYear)
    // };
}
const dadabhau = new Person('Dadabhau', 1985);
console.log(dadabhau);
// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const sarah = new Person('Sarah', 1987);
const paranj = new Person('Pranjali', 1991);
console.log(sarah, paranj);
const jay = 'Jay'
console.log(dadabhau instanceof Person);
console.log(jay instanceof Person);

// Prototypes
console.log(Person.prototype)
Person.prototype.calcAge = function () {
    console.log(2023 - this.birthYear)
};
dadabhau.calcAge();
sarah.calcAge();
paranj.calcAge();

console.log(dadabhau.__proto__);
console.log(dadabhau.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(dadabhau));
Person.prototype.species = 'Home Sapiens';
console.log(dadabhau.species, paranj.species);

console.log(dadabhau.hasOwnProperty('firstName'));
console.log(dadabhau.hasOwnProperty('species'));
console.log(dadabhau.__proto__);
// Object.prototype (top of prototype chain)
console.log(dadabhau.__proto__.__proto__);

const obj = {

    firstname: 'Dadabhau',
    lastname: 'Thete',
    address: 'Pune'
}
console.log(obj.__proto__);
console.table(obj);

const owners = ['Jonas', 'Dadabhau', 'Vedshree', 'Zach', 'Adam', 'Sarah'];
console.log(owners.__proto__);
const arr = [3, 6, 6, 5, 6, 9, 9, 1, 2, 1]
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);
Array.prototype.unique = function () {
    return [...new Set(this)];
}
console.log(arr.unique())

const h1 = document.querySelector('H1');
console.dir(h1);
console.dir(x => x + 1)

////////////// Class /////////////
// Class expression
// const PersonCl = class {}

// Class declaration
class PersonCl {
    constructor(fullname, birthYear) {
        this.fullname = fullname;
        this.birthYear = birthYear
    }
    // Methods will be added to .prototype property
    calcAge() {
        console.log(2023 - this.birthYear)
    }
    greet() {
        console.log(`Hey ${this.fullname}`);
    }
    get age() {
        return 2023 - this.birthYear;
    }
    // Set a property that already exists
    set fullname(name) {
        console.log(name)
        if (name.includes(' ')) this._fullname = name;
        else alert(`${name} is not a full name!`)
    }
    get fullname() {
        return this._fullname
    }

}
const jessica = new PersonCl('Jessica Davis', 1991)
console.log(jessica);
jessica.calcAge();
console.log(jessica.age)
console.log(jessica.__proto__ === PersonCl.prototype);

// Also work this adding function
// PersonCl.prototype.greet = function () {
//     console.log(`Hey ${this.firstName}`);
// }
jessica.greet()

// 1. Classes are not hoisted
// 2. Class are first-class citizes
// 3. Class are executed in strict mode

const walter = new PersonCl('Walter White', 1985)

//// Getter and Setter

const account = {
    owner: 'dadabhau',
    movements: [200, 530, 12, 300],

    get latest() {
        return this.movements.slice(-1).pop();
    },
    set latest(mov) {
        this.movements.push(mov)
    }
}
console.log(account.latest);
account.latest = 50;
console.log(account.movements);

const PersonProto = {
    calcAge() {
        console.log(2023 - this.birthYear)
    },
    init(firstname, birthYear) {
        this.firstName = firstname;
        this.birthYear = birthYear
    }
}
const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 1987;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarahW = Object.create(PersonProto);
sarahW.init('Sarah', 1988);
sarahW.calcAge()


////////////////////////////////////
// Inheritance Between "Classes": Constructor Functions

const PersonNew = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear
}
PersonNew.prototype.calcAge = function () {
    console.log(2023 - this.birthYear)
}

const Student = function (firstName, birthYear, course) {
    this.firstName = firstName;
    this.birthYear = birthYear;
    this.course = course;
}
Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}
const mike = new Student('Mike', 2018, 'Computer Science');
console.log(mike)
mike.introduce()