$(function () {
    $('.menu-toggle, .fa-times').on('click', function ()
    {
        $('nav').toggleClass('active');
        $('.overlay').toggleClass('menu-open');
    });


    $('.overlay').on('click', function ()
    {
        $('nav').removeClass('active');
        $(this).removeClass('menu-open');
    });
});

// Scroll reveal 

window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300
});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 600
});