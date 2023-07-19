'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdaysList = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
// const openingHours = {
//   thu: { open: 12, close: 22 },
//   fri: { open: 11, close: 23 },
//   sat: { open: 0, close: 24 }
// };
// New Use object literals ES6
const openingHours = {
  [weekdaysList[2]]: { open: 12, close: 22 },
  [weekdaysList[4]]: { open: 11, close: 23 },
  [weekdaysList[5]]: { open: 0, close: 24 }
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  // },

  // orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
  //   console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}} will be delivered to ${address} at ${time}`);
  // },

  // Create Object 
  // ES6 enhanced object literals (direct acess object outside)
  // openingHours : openingHours
  openingHours,

  // Function like in Object literals ES6
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },
  orderDelivery({ starterIndex, mainIndex, time, address }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}} will be delivered to ${address} at ${time}`);
  },

};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
const temp = main;
main = secondary;
secondary = temp;

// Destrucutring
// SREAD, Because on Right side of = 
const arra = [1, 2, ...[3, 4]];
const [m, n, ...others] = [1, 2, 3, 4, 5,]
console.log(m, n, others)

const [pizza, , risotto, ...othersItem] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(pizza, risotto, othersItem)

//Object
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays)
// Function
const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum)
}
add(2, 3);
add(5, 3, 7, 2)
add(8, 2, 5, 3, 2, 1, 4)

const xVar = [23, 5, 7];
add(...xVar)


// The Spread Operator
const arrCheck = [7, 8, 9];
const badNewArr = [1, 2, arrCheck[0], arrCheck[1], arrCheck[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arrCheck];
console.log(newArr)
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci']
console.log(newMenu)

// copy array
const mainMenuCopy = [...restaurant.mainMenu]

// Join 2 Array
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu)

// Iterables: arrays, strings, maps, Not objects
const str = 'Dadabhau';
const letters = [...str, '', 'S.'];
console.log(letters);
console.log(...str);

// Real-world Example

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Ingredient 2?"),
//   prompt('Ingredient 3')
// ];
// // console.log(ingredients);


// restau3efrrant.orederPasta(...ingredients)

//Objects
const newRestuarant = { foundedIn: 1985, ...restaurant, founder: 'Dadabhau' };
console.log(newRestuarant);

const restaurantCopy = restaurant;
restaurantCopy.name = 'Ristoranta Roma';
console.log(restaurantCopy.name)
console.log(restaurant.name)

// Use Any Data Type, retrun any data Type, Short-circuting
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'hello' || 23 || null);

console.log('---AND---');
console.log(0 && 'Jonas');
console.log(3 && 'Jonas');

// Nulish: null and undefined(Not 0 or '')
restaurant.numGests = 0;
const guestCorrect = restaurant.numGests ?? 10;
console.log(guestCorrect);

const rest1 = {
  name: 'Capri',
  numGuestes: 20
}
const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi'
}

rest1.numberGuests = rest1.numGuestes || 10;
rest2.numberGuests = rest2.numGuestes || 10;

console.log(rest1);
console.log(rest2);


// For Each Loop
const menuList = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menuList) console.log(item);

for (const item of menu.entries()) {
  console.log(item)
}
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`)
}
// console.log([...menuList.entries()])


if (restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// With Optional chaining
console.log(restaurant.openingHours.mon?.open)
console.log(restaurant.openingHours?.mon?.open)
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}
// Methods
console.log(restaurant.order?.(0, 1) ?? 'Methods does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Array
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];

console.log(users[0]?.name ?? 'User array empty')


// Object Key, Value, entries
// Property Name
const properties = Object.keys(openingHours);
console.log(properties);

let opneStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  opneStr += `${day}, `
}
console.log(opneStr)
// Property Vaules
const values = Object.values(openingHours);
console.log(values);
// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

// [key, value]
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at at ${open} and close at ${close}`)
}

//SET 
const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza'])
console.log(orderSet);

console.log(new Set('Jonas'));
console.log(orderSet.size);
console.log(orderSet.has('Bread'))
console.log(orderSet.has('Pizza'))
orderSet.add('Garlic Bread')
orderSet.add('Garlic Bread')
orderSet.delete('Risotto');
// orderSet.clear()
console.log(orderSet);

//SET Also Imreable
for (const order of orderSet) console.log(order)

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);
console.log(new Set('Dadabhau').size)

// Map 
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firence, Itaily');
rest.set(2, 'Lisbon, Portugal');
rest.set('categories', ['Italian', 'Pizzeria', 'Vegtarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest);

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2)

rest.set([1, 2], 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size)
// console.log(rest.clear())
console.log(rest.get(1, 2))

const qusetion = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try Again!']
]);
console.log(qusetion);
// convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz App
console.log(qusetion.get('question'))
for (const [key, value] of qusetion) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);

}
// const answer = Number(prompt('Your answer'))
// console.log(answer)
// console.log(qusetion.get(qusetion.get('correct') === answer))

// Convert map to array
console.log([...qusetion]);
// console.log(...qusetion.entries());
console.log(...qusetion.keys());
console.log(...qusetion.values())


// String 
const airline = 'TAP Air Portugal';
const plane = 'A320'

console.log(plane[0])
console.log(plane[1])
console.log(plane[2])
console.log('A320'[0])
console.log(airline.length)
console.log('A320'.length)
// String Methods
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));
console.log(airline.indexOf('portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat');
  else console.log('You got lucky');
}
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('Dadabhau'));
console.log(typeof new String('Dadabhau'));
console.log(typeof new String('Dadabhau').slice(1))

console.log(airline.toLocaleLowerCase())
console.log(airline.toUpperCase())

// Fix capilization in name
const passenger = 'jOnAs';
const passengerLower = passenger.toLocaleLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect)

// comparing email
const email = 'hello@dadabhau.io'
const loginEmail = ' Hello@Dadabhau.Io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim()
console.log(trimmedEmail)

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail)

console.log(email === normalizedEmail);

// replacing
const priceGB = '288,97$'
const priceIN = priceGB.replace('$', 'Rs').replace(',', '.')
console.log(priceIN);
const announcement = 'All passenger come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const planes = 'Airbus A320neo';
console.log(planes.includes('A320'));
console.log(planes.includes('Boeing'))
console.log(planes.startsWith('Air'));
if (planes.startsWith('Airbus') && planes.endsWith('neo')) {
  console.log('Part of the New ARirbus family');
}

// Practice exericse
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!')
  }
}
checkBaggage('I have a laptop with Knife');
checkBaggage('Socks and camera');
checkBaggage('got some gun');

// Split and join
console.log('dada+very+nice+person'.split('+'));
console.log('Dadabhau Thete'.split(' '))
const [firstName, LastName] = 'Dadabhau Thete'.split(' ')

const newName = ['Mr.', firstName, LastName.toUpperCase()].join(' ');
console.log(newName)

const capilizationName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1))
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '))
}
capilizationName('jessica ann smith davis');
capilizationName('dadabhau thete')

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(35, '+'));
console.log('Dadabhau'.padStart(25, '+'))













