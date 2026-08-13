class Modal {
  body = document.querySelector("body");
  buttonClose = document.querySelector(".modal__close");
  buttonRegister = document.querySelector("#register-btn");

  constructor(modalFormId) {
    this.modal = document.querySelector(modalFormId);

    this.buttonRegister.addEventListener("click", () => {
      this.open();
    })

    this.buttonClose.addEventListener("click", () => {
      this.close();
    })
  }

  open() {
    this.modal.classList.toggle("modal-showed");
    this.modal.classList.toggle("overlay");
    this.body.style.overflow = "hidden";
    this.isOpen();
  }

  close() {
    this.modal.classList.toggle("modal-showed");
    this.modal.classList.toggle("overlay");
    this.body.style.overflow = "auto";
    this.isOpen();
  }

  isOpen() {
    if (this.modal.classList.contains("modal-showed")) {
      console.log("Модальное окно открыто");
    } else console.log("Модальное окно закрыто");
  }

}

export const modal = new Modal(".modal");