import { comments } from "./comments.js";

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let filteredNumbers = numbers.filter(item => item >= 5);

console.log(filteredNumbers);

let furniture = ["кровать", "диван", "стул", "кресло", "стол"];

if (furniture.find(item => item === "стул") !== undefined) {
  console.log("сущность найдена")
} else console.log("сущность не найдена");

function getReversedArray(array) {
  array.reverse();
}

getReversedArray(filteredNumbers);
getReversedArray(furniture);

let filteredComments = comments.filter(item => item.email.includes('.com'));

console.log(filteredComments);

let changedCommentsPostId = comments.map(item => (item.id <= 5 ? { ...item, postId: 2 } : { ...item, postId: 1 }));

console.log(changedCommentsPostId);

let changedComments = comments.map(item => ({ id: item.id, name: item.name }));

console.log(changedComments);

let formatedComments = comments.map(item => (item.body.length > 180 ? { ...item, isInvalid: true } : { ...item, isInvalid: false }));

console.log(formatedComments);

let emailsByReduce = comments.reduce((array, item) => {
  array.push(item.email);
  return array;
}, []);

console.log(emailsByReduce);

let emailsByMap = comments.map(item => item.email);

console.log(emailsByMap);

console.log(emailsByReduce.toString());
console.log(emailsByReduce.join("\n"));