// const numbers = [1, 2, 3];
// console.log(numbers);

// const moreNumbers = new Array();
// console.log('acnjabjk', moreNumbers[1]);

// const moreNumbers = Array(5, 2);
// console.log(moreNumbers);

// const yetMoreNumbers = Array.of(1, 2); // slower in performance
// console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll('li');
// console.log(listItems);

// const arrayListItems = Array.from(listItems);   // Array.from() It does not take multiple number
// console.log('li', arrayListItems);

// const arrayFrom = Array.from('Hiii'); // Array.from() it convert as single character of 'string'
// console.log(arrayFrom);

// const analyticsData = [[1, 2, 3], [4, 5, 6]];
// for (const data of analyticsData) {
//     for (const dataPoint of data) {
//         console.log(dataPoint);
//     }
// }

// const hobbies = ['sport', 'cooking'];
// hobbies.push('reading');
// hobbies.unshift('Coding'); // Adding an element at first position of an array
// hobbies.pop();
// hobbies.shift(); // removing an element at first position of an array
// console.log(hobbies);

// // adding the element between the two element of an array
// hobbies.splice(1, 0, 'Good Food');
// console.log(hobbies);

// //remove an element using splice
// const remove = hobbies.splice(0, 1);
// console.log(hobbies, 'The deleted Element is ', remove);

// // // without an count it will delete all the element from an array
// console.log('Updated Array', hobbies);
// const negativeIndex = hobbies.splice(-1, 1);
// console.log(hobbies, 'this the after the spliec index -1');
// console.log('The negative index in splice method', negativeIndex);
// const noItems = hobbies.splice(1);
// console.log('after remove the 1 in splice()',noItems);
// console.log('It will remove all the Items from an array because without an item count it will delete all the items from an array', hobbies);
// const totalResults = [1, 2.2, -4, 10.999, 10];
// const storeTheValue = totalResults.slice();
// console.log(storeTheValue);
// console.log(storeTheValue === totalResults);
// const slicedElement = totalResults.slice(0, 2);
// console.log(slicedElement);
// const negativeIndexSlice = totalResults.slice(-3, -2);
// console.log(negativeIndexSlice);
// // concat()
// const trial = [4, 2, 3, 1, 4];
// const anotherTrial = trial.concat([5, 6, 7]);
// trial.push(8);
// console.log('the trial array', trial);
// console.log('the another trial array', anotherTrial);
// console.log(trial.indexOf(4));// start from the left side
// console.log(trial.lastIndexOf(4));

// const personData = [{ name: 'Padmaja' }, { name: 'Balaji' }];
// console.log(personData.indexOf({ name: 'Padmaja' })); //it console as (-1) because it does not matches so it returns a (-1)
// const manuel = personData.find((person, idx, personData) => {
//     return person.name === 'Balaji';
// });
// console.log(manuel);

// manuel.name = 'Javascript';

// const maxIndex = personData.findIndex((person, idx, persons) => {
//     return person.name === 'Padmaja';
// });

// console.log(maxIndex);
// console.log('It is useful for primitive values', trial.includes(1));
// console.log(trial.indexOf(1) !== -1);

// // forEach()
// const prices = [10.99, 5.99, 3.09, 6.59];
// const tax = 0.19;
// const taxAdjustedPrice = [];

// prices.forEach((price, idx, pricesrate) => {
//     const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
//     taxAdjustedPrice.push(priceObj);
// });

// console.log(taxAdjustedPrice);

// const prices = [10.99, 5.99, 3.09, 6.59];
// const tax = 0.19;

// const taxAdjuctedPrice = prices.map((price, idx, pricesrate) => {
//     const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
//     return priceObj;
// });

// console.log(prices, taxAdjuctedPrice);

// function transformToObjects(numberArray) {
//     return numberArray.map((ele, idx, numberArray) => {
//         const obj = { val: ele };
//         return obj;
//     });
// }
// console.log(numberArray);
// console.log(transformToObjects([1, 2, 3]))

// const sortedPice = prices.sort((a, b) => {
//     if (a > b) {
//         return 1;
//     } else if (a == b) {
//         return 0;
//     } else {
//         return -1;
//     }
// });
// console.log(sortedPice);

// const filteredPrice = prices.filter((price, index, prices) => {
//     return price > 6;
// });

// console.log(filteredPrice, 'originalarray', prices);

// // sum of the array using reduce

// const sum = prices.reduce((preValue, currentValue, curIndex, prices) => {
//     return preValue + currentValue;
// }, 0);

// reduce() --> It has two argument first one is function and second one is optional argument that is default value which is start from that value in an array


// without map function
// const originalArray = [{ price: 10.99 }, { price: 5.99 }, { price: 29.99 }];
// const sumArray = originalArray.reduce((sumVal, curVal) => sumVal + curVal.price, 0); // => 46.97
// console.log('Only use by reduce()--> ', sumArray);

// const originalArrayMap = [{ price: 10.99 }, { price: 5.99 }, { price: 29.99 }];
// const transformedArray = originalArrayMap.map(obj => obj.price); // produces [10.99, 5.99, 29.99]
// const sumArrayMap = transformedArray.reduce((sumVal, curVal) => sumVal + curVal, 0); // => 46.97
// console.log('use both ofmap() and reduce() and with separete array or variable to store the value--> ', sumArrayMap);

// // with concise method bellow
// const originalArrayExample = [{ price: 10.99 }, { price: 5.99 }, { price: 29.99 }];
// const sumUsingMapReduce = originalArrayExample.map(obj => obj.price)
//     .reduce((sumVal, curVal) => sumVal + curVal, 0); // => 46.97
// console.log('It also use both of map() and reduce() method but it does not take extra array or variable calculated value--> ', sumUsingMapReduce);
// //We call .reduce() directly on the result of map() (which produces an array, that's why this is possible). Hence we can avoid storing the mapped array in a separate constant or variable that we might not need in any other place.

// // split() and join()

// const data = 'newyork;10.29;200';
// const tranformedSplitedArray = data.split(';');
// tranformedSplitedArray[1] = +tranformedSplitedArray[1];
// console.log('Splited array --> ', tranformedSplitedArray);

// const nameFragment = ['Padmaja', 'Balaji'];
// const name = nameFragment.join(' ');  //--> whatever we giving inside the join() it will render like that
// console.log(nameFragment, '  ', name);

// // The spread operator   (...) 
// const copiedNestedFragmentArray = [nameFragment];
// console.log('Copied Nested Fragment Array--> ', copiedNestedFragmentArray);
// const copiedFragment = [...nameFragment];
// nameFragment.push('Nivas');
// console.log('copied Array--> ', copiedFragment);
// console.log('Finding the minimum element in an Pices Array-->', Math.min(...prices));

// const persons = [{ name: 'Padmaja', age: 20 }, { name: 'Sureka', age: 21 }];
// const copiedPerson = persons.map(person => ({
//     name: person.name,
//     age: person.age,
// }));
// persons[0].age = 21;
// console.log(persons, copiedPerson); // It only copy the address in a memory not an object in an array

// If you want to copy every objects it can be achieved by using map()

// Destucting an Array

const nameData = ['Padmaja', 'Srinivasan', 'Ms', 21];
// const firstName = nameData[0];
// const lastName = nameData[1];
// by getting the value separately there is another method to get like this
// right side of nameData is pull out the firstName and lastName variable on left hand side of an array
// splitting an array to an variable
const [firstName, lastName, ...otherInformation] = nameData;
console.log(firstName, '', lastName, 'otherInformation comes as an array ', otherInformation);
console.log('other information can be accessible by using index of an otherInformation Array', otherInformation[1]);

// Maps and sets