const grid = document.querySelector('.grid');
const resultsDisplay = document.querySelector('.results');
const ROWS = 15;
const COLS = 15;

let currentShooterIndex = Math.floor(ROWS * COLS - COLS / 2);
let invaders = createInvaders();
let bullets = [];
let results = 0;
let gameLoop;

function createInvaders() {
  const invaders = [];
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const index = row * COLS + col;
      if (row === 0 || row === 1 || row === 2) {
        invaders.push(index);
      }
    }
  }
  return invaders;
}

function draw() {
  grid.innerHTML = '';
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const index = row * COLS + col;
      const square = document.createElement('div');
      square.classList.add('square');
      if (invaders.includes(index)) {
        square.classList.add('invader');
      } else if (index === currentShooterIndex) {
        square.classList.add('shooter');
      } else if (bullets.includes(index)) {
        square.classList.add('bullet');
      }
      grid.appendChild(square);
    }
  }
}

function moveShooter(e) {
  if (e.keyCode === 37 && currentShooterIndex % COLS !== 0) {
    currentShooterIndex--;
  } else if (e.keyCode === 39 && currentShooterIndex % COLS !== COLS - 1) {
    currentShooterIndex++;
  }
  draw();
}

let direction = 1;
let speed = 100;

function moveInvaders() {
  if (Math.random() < 0.1) {
    const invader = invaders[Math.floor(Math.random() * invaders.length)];
    bullets.push(invader);
  }
  bullets = bullets.filter(function(bullet) { return bullet < ROWS * COLS - COLS });
  bullets = bullets.map(function(bullet) { return bullet + COLS });
  invaders = invaders.filter(function(invader) { return !bullets.includes(invader) });

  const leftmostInvader = Math.min(...invaders);
  const rightmostInvader = Math.max(...invaders);

  const invadersReachLeftEdge = invaders.some(function(invader) {
    return invader % COLS === 0 && invader !== leftmostInvader;
  });
  const invadersReachRightEdge = invaders.some(function(invader) {
    return invader % COLS === COLS - 1 && invader !== rightmostInvader;
  });

  if (invadersReachLeftEdge && direction === -5) {
    direction = 5;
  } else if (invadersReachRightEdge && direction === 5) {
    direction = -5;
  }

  // move the invaders in the appropriate direction
  invaders = invaders.map(function(invader) { return invader + direction; });

  if (invaders.length === 0) {
    resultsDisplay.textContent = 'You Win!';
    clearInterval(gameLoop);
  }
  if (invaders.some(function(invader) { return invader >= ROWS * COLS - COLS })) {
    resultsDisplay.textContent = 'Game Over!';
    clearInterval(gameLoop);
  }
  draw();
}

document.addEventListener('keydown', moveShooter);
gameLoop = setInterval(moveInvaders, speed);


function shoot(e) {
  let laserId;
  let currentLaserIndex = currentShooterIndex;

  function moveLaser() {
    const squares = document.querySelectorAll('.grid div');
    const width = COLS;

    squares[currentLaserIndex].classList.remove('laser');
    currentLaserIndex -= width;
    squares[currentLaserIndex].classList.add('laser');

    if (squares[currentLaserIndex].classList.contains('invader')) {
      squares[currentLaserIndex].classList.remove('laser');
      squares[currentLaserIndex].classList.remove('invader');
      squares[currentLaserIndex].classList.add('boom');

      setTimeout(function() { squares[currentLaserIndex].classList.remove('boom') }, 300);
      clearInterval(laserId);

      const alienRemoved = invaders.indexOf(currentLaserIndex);
      invaders.splice(alienRemoved, 1);
      results++;
      resultsDisplay.innerHTML = results;
    }
  }

  switch (e.key) {
    case 'Shift':
      laserId = setInterval(moveLaser, 100);
  }
}

document.addEventListener('keydown', shoot);
