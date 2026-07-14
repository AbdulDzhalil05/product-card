import { productCards } from "./product-cards.js";

const productList = document.querySelector('.products__cards');
const productTemplate = document.querySelector('#product-template');

function getCardsCount() {
  let count = NaN;

  while (Number.isNaN(count)) {
    count = +prompt('Сколько карточек отобразить?');
    if (count > 5) count = 5;
  };

  return count;
}

function showCards(count) {
  for (let i = 0; i < count; i++) {
    const productClone = productTemplate.content.cloneNode(true);

    productClone.querySelector('.card__image img').src = `images/${productCards[i].image}.png`;
    productClone.querySelector('.card__image img').alt = productCards[i].title;
    productClone.querySelector('.card__title').textContent = productCards[i].title;
    productClone.querySelector('.card__description').textContent = productCards[i].description;
    productClone.querySelector('.card__price span').innerHTML = `${productCards[i].price} &#8381`;

    productCards[i].ingredients.forEach(ingredient => {
      const li = document.createElement("li");
      li.textContent = ingredient;
      productClone.querySelector('.card__list').append(li);
    })

    productList.appendChild(productClone);
  }
}

showCards(getCardsCount());

const productDescriptions = productCards.reduce((array, card) => {
  array.push({ [card.title]: card.description });
  return array;
}, []);