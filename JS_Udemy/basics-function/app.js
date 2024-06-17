const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";

let gameIsRunning = false;

const getPlayerChoice = function () {
  const selection = prompt(
    `${ROCK}, ${PAPER}or ${SCISSORS}?`,
    ""
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid Choice!, We choose ${DEFAULT_USER_CHOICE} Rock for you`);
    return;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

// () => {
//     console.log("Arrow function without the paranthesis")
// }

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is Starting..!");
  const playerSelection = getPlayerChoice();
  const computerChoice = getComputerChoice();
  let winner;
  if (playerSelection) {
    winner = getWinner(computerChoice, playerSelection);
  } else {
    winner = getWinner(computerChoice, 0);
  }
  console.log(winner);
  let message = `You Picked ${
    playerSelection || DEFAULT_USER_CHOICE
  }, Computer Picked ${computerChoice}, therefore`;
  if (winner === RESULT_DRAW) {
    message += ` you had a draw`;
  } else if (winner === RESULT_PLAYER_WINS) {
    message += ` Player won the game,`;
  } else {
    message += `lost`;
  }
  alert(message);
  gameIsRunning = false;

  //   console.log(playerSelection);
  //   console.log(computerChoice);
});

// start();   // Function Expression can be show  cannot access befor start initialization

// const start = function () {
//   console.log("Game is Starting..!");
// };

// const person = {
//   greet: function great() {
//     console.log("Hello, Am inside the object");
//   },
// }; // function Expression

// great(); // It cannot show the error in function decalration or function statement

// function great() {
//   console.log("Function Declaration or Function Statement");
//   console.log(
//     "Function Declaration or function statement cannot show error before calling the calling the function..!"
//   );
// }

// great();
// person.greet();
// console.log(typeof person.greet);

// // NOTE: Not releated to the game project

const sumUp = (resultHandler, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };
  let sum = 0;
  for (const num of numbers) {
    sum += validateNumber(num);
  }
  resultHandler(sum);
};

const subtractUp = function (resultHandler) {
  let sum = 0;
  for (const num of arguments) {
    sum -= num;
    /*Note: arguments is a keyword we can use the argument only inside the function. It's like array like object */
  } // Don't use this arguments keywords
  resultHandler(sum);
};

const showResult = (result) => {
  alert("The Result after adding this numbers" + result);
};

sumUp(showResult, 1, 2, 3, 4, 5, 6, 7);
sumUp(showResult, 1, 2, "kcak", 4, 5, 6, 7, 8, 9, 9, 10, 11);
subtractUp(20, 15, 10, 5);
