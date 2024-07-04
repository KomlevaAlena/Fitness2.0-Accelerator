import Swiper from '../vendor/swiper';

export const slider = new Swiper('.judges__wrapper', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.judges__button--prev',
    prevEl: '.judges__button--next',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});


export const slider2 = new Swiper('.reviews__wrapper', {
  // direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  watchSlidesProgress: true,
  slideVisibleClass: 'is-visible',
  navigation: {
    nextEl: '.reviews__button--next',
    prevEl: '.reviews__button--prev',
  },
  // breakpoints: {
  //   320: {
  //     slidesPerView: 1,
  //   },
  //   768: {
  //     slidesPerView: 1,
  //   },
  //   1366: {
  //     slidesPerView: 1,
  //   },
  // },
});
