"use strict";

function logger() {
    console.log('My name is Jonas');
}

logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
fruitProcessor(5, 0);
const appleJuice = fruitProcessor(5, 0)
console.log(appleJuice)

function calcAge1(birthYear) {
    const d = new Date();
    let year = d.getFullYear();
    return year - birthYear
}

const age = calcAge1(1985)
console.log(age)

// Function Expression (Anonomes function)
const calcAge2 = function (birthYear) {
    const d = new Date();
    let year = d.getFullYear();
    return year - birthYear
}
const age2 = calcAge2(1995)
console.log(age2)

// Arrow function
const calcAge3 = birthYear => 2023 - birthYear
console.log(calcAge3(2018))

const yearsUntilRetirement = (birthYear, firstname) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstname} retire in ${retirement} years`
}

console.log(yearsUntilRetirement(1985, 'Dadabhau'));

// Function call in function
function cutFruitPieces(fruit) {
    return fruit * 4;
}
function fruitMakerProcessor(apples, oranges) {
    const applePices = cutFruitPieces(apples);
    const orangesPices = cutFruitPieces(oranges);
    console.log(apples, oranges);
    const juice = `Juice with ${applePices} pieces of apples and ${orangesPices} pieces of oranges.`;
    return juice;
}

console.log(fruitMakerProcessor(2, 3))

const calcAge4 = function (bYear) {
    const d = new Date();
    let year = d.getFullYear();
    return year - bYear
}
const yearsUntilRetirements = function (birthYear, firstname) {
    const age = calcAge4(birthYear)
    const retirement = 65 - age;
    if (retirement > 0) {
        console.log(`${firstname} retire in ${retirement} years`)
        return retirement;
    } else {
        console.log(`${firstname} has already retired `)
        return -1
    }
}
console.log(yearsUntilRetirements(1945, 'Dilip'))

// Array
const friends = ['Deepak', 'Ritesh', 'Amit'];
console.log(friends)
console.log(friends[0])
console.log(friends[1])
console.log(friends[2])
console.log(friends.length)
console.log(friends[friends.length - 1])
console.log(friends[friends.length - 2])
console.log(friends[friends.length - 3])

friends[2] = 'Jay'
console.log(friends)

const firstname = 'Dadabhau'
const dadabhau = [firstname, 'Thete', 2037 - 1985, friends]
console.log(dadabhau)

const years = new Array(1991, 1985, 1987, 1989);

const calcAge5 = function (bYear) {
    const d = new Date();
    let year = d.getFullYear();
    return year - bYear
}
const yearsList = [1990, 1991, 1992, 1993, 1994];
const age1 = calcAge5(yearsList[0])
const agE2 = calcAge5(yearsList[1])
const age3 = calcAge5(yearsList[2])
const age4 = calcAge5(yearsList[3])
const age5 = calcAge5(yearsList[4])
const age6 = calcAge5(yearsList[yearsList.lenght - 1])
console.log(age1, agE2, age3, age4, age5, age6)

// Array Methods
const friendsList = ['Deepak', 'Ritesh', 'Amit'];
// Add Element End
friendsList.push('Jay')
console.log(friendsList)
// Add Element Start
friendsList.unshift('Vishnu')
console.log(friendsList);

// Remove Element last
friendsList.pop()
console.log(friendsList);
// Remove Element start
friendsList.shift()
console.log(friendsList);

console.log(friendsList.indexOf('Amit'))
console.log(friendsList.indexOf('Jay'))

console.log(friendsList.includes('Amit'))
console.log(friendsList.includes('Jay'))
friendsList.push(23)
console.log(friendsList.includes('23'))

// Object

// const namelist = ['Dadabhau', 'Vedshree', 2037 - 1985, 'teacher', ['Neha', 'Minal',]]

const listName = {
    firstName: 'Dadabhau',
    lastName: 'Thete',
    age: 2037 - 1985,
    job: 'Developer',
    friends: ['Deepak', 'Ritesh', 'Amit']
}
// Dot and braket notation
console.log(listName.firstName)
console.log(listName['firstName'])

const nameKey = 'Name'
console.log(listName['first' + nameKey])
console.log(listName['last' + nameKey])

listName.location = 'Pune';
listName.email = 'dadabhauthet@gmail.com'
console.log(listName)

// Object Methods
const listNames = {
    firstName: 'Dadabhau',
    lastName: 'Thete',
    birthYear: 1985,
    job: 'Developer',
    friends: ['Deepak', 'Ritesh', 'Amit'],
    hasDriversLicense: true,
    calcAge: function (birthYear) {
        return 2023 - birthYear
    }
};
console.log(listNames.calcAge(1985))
console.log(listNames['calcAge'](1985))

// Loop
for (let i = 0; i <= 10; i++) {
    console.log(i)
}
// Looping Array
const types = []
const namelist = ['Dadabhau', 'Vedshree', 2037 - 1985, 'teacher', ['Neha', 'Minal',], true]
for (let i = 0; i < namelist.length; i++) {

    // Reading from nameList array
    console.log(namelist[i], ' - Type Of ' + typeof namelist[i])

    // Filling types array
    // types[i] = typeof namelist[i];
    types.push(typeof namelist[i])
}
console.log(types)

const listOfYears = [1990, 1991, 1992, 1993, 1994];
const ageOfYears = [];

for (let i = 0; i < listOfYears.length; i++) {
    ageOfYears.push(2023 - listOfYears[i])
}
console.log(ageOfYears)

// Continue and Break loop
console.log('----Only String---')
for (let i = 0; i < namelist.length; i++) {
    if (typeof namelist[i] !== 'string') continue;
    console.log(namelist[i], ' - Type Of ' + typeof namelist[i])
}
console.log('----Break With Number---')
for (let i = 0; i < namelist.length; i++) {
    if (typeof namelist[i] === 'number') break;
    console.log(namelist[i], ' - Type Of ' + typeof namelist[i])
}

// Backwards Looping
for (let i = namelist.length - 1; i >= 0; i--) {
    console.log(namelist[i], ' - Type Of ' + typeof namelist[i] + ' Backward')
}
// Loop in loop
for (let i = 0; i < 6; i++) {
    console.log(`-------Starting Exercise ${i}`);
    for (let j = 0; j < 6; j++) {
        console.log(`Lifting weight repetition ${j}`)
    }
}

// While Loop
let i = 1;
while (i <= 10) {
    console.log(`Lifting weight repetition ${i} while loop`)
    i++
}
let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
    console.log(`You rolled a ${dice}`)
    dice = Math.trunc(Math.random() * 6) + 1;
}