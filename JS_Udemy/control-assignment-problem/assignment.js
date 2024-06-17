const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
if (randomNumber >= 0.7) {
  alert("random Number is Greater than or equal to 0.7");
} else {
  alert("Not Greater");
}

let array = [1, 2, 3, 4, 5];
for (let i = array.length; i >= 0; i--) {
  console.log(array[i]);
}

for (const element of array) {
  console.log("for of loop", element);
}

const secondrandom = Math.random();
if (
  (randomNumber >= 0.7 && secondrandom >= 0.7) ||
  randomNumber <= 0.2 ||
  secondrandom <= 0.2
) {
  alert("Both are greater than 0.7");
}
