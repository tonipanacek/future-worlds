// const foo = (() => Promise.resolve().then(() => console.log('Hello world')))()

const wordBoxes = document.querySelectorAll('.word-box');
// const quoteBox = document.querySelector('.quote-box');
const overlayDiv = document.querySelector('.overlay-div');
const closeBtns = document.querySelectorAll('.close-btn');
const expandableForm = document.querySelector('.collapsible');
const body = document.body;

if (wordBoxes.length !== 0) {
  wordBoxes.forEach((box) => {
    const id = box.id;
    const quote = document.querySelector(`#${id}-quote`);
    const audio = quote.querySelector('audio');
    box.addEventListener('click', () => {
      quote.classList.remove('hidden');
      quote.classList.add('flex');
      overlayDiv.classList.add('overlay');
      body.classList.add('noscroll');
      setTimeout(() => audio.play(), 2000)
    })
  });

  closeBtns.forEach((button) => {
    button.addEventListener('click', () => {
      const quote = button.parentElement;
      const audio = quote.querySelector('audio');
      quote.classList.remove('flex');
      quote.classList.add('hidden');
      overlayDiv.classList.remove('overlay');
      body.classList.remove('noscroll');
      audio.pause();
      audio.currentTime = 0;
    })
  });
}


// if (expandableForm) {
//   const main = document.querySelector('.your-say-grid');
//   expandableForm.addEventListener('click', () => {
//     expandableForm.classList.toggle('active');
//     const content = document.querySelector('.content');
//     if (expandableForm.classList.contains('active')) {
//       content.style.width = '350px';
//       main.style.marginRight = '350px';
//     } else {
//       content.style.width = '0';
//       main.style.marginRight = '0';
//     }
//   })
// }



