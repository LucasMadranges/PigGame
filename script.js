"use strict";

const scorePlayer1El = document.querySelector("#score--0");
const scorePlayer2El = document.querySelector("#score--1");

const sectionPlayer1 = document.querySelector(".player--0");
const sectionPlayer2 = document.querySelector(".player--1");

const sectionModal = document.querySelector(".modal");

const diceEl = document.querySelector(".dice");

const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");
const btnRoll = document.querySelector(".btn--roll");
const btnWho = document.querySelector(".btn--who");

let arrayScore, currentScore, activePlayer, playing;

function entierAleatoire(min, max) {
  return Math.floor(Math.random() * max) + min;
}

function switchPlayer() {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  sectionPlayer1.classList.toggle("player--active");
  sectionPlayer2.classList.toggle("player--active");
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
}

function initGame() {
  playing = true;
  arrayScore = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  diceEl.classList.add("hidden");
  scorePlayer1El.textContent = 0;
  scorePlayer2El.textContent = 0;
  sectionPlayer1.classList.remove("player--winner");
  sectionPlayer2.classList.remove("player--winner");
  sectionPlayer1.classList.add("player--active");
}
initGame();

btnRoll.addEventListener("click", () => {
  if (playing) {
    let randomNumber = entierAleatoire(1, 6);

    diceEl.src = `img/dice-${randomNumber}.png`;
    diceEl.classList.remove("hidden");

    if (randomNumber !== 1) {
      currentScore += randomNumber;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", () => {
  if (playing) {
    arrayScore[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      arrayScore[activePlayer];

    if (arrayScore[activePlayer] >= 100) {
      document.querySelector(`#current--${activePlayer}`).textContent = 0;
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");

      diceEl.classList.add("hidden");
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", () => {
  initGame();
});

btnWho.addEventListener("click", () => {
  sectionModal.classList.remove("hidden-modal");
});

const btnClose = document.querySelector(".btn--close");
const modal = document.querySelector(".modal");

function HideModal() {
  modal.classList.add("hidden-modal");
}

btnClose.addEventListener("click", () => {
  HideModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    HideModal();
  }
});
