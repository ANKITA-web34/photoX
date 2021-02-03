$(document).ready(function() {
    $('.nav-button').click(function() {
        $('.nav-button').toggleClasse('change');
    });


    $(window).scroll(function() {
        let position = $(this).scrollTop();
        if(postion >= 200) {
            $('nav-menu').removeClass('custom-navbar');
        }
    });
});