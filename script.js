'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnclose = document.querySelector('.close-modal');
const btncheck = document.querySelectorAll('.show-modal');

for (let i = 0; i < btncheck.length; i++)
  btncheck[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    document.querySelector('.title').innerHTML = `I'm a modal window ${
      i + 1
    } 😍`;
  });

const closev = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnclose.addEventListener('click', closev);
overlay.addEventListener('click', closev);

document.addEventListener('keydown', function (event) {
  console.log(event.key);
  if (event.key === 'Escape' ||  &&
    !modal.classList.contains('hidden')
  ) {
    closev();
  }
});
