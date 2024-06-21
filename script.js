let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

let msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");

const compScorePara = document.querySelector("#comp-score");

const generateComputerChoice = () => {
  const option = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return option[randIdx];
};

const drawGame = () => {
  console.log("game was draw");
  msg.innerText = "Game Was draw , Play Again!!";
};

const showWinner = (userWin) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    console.log("you win");
    msg.innerText = "Hurray!! You Won";
  } else {
    compScore++;
    console.log("You loose");
    msg.innerText = "Ahh, You lost the Game";
    compScorePara.innerText = compScore;
  }
};

const playGame = (userchoice, drawGame_2) => {
  console.log(" user choice", userchoice);
  //generating coumputer choice
  const compChoice = generateComputerChoice();
  console.log("comp choice", compChoice);
  if (userchoice === compChoice) {
    drawGame_2();
  } else {
    // let userWin = true;
    if (userchoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};

choices.forEach((choice) => {
  console.log(choice);
  const custFun = drawGame;
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    
    playGame(userchoice, custFun);
  });
});
