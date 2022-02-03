const playButton = document.getElementById("playButton");

const aiPlayer1 = document.getElementById("ai1");
const aiPlayer2 = document.getElementById("ai2");

const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");

playButton.addEventListener("click", (e) => {
  console.log("Hello");
});

aiPlayer1.addEventListener("click", (e) => {
  aiPlayer1.classList.add("chosen");
  player1.classList.remove("chosen");

  if (player1.classList.contains("chosen")) {
    aiPlayer1.classList.remove("chosen");
  }
});
aiPlayer2.addEventListener("click", (e) => {
  aiPlayer2.classList.add("chosen");
  player2.classList.remove("chosen");

  if (player2.classList.contains("chosen")) {
    aiPlayer2.classList.remove("chosen");
  }
});

player1.addEventListener("click", (e) => {
  player1.classList.add("chosen");
  aiPlayer1.classList.remove("chosen");
});

player2.addEventListener("click", (e) => {
  player2.classList.add("chosen");
  aiPlayer2.classList.remove("chosen");
});

let state = {
  startScreen: true,
  game: false,
  gameOver: false,
};
