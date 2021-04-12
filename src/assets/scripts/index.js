// const foo = (() => Promise.resolve().then(() => console.log('Hello world')))()

const wordBoxes = document.querySelectorAll('.word-box');
const overlayDiv = document.querySelector('.overlay-div');
// const closeBtns = document.querySelectorAll('.close-btn');
const expandableForm = document.querySelector('.collapsible');
const body = document.body;

if (wordBoxes.length !== 0) {
  wordBoxes.forEach((box) => {
    const id = box.id;
    const quote = document.querySelector(`#${id}-quote`);
    const audio = quote.querySelector('audio');
    const closeBtn = quote.querySelector('.close-btn');
    box.addEventListener('click', () => {
      quote.classList.remove('hidden');
      quote.classList.add('flex');
      overlayDiv.classList.add('overlay');
      body.classList.add('noscroll');
      setTimeout(() => audio.play(), 1000)
    });

    closeBtn.addEventListener('click', () => {
      quote.classList.remove('flex');
      quote.classList.add('hidden');
      overlayDiv.classList.remove('overlay');
      body.classList.remove('noscroll');
      audio.pause();
      audio.currentTime = 0;
    });
  });
}
