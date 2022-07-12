var swiper = new Swiper(".mySwiper", {
  slidesPerView: 'auto',
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 'auto',
      spaceBetween: 30,
    },
  },
});