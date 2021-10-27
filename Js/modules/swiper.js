import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js'

export const swiper = new Swiper('.swiper', {
    // slidesPerView: 3,
    // spaceBetween: 10,
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: -40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: -50,
      },
    }
  
});