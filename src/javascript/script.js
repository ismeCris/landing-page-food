$(document).ready(function () {
    // Botão do menu mobile
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $(this).find('i').toggleClass('fa-bars fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    // Scroll dinâmico e sombra no header
    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop();

        // Aplica ou remove a sombra no header
        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '0 2px 8px rgba(0, 0, 0, 0.1)');
        }

        // Detecta a seção ativa para o menu
        let activeSectionIndex = 0;

        sections.each(function (i) {
            const sectionTop = $(this).offset().top - header.outerHeight();
            const sectionBottom = sectionTop + $(this).outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false; // parar o loop
            }
        });

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    // ScrollReveal animações
    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%',
    });

    ScrollReveal().reveal('.dish', {
        origin: 'bottom',
        duration: 2000,
        distance: '20%',
        interval: 200
    });

    ScrollReveal().reveal('#testimonial_chef', {
        origin: 'left',
        duration: 1000,
        distance: '20%',
    });

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '20%',
        interval: 200
    });
});
