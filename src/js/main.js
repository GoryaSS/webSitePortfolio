$(document).ready(() => {
    $('.js-nav-opener').on('click', function () {
        if($('.header').hasClass('active')) {
            $('.header').removeClass('active');
        } else {
            $('.header').addClass('active');
        }
    })
});