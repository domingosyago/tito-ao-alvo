const board = document.getElementById("board");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");

let score = 0;
let timeLeft = 30;
let gameActive = true;

// Cria o tabuleiro
for (let i = 0; i < 25; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  board.appendChild(cell);
}

// Gera alvo aleatório
function spawnTarget() {
  if (!gameActive) return;

  const cells = document.querySelectorAll(".cell");
  cells.forEach(cell => cell.innerHTML = "");

  const randomIndex = Math.floor(Math.random() * cells.length);
  const target = document.createElement("div");
  target.classList.add("target");

  target.addEventListener("click", () => {
    if (!gameActive) return;
    score++;
    scoreDisplay.textContent = score;
    spawnTarget();
  });

  cells[randomIndex].appendChild(target);
}

// Inicia cronômetro
function startTimer() {
  const countdown = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(countdown);
      gameActive = false;
      endGame();
    }
  }, 1000);
}

// Finaliza jogo
function endGame() {
  alert(`⏰ Tempo esgotado! Sua pontuação final foi: ${score}`);
  board.innerHTML = "";
}

// Inicia jogo
spawnTarget();
startTimer();

