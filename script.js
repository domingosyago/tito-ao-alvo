const board = document.getElementById("board");
const scoreDisplay = document.getElementById("score");
let score = 0;

// Cria o tabuleiro
for (let i = 0; i < 25; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  board.appendChild(cell);
}

// Função para gerar alvo aleatório
function spawnTarget() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach(cell => cell.innerHTML = ""); // Limpa alvos anteriores

  const randomIndex = Math.floor(Math.random() * cells.length);
  const target = document.createElement("div");
  target.classList.add("target");

  target.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;
    spawnTarget(); // Gera novo alvo
  });

  cells[randomIndex].appendChild(target);
}

// Inicia o jogo
spawnTarget();



