import { modal } from "./modal.js";

class Form {
  modalConfirmPassword = document.querySelector(".modal__confirmPassword");
  resetBtn = document.querySelector("#resetBtn");
  userObject = {};

  constructor(formId) {
    this.form = document.querySelector(formId);

    this.form.confirmPassword.addEventListener("input", () => {
      if (this.form.password.value === this.form.confirmPassword.value) {
        this.modalConfirmPassword.classList.remove("modal__confirmPasswordError");
      }
    })

    this.resetBtn.addEventListener('click', () => {
      this.reset();
    })
  }

  getFormValues() {
    const formData = new FormData(this.form);
    const data = Object.fromEntries(formData.entries());
    return data;
  }

  checkValidity() {

    if (this.form.password.value !== this.form.confirmPassword.value) {
      this.modalConfirmPassword.classList.add("modal__confirmPasswordError");
    } else {
      this.modalConfirmPassword.classList.remove("modal__confirmPasswordError");
      const date = new Date();
      this.userObject = { ...mainForm.getFormValues(), createdOn: date }
      console.log(this.userObject);
      modal.close();
      this.reset();
    }
  }

  reset() {
    this.form.reset();
  }
}

export const mainForm = new Form(".modal__form");