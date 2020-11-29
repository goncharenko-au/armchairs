document.addEventListener("DOMContentLoaded", function () {
    let call = document.querySelector(".header__call"),
        callForm = document.querySelector(".modal__call"),
        closeForm = document.querySelector(".modal__close");

    //modal
    call.addEventListener("click", function (e) {
        callForm.style.display = "block";
        document.body.style.overflow = "hidden";
        e.preventDefault();
    });

    closeForm.addEventListener("click", function () {
        callForm.style.display = "none";
    });


    //inputmask
    let selector = document.querySelectorAll('input[type="tel"]');
    let im = new Inputmask("+7 (999) 999-99-99");
    im.mask(selector);

    //validate forms

    let validateForms = function (selector, rules, succesModal, yaGoal) {
        new window.JustValidate(selector, {
            rules: rules,
            messages: {
                name: {
                    minLength: "My custom message about only minLength rule"
                },
                tel: "Заполните поле"
            },
        });
    };
    validateForms(".modal__form", { tel: { required: true } });
    validateForms(".promo__form", { tel: { required: true } });
    validateForms(".request__form", { tel: { required: true } });

});