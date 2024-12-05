console.log("hi");

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === 'bomb'
  ) {
    return userInput;
  } else {
    console.log("Please enter rock, paper or scissors");
  }
};

function getComputerChoice() {
  randNum = Math.floor(Math.random() * 3);
  switch (randNum) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "The game was a tie";
  }

  if (userChoice === 'rock' ) {
    if (computerChoice === 'paper') {
      return 'The computer won!'
    } else {
      return 'The human won!'
    }
  }

if (userChoice === 'paper') {
  if (computerChoice === 'scissors') {
    return 'The computer won!'
  } else {
    return 'The human won!'
  }
}

if (userChoice === 'scissors') {
  if (computerChoice === 'rock') {
    return 'The computer won!'
  } else {
    return 'The human won!'
  }
}

if (userChoice === 'bomb') {
  return 'BOOM! The human wins!';
}

  }

function playGame() {
  let userChoice = getUserChoice('bomb');
  console.log(userChoice);
  let computerChoice = getComputerChoice();
  console.log(computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
