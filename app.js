function playGame() {
  const options = ['rock', 'paper', 'scissors'];
  const game = document.querySelector('.game');

  game.addEventListener('click', e => {
    e.stopImmediatePropagation();
  });

  function computerPlay() {
    const index = Math.floor(Math.random() * options.length);
    return options[index];
  }

  function modalFuncs() {
    const rulesBtn = document.querySelector('.rules');
    const close = document.querySelector('.close');
    const modal = document.querySelector('.modal');

    rulesBtn.addEventListener('click', e => {
      modal.classList.add('show');
    });

    close.addEventListener('click', e => {
      modal.classList.remove('show');
    });
  }

  // allowing to open and close modal
  modalFuncs();
}
playGame();
