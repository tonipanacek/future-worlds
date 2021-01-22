const foo = (() => Promise.resolve().then(() => console.log('Hello world')))();

const wordBoxes = document.querySelectorAll('.word-box');
const quoteBox = document.querySelector('.quote-box');
wordBoxes.forEach((box) => {
  box.addEventListener('click', () => {
    quoteBox.classList.remove('hidden');
    quoteBox.classList.add('flex');
  })
})
