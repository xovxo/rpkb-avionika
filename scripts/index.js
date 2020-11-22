const openModalBtn = document.querySelector(".cover__link");
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".modal__close-btn");
const formModal = modal.querySelector(".modal__form");

function toggleModal() {
  modal.classList.toggle("modal_is-open");
}

openModalBtn.addEventListener("click", toggleModal);

closeModalBtn.addEventListener("click", toggleModal);
