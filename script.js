const header = document.querySelector('.primary-header');
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.primary-nav');

navToggle.addEventListener('click', () => {
    navToggle.setAttribute("aria-expanded", !nav.hasAttribute("data-visible"));
    nav.toggleAttribute('data-visible');
    header.toggleAttribute('data-overlay');
})


const swiper = new Swiper('.swiper', {
    autoHeight: false,
    slidesPerView: 1,

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        940: {
            slidesPerView: 3,
            spaceBetween: 25
        }
    }
});
