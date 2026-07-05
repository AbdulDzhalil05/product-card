//============================================================================
//Task3: create a user object with personal data

const user = {
  firstName: 'Абдулджалил',
  lastName: 'Абдусаламов',
  email: 'abdusalamovdzhalil@gmail.com',
  job: 'Frontend Developer',
  age: 38,
  country: 'Russia',
  village: 'Madzhalis',
  maritalStatus: 'married',
};

//============================================================================
//Task4: create a car object

const car = {
  brand: 'Renault',
  model: 'Logan 1',
  year: 2011,
  color: 'black',
  transmission: 'manual'
};

car.owner = user;

//============================================================================
//Task5: check and add maxSpeed property to car object

function addMaxSpeed(object) {
  if (!object.maxSpeed) {
    object.maxSpeed = 100;
  }
}

//============================================================================
//Task6: show property of object

function showPropertyOfObject(object, property) {
  object[property] ? console.log(object[property]) : console.log('Нет такого свойства');
}

//============================================================================
//Task7: create an array of product names

const products = ['Бананы', 'Хлеб', 'Молоко', 'Масло', 'Мука'];

//============================================================================
//Task8: create an array of books

const books = [
  {
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    publicationYear: 1967,
    coverColor: "чёрный",
    genre: "Роман",
  },
  {
    title: "Война и мир",
    author: "Лев Толстой",
    publicationYear: 1869,
    coverColor: "зелёный",
    genre: "Роман",
  },
  {
    title: "Гордость и предубеждение",
    author: "Джейн Остин",
    publicationYear: 1813,
    coverColor: "розовый",
    genre: "Роман",
  },
  {
    title: "Преступление и наказание",
    author: "Фёдор Достоевский",
    publicationYear: 1866,
    coverColor: "бордовый",
    genre: "Роман",
  }
];

books.push({
  title: "Евгений Онегин",
  author: "Александр Пушкин",
  publicationYear: 1833,
  coverColor: "синий",
  genre: "Роман в стихах",
});

//============================================================================
//Task9: сreate an array of Harry Potter books

const harryPotterBooks = [
  {
    title: "Гарри Поттер и философский камень",
    author: "Дж. К. Роулинг",
    publicationYear: 1997,
    coverColor: "красный",
    genre: "Фэнтези",
  },
  {
    title: "Гарри Поттер и Тайная комната",
    author: "Дж. К. Роулинг",
    publicationYear: 1998,
    coverColor: "зелёный",
    genre: "Фэнтези",
  },
  {
    title: "Гарри Поттер и узник Азкабана",
    author: "Дж. К. Роулинг",
    publicationYear: 1999,
    coverColor: "синий",
    genre: "Фэнтези",
  },
];

const allBooks = [...books, ...harryPotterBooks];

//============================================================================
//Task10: add the "isRare" property to each book

function addProperty(object) {
  if (object.publicationYear > 1990) {
    object.isRase = true;
  } else object.isRase = false;
}

allBooks.map(addProperty);