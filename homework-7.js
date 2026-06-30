function showWeather(city, temperature) {
  console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`)
}

const SPEED_OF_LICHT = 299792458;

function checkSpeed(speed) {
  if (speed > SPEED_OF_LICHT) {
    console.log('Сверхсветовая скорость');
  } else if (speed < SPEED_OF_LICHT) {
    console.log('Субсветовая скорость');
  } else {
    console.log('Скорость света');
  }
}

let productName = 'Хлеб';
let productPrice = 50;

function buyProduct(price) {
  console.log(price >= productPrice ? `${productName} приобретён. Спасибо за покупку!` : `Вам не хватает ${productPrice - price}$, пополните баланс`);
}

function calculateRectangleArea(width, height) {
  return width * height;
}

let name = "Nizam";
const PI = 3.14;
let hasAuth = true;

