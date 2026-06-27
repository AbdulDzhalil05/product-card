const productCard = document.querySelector('.card');
const productCards = document.querySelectorAll('.card');
const buttonChangeBgcolorFirstCard = document.querySelector('#button-change-bgcolor-first-card');
const buttonChangeBgcolorAllCard = document.querySelector('#button-change-bgcolor-all-card');
const buttonOpenGooglePage = document.querySelector('#button-open-google-page');
const buttonMessageOutput = document.querySelector('#button-message-output');
const mainTitle = document.querySelector('.products__title');
const buttonCangeOwnColor = document.querySelector('#button-change-own-color');

buttonChangeBgcolorFirstCard.addEventListener('click', () => {
  productCard.style.backgroundColor = '#7c85d6';
})

buttonChangeBgcolorAllCard.addEventListener('click', () => {
  productCards.forEach((card) => {
    card.style.backgroundColor = '#c597db';
  })
})

buttonOpenGooglePage.addEventListener('click', () => {
  window.open('https://google.com')
})

buttonMessageOutput.addEventListener('click', () => {
  console.log('ДЗ №6');
  alert('ДЗ №6');
})

mainTitle.addEventListener('mouseover', () => {
  console.log(mainTitle.innerText)
})

buttonCangeOwnColor.addEventListener('click', () => {
  buttonCangeOwnColor.classList.toggle('products__button--active')
})