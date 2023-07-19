'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal'
    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov} EUR</div>
  </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html)
  })
}


const calcDisplayBalance = function (acc) {
  acc.balance = acc.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} EUR`
}
calcDisplayBalance(account1.movements)
const calcDisplaySummery = function (acc) {
  const incomes = acc.movements.filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes} EUR`;

  const outIcome = acc.movements.filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outIcome)} EUR`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposite => deposite * acc.interestRate / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest} EUR`

}

// const username = user.toLowerCase().split(' ');
// console.log(username);
const createUserName = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner.toLowerCase().split(' ').map((name) => name[0]).join('');
  });
};
// const username = user.toLowerCase().split(' ').map((name) => name[0]).join('');
// console.log(username);
createUserName(accounts);
//Event handler
let currentAccount;

// Event handler
btnLogin.addEventListener('click', function (e) {
  //Prevent form from submitting
  e.preventDefault();
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value)
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`
    containerApp.style.opacity = 100

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur()

    // Display movement
    displayMovements(currentAccount.movements);

    // Display balance
    calcDisplayBalance(currentAccount);

    // Display summary
    calcDisplaySummery(currentAccount);
    updateUI
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
  console.log(amount, receiverAcc);
  if (amount > 0 &&
    // receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username) {
    console.log('Transfer Valid')
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
  }
})


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// Slice
// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice())
// console.log([...arr])

// // Splice
// // console.log(arr.splice(2));
// arr.splice(-1)
// arr.splice(1, 2)
// console.log(arr)

// // Reverse
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2)

// // Concat
// const letters = arr.concat(arr2);
// console.log(letters)
// console.log([...arr, ...arr2]);

// //Join
// console.log(letters.join(' - '));


// const arr3 = [23, 11, 64];
// console.log(arr3[0]);
// console.log(arr3.at(0));

// // getting last array element
// console.log(arr3[arr3.length - 1])
// console.log(arr3.slice(-1));
// console.log(arr3.at(-1));

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`)
//   }
// }
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1} : You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1} : You withdrew ${Math.abs(movement)}`)
  }
}
console.log('---ForEach---')
// movements.forEach(function (movement) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`)
//   }
// })
movements.forEach(function (movement, i, arr) {
  if (movement > 0) {
    console.log(`Movement ${i + 1} : You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1} : You withdrew ${Math.abs(movement)}`)
  }
})

// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`)
})

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach((value, key, map) => {
  console.log(`${key}: ${value}`)
})

const eurToUsd = 1.1;
// const movenmentUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

// Array Map Method
const movenmentUSD = movements.map(mov => mov * eurToUsd);
console.log(movements);
console.log(movenmentUSD);

const movenmentUSDfor = [];
for (const mov of movements) {
  movenmentUSDfor.push(mov * eurToUsd);
}
console.log(movenmentUSDfor);

const movementDescription = movements.map((mov, i) => `Movement ${i + 1} : You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`);

console.log(movementDescription);

// Array Filter Method
const deposites = movements.filter(function (mov) {
  return mov > 0
})
console.log(movements);
console.log(deposites);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
const withdrawals = movements.filter(mov => mov < 0)
console.log(withdrawals);

// Array Reduce Method
// accumulator -> SNOWBALL
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur
// }, 0)
const balance = movements.reduce((acc, cur) => acc + cur, 0)
console.log(balance);
let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov
}, movements[0]);
console.log(max);

// PIPELINE
const totalDepositeUSD = movements
  .filter(mov => mov > 0)
  // .map(mov => mov * eurToUsd)
  .map((mov, i, arr) => {
    // console.log(arr)
    return mov * eurToUsd
  })
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositeUSD);

const testData1 = [5, 2, 4, 1, 15, 8, 3];
const testData2 = [16, 6, 10, 5, 6, 1, 4];

// const humanAgeAverage = function calcAverageHumanAge(listAge) {
//   console.log(listAge)
//   return listAge.reduce((acc, i, age) => acc + age, listAge[0]) * listAge.lenght
// }
// humanAgeAverage(testData1);


const humanAgeAverage = ages => ages
  .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
  .filter(age => age >= 18)
  .reduce((acc, age, i, arr) => acc + age / arr.lenght, 0);
console.log(humanAgeAverage(testData1, testData2))

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

let JessicaData = '';
for (const accountFor of accounts) {
  if (accountFor.owner === 'Jessica Davis') {
    JessicaData = accountFor
  }
}
console.log(JessicaData, 'Outside')

//Equality
console.log(movements.includes(-130));

// SOME: Condition
console.log(movements.some(mov => mov === -130))
const anyDeposites = movements.some(mov => mov === 5000);
console.log(anyDeposites);

// Every Condition
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2, 3], [4, [5, 6]]], 7, 8];
console.log(arrDeep.flat(3));

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);
// const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance)


// flat
const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance)

// flatMap
const overalBalance2 = accounts
  .map(acc => acc.movements)
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance)


// SORT Method
// String
const owners = ['Jonas', 'Dadabhau', 'Vedshree', 'Zach', 'Adam', 'Sarah'];
console.log(owners.sort());
console.log(owners);

// Numbers
console.log(movements);

// return < 0, A ,B (keep order)
// return > 0, B, A (switch order)

// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// })
movements.sort((a, b) => a - b);
console.log(movements)

// Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (b > a) return 1;
// })
movements.sort((a, b) => b - a);
console.log(movements)

const myCode = movements.sort((a, b) => a - b).filter((el) => el > 0);
console.log(myCode);

// Fill Method
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log(new Array(1, 2, 3, 4, 5, 6, 7, 8, 9));

const x = new Array(7)
console.log(x);
// console.log(x.map(() => 5))
x.fill(1, 3, 5);
console.log(x);

// From Method
const y = Array.from({ length: 10 }, (curr, i) => 1 + i);
console.log(y)

// Array Methods Practice

// 1.
// const bankDepositeSum = accounts.map(acc => acc.movements).flat();
const bankDepositeSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0)
console.log(bankDepositeSum)

// 2.
const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  // .filter(mov => mov >= 1000).length;
  .reduce((count, cur) => cur >= 1000 ? count + 1 : count, 0);
console.log(numDeposits1000);

// Prefixed ++ oprator
let a = 10;
console.log(++a)
console.log(a)

// 3.
const sums = accounts
  .flatMap(acc => acc.movements)
  .reduce((sums, cur) => {
    cur > 0 ? sums.deposits += cur : sums.withdrawals += cur;
    return sums;
  }, { deposits: 0, withdrawals: 0 })

console.log(sums)

// 4.
// this is nice title -> This Is a Nice Title
const line = 'this is nice title'
const convertTitleCase = function (title) {
  const expection = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const capitzalize = str => str[0].toUpperCase() + str.slice(1)
  const titleCase = title.toLowerCase()
    .split(' ')
    .map(word => expection.includes(word) ? word : capitzalize(word)
    )
    .join(' ');
  return capitzalize(titleCase);
}
console.log(convertTitleCase(line));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));


