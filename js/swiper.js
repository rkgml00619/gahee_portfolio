const swiper = new Swiper('.swiper.portfolio', {
  // Optional parameters
  direction: 'vertical',
  slidesPerView: 1,
  mousewheel: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  //   clickable: true,
  // },
});