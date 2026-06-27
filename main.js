const productCard = document.querySelector('.card');
const productCards = document.querySelectorAll('.card');
const changeBgcolorFirstCardButton = document.querySelector('#change-bgcolor-first-card-button');
const changeBgcolorAllCardButton = document.querySelector('#change-bgcolor-all-card-button');
const openGooglePageButton = document.querySelector('#open-google-page-button');
const messageOutputButton = document.querySelector('#message-output-button');
const mainTitle = document.querySelector('.products__title');
const changeOwnColorButton = document.querySelector('#change-own-color-button');

changeBgcolorFirstCardButton.addEventListener('click', () => {
  productCard.style.backgroundColor = '#7c85d6';
})

changeBgcolorAllCardButton.addEventListener('click', () => {
  productCards.forEach((card) => {
    card.style.backgroundColor = '#c597db';
  })
})

openGooglePageButton.addEventListener('click', () => {
  window.open('https://google.com')
})

messageOutputButton.addEventListener('click', () => {
  console.log('ДЗ №6');
  alert('ДЗ №6');
})

mainTitle.addEventListener('mouseover', () => {
  console.log(mainTitle.innerText)
})

changeOwnColorButton.addEventListener('click', () => {
  changeOwnColorButton.classList.toggle('products__button--active')
})