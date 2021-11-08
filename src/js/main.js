$(document).ready(() => {
    $('.js-nav-opener').on('click', function () {
        if($('.header').hasClass('active')) {
            $('.header').removeClass('active');
        } else {
            $('.header').addClass('active');
        }
    })

    let link = document.querySelector(".hire-me__btn");
    let popup = document.querySelector(".pop-up");
    let close = document.querySelector(".pop-up-close");
    link.addEventListener("click", function (event) {
        event.preventDefault();
        popup.classList.add("pop-up-show");
    });

    close.addEventListener("click", function (event) {
        event.preventDefault();
        popup.classList.remove("pop-up-show");
    });
});