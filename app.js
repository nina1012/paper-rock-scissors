const game = () => {
  // modal functionality
  function modalFuncs() {
    const rulesBtn = document.querySelector('.rules');
    const close = document.querySelector('.modal__btn');
    const modal = document.querySelector('.modal');
    const content = document.querySelector('.container');

    rulesBtn.addEventListener('click', e => {
      modal.classList.add('show');
      content.classList.add('blurred');
    });

    close.addEventListener('click', e => {
      e.stopImmediatePropagation();
      modal.classList.remove('show');
      content.classList.remove('blurred');
    });
  }

  function playGame() {}

  modalFuncs();
};

game();

// const game = document.querySelector('.game');
// const result = document.querySelector('.result');
// const message = document.querySelector('.message');

// game.addEventListener('click', e => {
//   game.classList.add('hide-game');
//   setTimeout(e => (game.style.display = 'none'), 1000);
//   setTimeout(e => (result.style.display = 'flex'), 100);
//   result.classList.add('show-result');

//   setTimeout(e => message.classList.add('visible'), 2000);
// });

// document.addEventListener('DOMContentLoaded', e => {
//   const options = document.querySelectorAll('.option');
//   options.forEach(option => {
//     option.classList.add('rotate-options');
//   });
// });
