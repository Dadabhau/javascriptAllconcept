'use strict';
// function clacAge(birthYear) {
//     const age = 2037 - birthYear;
//     console.log(firstName);
//     function printAge() {
//         let outPut = `${firstName} You are ${age}, born in ${birthYear}`;
//         console.log(outPut)
//         if (birthYear >= 1981 && birthYear <= 1996) {
//             var millenial = true;
//             const firstName = 'Thete'
//             outPut = 'NEW OUTPUT!'
//             const str = `Oh, and you're a millenial, ${firstName}`;
//             console.log(str);

//             function add(a, b) {
//                 return a + b;
//             }
//         }
//         // console.log(str)
//         console.log(millenial);
//         console.log(outPut);
//         // console.log(add(2, 3))
//     }
//     printAge();
//     return age;
// }

// const firstName = 'Dadabhau';
// clacAge(1985);
// console.log(age);
// printAge()

console.log('this', this)
// Hoisting
console.log(me);
// console.log(job);
// console.log(year)
var me = 'Dadabhau';
let job = 'Developer';
const year = 1985;

// function 
console.log(addDecl(2, 3))
// console.log(addExpr(2, 3))
// console.log(addArrow(2, 3))

function addDecl(a, b) {
    return a + b;
}

const addExpr = function (a, b) {
    return a + b
}
var addArrow = (a, b) => a + b;


//Example 
if (!numProducts) deleteShoppingCart();
var numProducts = 10;
function deleteShoppingCart() {
    console.log('All product deleted!')
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x)
console.log(y === window.y)
console.log(z === window.z)


let age = 30;
let oldAge = age;
age = 31;

console.log(age)
console.log(oldAge);

const meObj = {
    name: 'Dadabhau',
    age: 30,
};
const friend = meObj;
friend.age = 27;
console.log('Friend', friend);
console.log('Me', meObj)

var arr1 = [1, 2, 3];
var arr2 = arr1;
arr2[1] = 4;
console.log(arr1);

var demo = 'Dadabhau'
var demo1 = demo;
demo1 = 'Vedshree';
console.log(demo)
console.log(demo1);

var obj = {
    firstName: 'Dadabhau',
    lastName: 'Thete'
}

var obj1 = obj;
obj1.lastName = 'Thorat'
console.log(obj)

let lastname = 'Thete';
let oldLastName = lastname;
lastname = 'Thorat';
console.log(lastname, oldLastName);

const Jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27
};
const marriedJessica = Jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marrige:', Jessica);
console.log('After marrige', marriedJessica)

// Copying Objects
const Jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob']
};
const jessicaCopy = Object.assign({}, Jessica2);
jessicaCopy.lastName = 'Thete';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John')

console.log('Before marrige:', Jessica2);
console.log('After marrige', jessicaCopy);