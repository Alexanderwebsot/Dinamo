$(document).ready(function () {
  $(".phone").mask("+7 (999) 999-9999");
  let coaches_slider =  new Swiper('.coaches-slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    speed: 600,
    spaceBetween: 20,
    slideToClickedSlide: true,
    navigation: {
      nextEl: '.coaches-arrow__right',
      prevEl: '.coaches-arrow__left',
    },
    breakpoints: {
        1200: {
            spaceBetween: 45,
            slidesPerView: 3,
        },
        1023: {
            slidesPerView: 3,
        },
        700: {
            slidesPerView: 2,
        },
    },
  });

  let header_slider =  new Swiper('.header-slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    speed: 600,
    spaceBetween: 100,
    slideToClickedSlide: true,
    navigation: {
      nextEl: '.header-arrow__right',
      prevEl: '.header-arrow__left',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable:  true,
    },
  });

  if ( jQuery(window).width() < 1200 ){
    $('.about-row-bottom .about-block').unwrap()
  }

  $('.nav-menu').on('click', function() {
    $('.menu-modal').addClass('menu-modal-active');
    return false;
  })
  $('.menu-modal__close').on('click', function() {
    $('.menu-modal').removeClass('menu-modal-active');
    return false;
  })
})