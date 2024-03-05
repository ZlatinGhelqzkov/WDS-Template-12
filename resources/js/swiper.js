let feedbackSwiper = new Swiper(".feedback-swiper", {
  direction: "horizontal",
  loop: true,
  centeredSlides: true,
  slidesPerView: 1.15,
  effect: 'coverflow',
  coverflowEffect:{
    modifier: 1,
    rotate: 45,
    depth: 300,
    stretch: 0,
  },
  
  navigation: {
    nextEl: ".feedback-next",
    prevEl: ".feedback-prev",
  },

  breakpoints: {
    768: {
      coverflowEffect: {
        stretch: 470,
        rotate: 15
      }
    },

    1200: {
      coverflowEffect: {
        stretch: 570,
        rotate: 0
      }
    },
    
  },
});
