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

scorePlayer1El.textContent = 0;
scorePlayer2El.textContent = 0;
