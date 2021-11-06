$(document).ready(() => {
    $('.js-nav-opener').on('click', function () {
        if($('.nav').hasClass('active')) {
            $('.nav').removeClass('active');
        } else {
            $('.nav').addClass('active');
        }
    })
});