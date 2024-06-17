// const ids = new Set(['Hi', 'from', 'sets!']);
// ids.add(2);
// if (ids.has('Hi')) {
//     ids.delete('Hi')
// }

// for (const entry of ids.entries()) {
//     console.log(entry);
//     console.log(entry[0]);
// }

// const person1 = { name: 'Padmaja' };
// const person2 = { name: 'Srinivasan' };

// const personData = new Map([[person1, [{ day: 'yesterday', price: 10 }]]]);

// personData.set(person2, [{ day: 'one week ago', price: 100 }]);
// console.log('It prints the ', personData);
// console.log(personData.get(person1));

// for (const [key, value] of personData.entries()) {
//     console.log('key-->', key, 'value-->', value);
// }

// // Getting only keys
// for (const key of personData.keys()) {
//     console.log(key);
// }

// for (const value of personData.values()) {
//     console.log(value);
// }

// console.log(personData.size);

// Weak set

let person = { name: 'Padmaja' };
const persons = new WeakSet();
persons.add(person);
console.log(persons);

// weakMap

const personData = new WeakMap();
personData.set(person, 'Extra info as value');
person = null;
console.log(personData);