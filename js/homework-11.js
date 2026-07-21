const emailForm = document.querySelector(".form");
let userObject = {};

emailForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  console.log(data);
})

const buttonRegister = document.querySelector("#register-btn");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const body = document.querySelector("body");
const registerForm = document.querySelector(".modal__form");
const modalConfirmPassword = document.querySelector(".modal__confirmPassword");
const confirmPassword = document.querySelector("#confirmPassword");
const password = document.querySelector("#password");


buttonRegister.addEventListener("click", () => {
  modal.classList.toggle("modal-showed");
  modal.classList.toggle("overlay");
  body.style.overflow = "hidden";
})

const buttonClose = document.querySelector(".modal__close");

buttonClose.addEventListener("click", (event) => {
  event.preventDefault();
  modal.classList.toggle("modal-showed");
  modal.classList.toggle("overlay");
  body.style.overflow = "auto";
})

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  function checkValidity() {

    if (password.value !== confirmPassword.value) {
      modalConfirmPassword.classList.add("modal__confirmPasswordError");
    } else {
      modalConfirmPassword.classList.remove("modal__confirmPasswordError");
      const form = event.target
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      const date = new Date();
      userObject = { ...data, createdOn: date }
      console.log(userObject);
      modal.classList.toggle("modal-showed");
      modal.classList.toggle("overlay");
      body.style.overflow = "auto";
      event.target.reset();
    }
  }
  checkValidity();
})

confirmPassword.addEventListener("input", () => {
  if (password.value === confirmPassword.value) {
    modalConfirmPassword.classList.remove("modal__confirmPasswordError");
  }
})