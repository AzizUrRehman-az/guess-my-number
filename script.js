"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".btncheck").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(typeof guess, guess);

  if (!guess) {
    displayMessage("No number");
  } else if (guess === secretNumber) {
    displayMessage("Correct number");
    document.querySelector(".number").textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = score;
    }

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "15rem";
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too high" : "Too low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".btnagain").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  displayMessage("Start guessing ...");
  document.querySelector(".score").textContent = score;

  document.querySelector("body").style.backgroundColor = "white";
  document.querySelector(".number").style.width = "100px";
});
