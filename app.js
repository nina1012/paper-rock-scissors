const game = () => {
  // VARIABLES AND DOM ELEMENTS /////////////////////
  const gameBoard = document.querySelector('.game');
  const message = document.querySelector('.message');
  const messageTitle = document.querySelector('.message__title');
  const result = document.querySelector('.result');
  const options = document.querySelectorAll('.option');
  const points = document.querySelector('.points');
  const resetBtn = document.querySelector('.reset-btn');

  const computerOptions = ['rock', 'paper', 'scissors'];

  const houseSelect = document.querySelector('.house__select');
  const playerSelect = document.querySelector('.player__select');

  let player;
  let computer;

  houseSelect.insertAdjacentHTML('beforeend', computerPlay());

  // FUNCTIONS //////////////////////////////////////

  function computerPlay() {
    const index = Math.floor(Math.random() * computerOptions.length);
    const computerChoice = computerOptions[index];
    computer = computerOptions[index];

    return `<div class="option ${computerChoice}" data-select=${computerChoice}>
        <img src="images/icon-${computerChoice}.svg" alt="${computerChoice}" />
        </div>`;
  }

  function playerPlay(e) {
    return e.target.cloneNode(true);
  }
  // modal functionality
  function modalFuncs() {
    const rulesBtn = document.querySelector('.rules');
    const close = document.querySelector('.modal__close');
    const modal = document.querySelector('.modal');
    const content = document.querySelector('.container');

    rulesBtn.addEventListener('click', e => {
      modal.classList.add('show');
      content.classList.add('blurred');
    });

    close.addEventListener('click', e => {
      // e.stopImmediatePropagation();
      modal.classList.remove('show');
      content.classList.remove('blurred');
    });
  }

  function whoWon(player, computer) {
    let score = +points.textContent;
    if (player == computer) {
      score++;
      return 'Draw';
    } else if (player == 'paper' && computer == 'rock') {
      score++;
      points.textContent = score;
      return 'You win';
    } else if (player == 'rock' && computer == 'scissors') {
      score++;
      points.textContent = score;
      return 'You win';
    } else if (player == 'scissors' && computer == 'paper') {
      score++;
      points.textContent = score;
      return 'You win';
    } else if (player == 'rock' && computer == 'paper') {
      if (score <= 0) {
        score = 0;
      } else {
        score--;
      }
      points.textContent = score;
      return 'You lose';
    } else if (player == 'scissors' && computer == 'rock') {
      if (score <= 0) {
        score = 0;
      } else {
        score--;
      }
      points.textContent = score;
      return 'You lose';
    } else if (player == 'paper' && computer == 'scissors') {
      if (score <= 0) {
        score = 0;
      } else {
        score--;
      }
      points.textContent = score;
      return 'You lose';
    }
  }

  function clearFields() {
    houseSelect.innerHTML = '';
    playerSelect.innerHTML = '';
  }

  async function reset(e) {
    // empty selects for players
    clearFields();
    gameBoard.classList.remove('hide-game');
    gameBoard.style.display = 'block';
    result.style.display = 'none';

    result.classList.remove('show-result');
    // add newly selected options
    houseSelect.insertAdjacentHTML('beforeend', computerPlay());
    player = await playerPlay(e);
    player = player.dataset.select;
    messageTitle.textContent = whoWon(player, computer);
  }
  async function playRound(e) {
    gameBoard.classList.add('hide-game');
    setTimeout(e => (gameBoard.style.display = 'none'), 1000);
    setTimeout(e => (result.style.display = 'flex'), 100);
    result.classList.add('show-result');
    setTimeout(e => message.classList.add('visible'), 2000);
    playerSelect.insertAdjacentElement('beforeend', playerPlay(e));
    player = await playerPlay(e);
    player = player.dataset.select;
    messageTitle.textContent = whoWon(player, computer);
  }

  // EVENT LISTENERS ///////////////////////////////
  // when content loads or when window refreshes

  document.addEventListener('DOMContentLoaded', e => {
    options.forEach(option => {
      option.classList.add('rotate-options');
    });
  });

  gameBoard.addEventListener('click', async e => playRound(e));

  resetBtn.addEventListener('click', e => reset(e));

  modalFuncs();
};

game();
