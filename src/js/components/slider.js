import Swiper from 'swiper';
import { Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

export const useInsightSlider = () => {
  new Swiper('.insight__slider', {
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,
    breakpoints: {
      993: {
        centeredSlides: false,
      },
    },
  });
};

export const useTestimonialsSlider = () => {
  new Swiper('.testimonials__slider', {
    modules: [Navigation, EffectFade],
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    slidesPerView: 1,
    spaceBetween: 22,
    loop: true,
    navigation: {
      prevEl: '.testimonials__btn--prev',
      nextEl: '.testimonials__btn--next',
    },
  });
};

export const useTeamSlider = () => {
  new Swiper('.team__slider', {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 16,
    loop: true,
    navigation: {
      prevEl: '.testimonials__btn--prev',
      nextEl: '.testimonials__btn--next',
    },
    breakpoints: {
      993: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
      577: {
        slidesPerView: 2,
        spaceBetween: 22,
      },
    },
  });
};

export const useNewsSlider = () => {
  new Swiper('.tabs-news__slider', {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 32,
    loop: true,
    breakpoints: {
      993: {
        slidesPerView: 2.5,
      },
      577: {
        slidesPerView: 1.5,
      },
    },
  });
};
export const useArticlesSlider = () => {
  new Swiper('.articles__slider', {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 32,
    loop: true,
    navigation: {
      prevEl: '.articles__btn--prev',
      nextEl: '.articles__btn--next',
    },
    breakpoints: {
      993: {
        slidesPerView: 2.5,
      },
      577: {
        slidesPerView: 1.5,
      },
    },
  });
};
