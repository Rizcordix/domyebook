import SwiperCore from "swiper";
import { A11y } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import { EffectCreative } from "swiper/modules";
import { EffectFade } from "swiper/modules";
import { Grid } from "swiper/modules";
import { HashNavigation } from "swiper/modules";
import { History } from "swiper/modules";
import { Keyboard } from "swiper/modules";
import { Mousewheel } from "swiper/modules";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import { Scrollbar } from "swiper/modules";
import { Thumbs } from "swiper/modules";
import { Virtual } from "swiper/modules";

SwiperCore.use([
  Mousewheel,
  Pagination,
  Navigation,
  EffectFade,
  Autoplay,
  Grid,
  EffectCreative,
  Virtual,
  HashNavigation,
  History,
  Thumbs,
  Scrollbar,
  Keyboard,
  A11y,
]);


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const sliderProps = {
  hero2Slider: {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 1200,
    parallax: true,
    autoplay: { delay: 6000 },
    navigation: {
      nextEl: '.mil-next',
      prevEl: '.mil-prev',
    },
    on: {
      slideChangeTransitionEnd(swiper) {
        swiper.update(true);
      }
    }
  },

  hero4Slider: {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 800,
    autoplay: { delay: 6000 },
    parallax: true,
    loop: true,
    mousewheel: true,
    noSwipingSelector: 'a',
    direction: 'vertical',
    pagination: {
      el: '.js-hero-parallax-pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      nextEl: '.js-hero-parallax-next',
      prevEl: '.js-hero-parallax-prev',
    },
    on: {
      slideChange(swiper) {
        const currentPos = swiper.el.querySelector('.swiper-pagination-bullet-active').offsetTop;
        swiper.el.querySelector('.swiper-nav-active').style.top = `${currentPos}px`;
      },
      afterInit(swiper) {
        const currentPos = swiper.el.querySelector('.swiper-pagination-bullet-active').offsetTop;
        swiper.el.querySelector('.swiper-nav-active').style.top = `${currentPos}px`;
        swiper.el.querySelector('.onovo-paginations-container-vertical').style.opacity = 1;

        const allImages = swiper.el.querySelectorAll('.onovo-hero-parallax-section .image');
        allImages.forEach((image) => {
          const dImg = image.dataset.dimg;
          const mImg = image.dataset.mimg;
          if (window.innerWidth < 768 && mImg) {
            image.style.backgroundImage = `url(${mImg})`;
          } else if (dImg) {
            image.style.backgroundImage = `url(${dImg})`;
          }
        });
      }
    }
  },

  // Add other slider configurations if present in your original sliderProps.js
  // For example:
  // portfolioSlider: {
  //   slidesPerView: 1,
  //   spaceBetween: 0,
  //   loop: true,
  //   speed: 1200,
  //   parallax: true,
  //   autoplay: { delay: 6000 },
  // },
};
