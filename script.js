"use strict";

/* CE QUE J'AI COMMENCER A ECRIRE
const arrayBtn = document.querySelectorAll(".btn");
const img = document.querySelector(".dice");
const currentScoreLabel = document.querySelector(".current-score");
const scoreLabelPlayer1 = document.querySelector("#current--0");
let score = 0;

function entierAleatoire(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

arrayBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.className === "btn btn--roll") {
      let randomNumber = entierAleatoire(1, 6);
      img.src = `img/dice-${randomNumber}.png`;
      score += randomNumber;
      currentScoreLabel.textContent = String(score);
    } else if (btn.className === "btn btn--hold") {
      scoreLabelPlayer1.textContent = String(score);
    } else if (btn.className === "btn btn--new") {
      console.log("btn--new");
    } else if (btn.className === "btn btn--who") {
      console.log("btn--who");
    }
  });
});
*/

const scorePlayer1El = document.querySelector("#score--0");
const scorePlayer2El = document.querySelector("#score--1");
const currentScorePlayer1El = document.querySelector("#current--0");
const currentScorePlayer2El = document.querySelector("#current--1");

const sectionPlayer1 = document.querySelector(".player--0");
const sectionPlayer2 = document.querySelector(".player--1");

const diceEl = document.querySelector(".dice");

const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");
const btnRoll = document.querySelector(".btn--roll");

let arrayScore = [0, 0];
let currentScore = 0;
let activePlayer = 0;

scorePlayer1El.textContent = 0;
scorePlayer2El.textContent = 0;
diceEl.classList.add("hidden");

function entierAleatoire(min, max) {
  return Math.floor(Math.random() * max) + min;
}

btnRoll.addEventListener("click", () => {
  let randomNumber = entierAleatoire(1, 6);

  diceEl.src = `img/dice-${randomNumber}.png`;
  diceEl.classList.remove("hidden");

  if (randomNumber !== 1) {
    currentScore += randomNumber;
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;
  } else {
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    sectionPlayer1.classList.toggle("player--active");
    sectionPlayer2.classList.toggle("player--active");
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
  }
});
