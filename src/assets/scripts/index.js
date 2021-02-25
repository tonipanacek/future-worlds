const foo = (() => Promise.resolve().then(() => console.log('Hello world')))();

const wordBoxes = document.querySelectorAll('.word-box');
const quoteBox = document.querySelector('.quote-box');
const overlayDiv = document.querySelector('.overlay-div');
const closeBtn = document.querySelector('.close-btn');
const expandableForm = document.querySelector('.collapsible');

if (wordBoxes.length !== 0) {
  wordBoxes.forEach((box) => {
    box.addEventListener('click', () => {
      quoteBox.classList.remove('hidden');
      quoteBox.classList.add('flex');
      overlayDiv.classList.add('overlay');
      quoteBox.querySelector('#empowering').play();
    })
  });

  closeBtn.addEventListener('click', () => {
    quoteBox.classList.remove('flex');
    quoteBox.classList.add('hidden');
    overlayDiv.classList.remove('overlay');
    const audio = quoteBox.querySelector('#empowering')
    audio.pause();
    audio.currentTime = 0;
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



