document.addEventListener("DOMContentLoaded", () => {
    let modal = document.querySelector(".modal"),
        openModal = document.querySelector('.main__btn'),
        closeModal = document.querySelector(".modal__close"),
        form = document.querySelector(".modal__form");

    openModal.addEventListener("click", () => {
        modal.classList.add("modal-active")
    })
    closeModal.addEventListener("click", () => {
        modal.classList.remove("modal-active");
        form.reset();
    })


})