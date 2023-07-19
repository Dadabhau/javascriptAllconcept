'use strict';

document.querySelector('.message').textContent = 'Correct Number';
document.querySelector('.number').textContent = 36;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;

console.log(document.querySelector('.guess').value)

document.querySelector('.check').addEventListener('click', function () {
    console.log(document.querySelector('.guess').value)
})

// const name = 'Dadabhau';

// const first = () => {
//     let a = 1;
//     const b = secound(7, 9);
//     a = a + b;
//     return a;
// }
// function second(x, y) {
//     var c = 2;
//     return c;
// }
// first();

const myName = "Dadabhau";
function first() {
    const age = 30;
    if (age >= 30) {
        const decade = 3;
        var millenial = true;
    }
    function second() {
        const job = 'teacher';
        console.log(`${myName} is a ${age} old ${job} ${millenial}`)
    }
    second();
}
first();

// Scope chain
const a = 'Jonas';
firstOne();

function firstOne() {
    const b = 'Hello';
    secoundOne();
    function secoundOne() {
        const c = 'Hi';
        thirdOne();
    }
}
function thirdOne() {
    const d = 'Hey';
    console.log(d + c + b + a)
}