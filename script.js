document.addEventListener("DOMContentLoaded", () => {
    let modal = document.querySelector(".modal"),
        openModal = document.querySelector('.main__btn'),
        closeModal = document.querySelector(".modal__close"),
        form = document.querySelector("form"),
        mail = document.querySelector(".modal__input-mail"),
        name = document.querySelector(".modal__input-name"),
        pass = form.querySelector('.password'),
        passConf = form.querySelector('.passwordconfirm'),
        check = document.querySelector(".modal__check"),
        isSubmit = false;
    const regExpName = /^[a-z0-9_-]{3,40}$/;
    const regExpEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    const regExpPass = /^(?=.*[0-9])[a-zA-Z0-9]{6,32}$/;

    openModal.addEventListener("click", () => {
        modal.classList.add("modal-active")
    })
    closeModal.addEventListener("click", () => {
        modal.classList.remove("modal-active");
        form.reset();
        for (let elem of form.elements) {
            elem.nextElementSibling.textContent = "";
            elem.style.borderColor = "#DDDD";
        }
    })
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        checkInput();
        if (isSubmit) {
            let data = {
                login: form.elements.name.value,
                password: form.elements.password.value,
                mail: form.elements.mail.value,
                check: form.elements.accept.checked,
            };
            let jsonData = JSON.stringify(data);

            console.log(jsonData);
            form.reset();
            modal.classList.remove("modal-active");
            for (let elem of form.elements) {
                elem.nextElementSibling.textContent = "";
                elem.style.borderColor = "#DDDD";
            }
            openModal.setAttribute('disabled');
        }
    });
    for (let elem of form.elements) {
        if (!elem.classList.contains("modal__btn") &&
            !elem.classList.contains("modal__check")
        ) {
            elem.addEventListener("blur", () => {
                validate(elem);
            });
        }
    }

    function validate(elem) {
        if (elem.name === "name") {
            if (!regExpName.test(elem.value) && elem.value !== "") {
                elem.nextElementSibling.textContent =
                    "Введите корректное имя пользователя";
                elem.style.borderColor = "red";
            } else if (regExpName.test(elem.value)) {
                elem.nextElementSibling.textContent = "";
                elem.style.borderColor = "green";
            } else {
                elem.nextElementSibling.textContent = "";
                elem.style.borderColor = "#DDD";
            }
        }

        if (elem.name === "mail") {
            if (!regExpEmail.test(elem.value) && elem.value !== "") {
                elem.nextElementSibling.textContent = "Введите корректный email";
                elem.style.borderColor = "red";
            } else if (regExpEmail.test(elem.value)) {
                elem.nextElementSibling.textContent = "";
                elem.style.borderColor = "green";
            } else {
                elem.nextElementSibling.textContent = "";
                elem.style.borderColor = "#DDD";
            }
        }

        if (elem.name === "password") {
            if (passConf.value !== pass.value && passConf.value !== "") {
                passConf.nextElementSibling.textContent = "Пароли не совпадают";
                elem.style.borderColor = "red";
            } else if (passConf.value !== pass.value) {
                elem.nextElementSibling.textContent = "";
                elem.style.borderColor = "green";
            } else {
                passConf.nextElementSibling.textContent = "";
                elem.style.borderColor = "#DDD";
            }

            if (!regExpPass.test(elem.value) && elem.value !== "") {
                elem.nextElementSibling.textContent = "Введите корректный пароль";
                elem.style.borderColor = "red";
            } else if (regExpPass.test(elem.value)) {
                elem.nextElementSibling.textContent = "";
                elem.style.borderColor = "green";
            } else {
                elem.nextElementSibling.textContent = "";
                elem.style.borderColor = "#DDD";
            }
            if (pass.value == name.value && pass.value !== "") {
                elem.nextElementSibling.textContent = "Пароль не может совпадать с ником";
                elem.style.borderColor = "red";
            } else if (pass.value == mail.value && pass.value !== "") {
                elem.nextElementSibling.textContent = "Пароль не может совпадать с почтой";
                elem.style.borderColor = "red";
            }
        }

        if (elem.name === "passwordConfirmation") {
            if (passConf.value !== pass.value && passConf.value !== "") {
                passConf.nextElementSibling.textContent = "Пароли не совпадают";
                elem.style.borderColor = "red";
            } else if (passConf.value !== pass.value) {
                elem.nextElementSibling.textContent = "";
                elem.style.borderColor = "green";
            } else {
                passConf.nextElementSibling.textContent = "";
                elem.style.borderColor = "#DDD";
            }
        }
    };

    function checkInput() {
        for (let elem of form.elements) {
            if (!elem.classList.contains("modal__btn") &&
                !elem.classList.contains("modal__check")
            ) {
                if (elem.value === "") {
                    elem.nextElementSibling.textContent = "Данные не введены";
                    elem.style.borderColor = "red";
                    isSubmit = false;
                } else {
                    isSubmit = true;
                    elem.style.borderColor = "#DDDD";
                }
            }
        }
        if (isSubmit) {
            if (!check.checked) {
                alert("Примите пользовательское соглашение");
                return isSubmit = false;
            } else {
                return isSubmit = true;
            }
        }
    }
})