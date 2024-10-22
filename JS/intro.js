// from odin proj

// Prototypal inheritance Practice

// constructor func
function Person(name) {
  this.name = name;
}

// constructor func
function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

const player1 = new Player('Matt', 'A Dog');

Player.prototype.sayNameAndMarker = function () {
  return `My name is ${this.name}, my marker is ${this.marker}`;
};

Object.setPrototypeOf(Player.prototype, Person.prototype);

const player2 = new Player('John', 'A Cat');
console.log(player2.sayNameAndMarker());

// WAY TO SEE ALL PROPERTIES of Object prototype if using Node:
let prototype = Object.getPrototypeOf([]);
console.log(Object.getOwnPropertyNames(prototype));

// ////////////////////////////////////////////////////////////
// https://javascript.info/prototype-inheritance

// Working with prototype
// importance: 5
// Here’s the code that creates a pair of objects, then modifies them.

// Which values are shown in the process?

// let animal = {
//   jumps: null,
// };
// let rabbit = {
//   __proto__: animal,
//   jumps: true,
// };

// alert(rabbit.jumps); // ? (1)
// true

// delete rabbit.jumps;
// alert(rabbit.jumps); // ? (2)
// null

// delete animal.jumps;
// alert(rabbit.jumps); // ? (3)
// undefined

// ////////////////////////////////////////////////////////////

// Searching algorithm
// importance: 5
// The task has two parts.

// Given the following objects:

let head = {
  glasses: 1,
};

let table = {
  pen: 3,
};

let bed = {
  sheet: 1,
  pillow: 2,
};

let pockets = {
  money: 2000,
};

pockets.__proto__ = bed;
bed.__proto__ = table;
table.__proto__ = head;

// Use __proto__ to assign prototypes in a way that any property lookup will follow the path: pockets → bed → table → head. For instance, pockets.pen should be 3 (found in table), and bed.glasses should be 1 (found in head).
console.log(pockets.pillow);

// Answer the question: is it faster to get glasses as pockets.glasses or head.glasses? Benchmark if needed.

// head.glasses will be quicker as it's a direct lookup, not needing to gop through prototype chain

// ////////////////////////////////////////////////////////////

// Where does it write?
// importance: 5
// We have rabbit inheriting from animal.

// If we call rabbit.eat(), which object receives the full property: animal or rabbit?

let animal = {
  eat() {
    this.full = true;
  },
};

let rabbit = {
  __proto__: animal,
};

rabbit.eat();

// Rabbit receives the full property. 'this' reffers to the object that calls the eat function,
// ie rabbit

// ////////////////////////////////////////////////////////////

// Why are both hamsters full?
// importance: 5
// We have two hamsters: speedy and lazy inheriting from the general hamster object.

// When we feed one of them, the other one is also full. Why? How can we fix it?

// let hamster = {
//   stomach: [],

//   eat(food) {
//     this.stomach.push(food);
//   }
// };

// let speedy = {
//   __proto__: hamster
// };

// let lazy = {
//   __proto__: hamster
// };

// This one found the food
// speedy.eat("apple");
// alert( speedy.stomach ); // apple

// This one also has it, why? fix please.
// alert( lazy.stomach ); // apple

// stomach array is defined on the hamster prototype. it should be defined on the individual hamsters

let hamster = {
  eat(food) {
    this.stomach.push(food);
  },
};

let speedy = {
  stomach: [],
  __proto__: hamster,
};

let lazy = {
  stomach: [],
  __proto__: hamster,
};

// This one found the food
speedy.eat('apple');

alert(lazy.stomach); // apple

// ////////////////////////////////////////////////////////////
