const rules = new Map([
  ["rock", { win: "scissors", lose: "paper" }],
  ["paper", { win: "rock", lose: "scissors" }],
  ["scissors", { win: "paper", lose: "rock" }],
]);

const randomNum = Math.floor(Math.random() * 3);
let computerHand = "";
let computerHandShow = "";

if (randomNum === 0) {
  computerHand = "rock";
  computerHandShow = "Rock ✊";
}
if (randomNum === 1) {
  computerHand = "paper";
  computerHandShow = "Paper ✋";
}
if (randomNum === 2) {
  computerHand = "scissors";
  computerHandShow = "Scissors ✌️";
}

const btnHand = document.querySelectorAll(".btnHand");
const result = document.querySelector(".result");

function getResult(a, b) {
  if (rules.get(a).win === b) {
    result.textContent = `Sorry, you lose... Computer hand is ${computerHandShow}`;
  } else if (rules.get(a).lose === b) {
    result.textContent = `You win! Computer hand is ${computerHandShow}`;
  } else {
    result.textContent = `It's a draw! Computer hand is ${computerHandShow}`;
  }
}

btnHand.forEach((value) => {
  value.addEventListener("click", () => {
    getResult(computerHand, value.id);
  });
});
