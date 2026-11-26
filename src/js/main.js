import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "purecss/build/grids-min.css";
import "purecss/build/grids-responsive-min.css";
import "modern-normalize/modern-normalize.css";

import "/src/sass/style.scss";

// init Swiper:
const swiper = new Swiper(".swiper", {
  modules: [Navigation, Pagination],
  loop: true,
  spaceBetween: 10,

  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    // when window width is >= 1200px
    1200: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
    1920: {
      spaceBetween: 35,
    },
  },
});
