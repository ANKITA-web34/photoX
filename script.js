$(document).ready(function() {
    $('.nav-button').click(function() {
        $('.nav-button').toggleClass('change');
    });


    $(window).scroll(function() {
        let position = $(this).scrollTop();
        if(position >= 200) {
            $('.nav-menu').addClass('custom-navbar');
        } else {
            $('.nav-menu').removeClass('custom-navbar');
        }
    });

    $(window).scroll(function () {
        let position = $(this).scrollTop();
        if(position >= 650) {
            $('.camera-img').addClass('fromleft');
            $('.mission-text').addClass('fromright')
        } else {
            $('.camera-img').removeClass('fromleft');
            $('.mission-text').removeClass('fromright')
        }
    });

    $('.gallery-list-item').click(function() {
        let value = $(this).attr('data-filter');
        if(value === 'All') {
            $('.filter').show(300);
        } else {
            $('.filter').not('.' + value).hide(300);
            $('.filter').filter('.' + value).show(300);
        }
    });

    $('.gallery-list-item').click(function() {
        $(this).addClass('active-item').siblings().removeClass('active-item');
    });

    $(window).scroll(function() {
        let position = $(this).scrollTop();
        if(position >= 4300) {
            $('.card-1').addClass('movefromleft');
            $('.card-2').addClass('movefrombottom');
            $('.card-3').addClass('movefromright');
        } else {
            $('.card-1').removeClass('movefromleft');
            $('.card-2').removeClass('movefrombottom');
            $('.card-3').removeClass('movefromright');
        }
    })

});