import { mainForm } from "./form.js"

const emailForm = document.querySelector(".form");

function createObject(form) {
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  return data;
}

emailForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;
  console.log(createObject(form));
})

const registerForm = document.querySelector(".modal__form");
const modalConfirmPassword = document.querySelector(".modal__confirmPassword");
const confirmPassword = document.querySelector("#confirmPassword");
const password = document.querySelector("#password");

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  mainForm.checkValidity();
})