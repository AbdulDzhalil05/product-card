export class Modal {
  #closeButton;
  #boundHandler = this.close.bind(this);
  #overlay = document.getElementById('overlay');

  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    this.modal = document.getElementById(modalId);
    this.shouldCloseOnOverlay = shouldCloseOnOverlay;
    this.#initOpen(buttonId);
  }

  open() {
    this.modal.classList.add('modal-showed');
    this.#overlay.classList.add('overlay-showed');
    this.#initClose();
    if (this.shouldCloseOnOverlay) {
      this.#overlay.addEventListener('click', this.#boundHandler)
    }
  }

  close() {
    this.modal.classList.remove('modal-showed');
    this.#overlay.classList.remove('overlay-showed');
    this.#overlay.removeEventListener('click', this.#boundHandler);
    this.#closeButton.removeEventListener('click', this.#boundHandler)
  }

  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }

  #initOpen(buttonId) {
    const button = document.getElementById(buttonId);
    button.addEventListener('click', () => {
      this.open();
    })
  }

  #initClose() {
    this.#closeButton = this.modal.querySelector('#modal-close-button');
    this.#closeButton.addEventListener('click', this.#boundHandler);
  }

} 