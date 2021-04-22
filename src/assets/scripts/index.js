// const foo = (() => Promise.resolve().then(() => console.log('Hello world')))()

const wordBoxes = document.querySelectorAll('.word-box');
const overlayDiv = document.querySelector('.overlay-div');
const body = document.body;
const hamburger = document.querySelector('.hamburger');
const menuList = document.querySelector('.menu-list');

if (wordBoxes.length !== 0) {
  wordBoxes.forEach((box) => {
    const id = box.id;
    const quote = document.querySelector(`#${id}-quote`);
    const audio = quote.querySelector('audio');
    const closeBtn = quote.querySelector('.close-btn');
    const details = quote.querySelector('details');
    box.addEventListener('click', () => {
      quote.classList.remove('hidden');
      quote.classList.add('flex');
      overlayDiv.classList.add('overlay');
      body.classList.add('noscroll');
      setTimeout(() => audio.play(), 500)
    });

    details.addEventListener('toggle', (event) => {
      if (details.open) {
        quote.classList.remove('jc-around');
      } else {
        quote.classList.add('jc-around');
      }
    })

    closeBtn.addEventListener('click', () => {
      quote.classList.remove('flex');
      quote.classList.add('hidden');
      details.removeAttribute('open');
      overlayDiv.classList.remove('overlay');
      body.classList.remove('noscroll');
      audio.pause();
      audio.currentTime = 0;
    });
  });
}

if (hamburger) {
  hamburger.addEventListener('click', () => {
    menuList.classList.toggle('show');
    body.classList.toggle('noscroll');
  })
}
