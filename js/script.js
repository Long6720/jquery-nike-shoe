$(document).ready(() => {
  $("#menu-bar").click(function () {
    $(".header__mobile-container").show();
  });
  $("#close-bar").click(function () {
    $(".header__mobile-container").hide();
  });
  $(window).scroll(function () {
    if ($(this).scrollTop()) {
      $("header").addClass("box-shadow").slideDown(3000);
    } else {
      $("header").removeClass("box-shadow");
    }
  });
  activeLinkControl();
  activeHeart();
  sliderShow();
});
function activeLinkControl() {
  $(".header__navbar-list .header__navbar-item a").click(function () {
    $(this).closest(".header__navbar-item").siblings().removeClass("active");
    $(this).closest(".header__navbar-item").addClass("active");
  });
}
function activeHeart(){
  $(".main__popular-products-heart").click(function(){
    if($(this).hasClass("active"))
    {
      $(this).closest(".main__popular-products-heart").removeClass("active");
    }else{
      $(this).closest(".main__popular-products-heart").addClass("active");
    }
  })
}

function sliderShow() {
  let sliders = $(".main__slider-container");
  let index = 0;

  $("#next").click(function(e){
    $(sliders[index]).removeClass("active");
    index = (index + 1) % sliders.length;
    $(sliders[index]).addClass("active");
  })
  $("#prev").click(function(e){
    $(sliders[index]).removeClass("active");
    index = (index - 1 + sliders.length) % sliders.length;
    $(sliders[index]).addClass("active");
  })
}
// swiper
const swiper__popular = new Swiper(".main__popular", {
  autoplay: { delay: 2000 },
  loop: true,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});
const swiper__customer = new Swiper(".customer__content", {
  autoplay: { delay: 2000 },
  loop: true,
  loopFillGroupWithBlank: true,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 2,
    },
  },
});
