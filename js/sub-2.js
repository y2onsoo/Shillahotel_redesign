/////////////top-pop
$("#pop-btn").on("click", function () {
  if ($("#pop-btn").hasClass("off")) {
    $(".top-pop").css("height", "50px");
    $(".pop-text").removeClass("d-none");
    $("#pop-btn").removeClass("off");
    $("#pop-btn").addClass("on");
    $("#pop-btn").removeClass("xi-angle-down");
    $("#pop-btn").addClass("xi-angle-up");
  } else {
    $(".top-pop").css("height", "20px");
    $(".pop-text").addClass("d-none");
    $("#pop-btn").removeClass("on");
    $("#pop-btn").addClass("off");
    $("#pop-btn").removeClass("xi-angle-up");
    $("#pop-btn").addClass("xi-angle-down");
  }
});


//swiper slider
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});