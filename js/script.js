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

});
