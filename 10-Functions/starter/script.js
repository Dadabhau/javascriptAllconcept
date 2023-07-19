'use strict';
const bookings = [];
// Default Parameter
const createBooking = function (flightNum, numPassengers = 1, price = 199) {
    // numPassengers = numPassengers || 1;
    price = 199 * numPassengers;
    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking)
}
createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2)
createBooking('LH123', 5)

createBooking('LH123', undefined, 1000)

const flight = 'Lh234';
const dada = {
    name: 'Dadabhau Thete',
    passport: 246275654644
}

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;
    if (passenger.passport === 246275654644) {
        alert('Checked In')
    } else {
        alert('Wrong passport')
    }
}
checkIn(flight, dada);
console.log(flight);
console.log(dada);

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 10000000000);
}
newPassport(dada);
checkIn(flight, dada)


const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
}
const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}
// Higher-Order Function
const transfromer = function (str, fn) {
    console.log(`Original String: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transfomed by: ${fn.name}`);
}
transfromer('Javascript is the best!', upperFirstWord);
transfromer('Javascript is the best!', oneWord);

// Js uses callbacks all the time
const high5 = function () {
    console.log('Hello')
}
document.body.addEventListener('click', high5);
['Dadabhau', 'Dilip', 'Deepak'].forEach(high5)

const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    }
}
const greeterHey = greet('Hey');
greeterHey('Dadabhau');
greeterHey('Vedshree');
greet('Hello I am')('Dadabhau');

// const greetArrow = (greeting) => {
//     return (name) => {
//         console.log(`${greeting} ${name}`);
//     }
// }
const greetArrow = greeting => name => console.log(`${greeting} ${name}`);
greetArrow('Hey')('This is arrow Function');

// Apply, Call, Bind

const airIndia = {
    airline: 'Air India',
    iataCode: 'AI',
    bookings: [],
    // book: function () { }
    book(flightNumer, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${flightNumer}`);
        this.bookings.push({ flight: `${this.iataCode} ${flightNumer} , ${name}` })
    },

}
airIndia.book(239, 'Dadabhau Thete');
airIndia.book(635, 'Vedshree Thete');

const kingFisher = {
    airline: 'King Fisher',
    iataCode: 'KF',
    bookings: [],
}
const book = airIndia.book;
// Does Not Work
// book(23, 'Sarah Williams');

// Call Method
book.call(kingFisher, 23, 'Sarah Williams');
console.log(kingFisher)

book.call(airIndia, 23, 'Sarah Thete');
console.log(airIndia)

const swiss = {
    airline: 'Swiss',
    iataCode: 'SW',
    bookings: [],
}
book.call(swiss, 583, 'Marry Thete');
console.log(swiss)

// Apply Method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss)

book.call(swiss, ...flightData);

// Bind method
const bookAI = book.bind(airIndia)
const bookKG = book.bind(kingFisher)
const bookSW = book.bind(swiss)
bookAI(23, 'John Williams')
bookKG(23, 'John Williams')
bookSW(23, 'John Williams')


// 
const runOnce = function () {
    console.log('This will never run agian');
}
runOnce();

// IIFE
(function () {
    console.log('This will never run agian');
    const isPrivate = 23
})();

// console.log(isPrivate);
(() => console.log('This will never run agian arrow'))();

// Closures
const secureBooking = function () {
    let passengerCount = 0;

    return function () {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}
const booker = secureBooking();
booker();
booker();
booker();
