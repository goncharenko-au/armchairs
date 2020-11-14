document.addEventListener("DOMContentLoaded", function () {
    let call = document.querySelector(".header__call"),
        callForm = document.querySelector(".modal__call"),
        closeForm = document.querySelector(".modal__close");


    call.addEventListener("click", function (e) {
        callForm.style.display = "block";
        e.preventDefault();
    });

    closeForm.addEventListener("click", function () {
        callForm.style.display = "none";
    });





    let selector = document.querySelectorAll('input[type="tel"]');

    let im = new Inputmask("+7 (999) 999-99-99");
    im.mask(selector);
});
