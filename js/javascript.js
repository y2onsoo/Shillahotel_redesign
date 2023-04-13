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


/////////////캘랜더
$('input[name="dates"]').daterangepicker();
const daterpicker = $(".daterangepicker")
$("#calendar-wrapper").append(daterpicker)



///////////////////////////main슬라이드-1번째
const swiper1 = new Swiper(".first-slide", {
  direction: "horizontal",
  loop: true,
  spaceBetween: 0,
  slidesPerView: "auto",
  speed: 4000,
  effect: "fade",
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

////////////슬라이드 2번째
var swiper2 = new Swiper(".seconde-slide", {
  slidesPerView: 5,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

////////////슬라이드 3번째
var swiper2 = new Swiper(".thrid-slide", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// ///////////////////예약창
let topButton = document.getElementById("topBtn");

function scrollFunction() {
  var rsvScroll = document.documentElement.scrollTop || document.body.scrollTop;
  if (rsvScroll > 100) {
    $("#rsv").addClass("fixed");
    $("#rsv").removeClass("absol");
    $("#calendar-menu").css("boxShadow", "none")
  } else {
    $("#rsv").removeClass("fixed");
    $("#rsv").addClass("absol");
  }
}
//예약 날짜창
$('html').click(function(e) {   
  if(!$(e.target).hasClass('calendar-input') && !$(e.target).hasClass('daterangepicker')){   
    $(".daterangepicker").css("display", "none");
  }
  if($(e.target).hasClass('calendar-input')){
    $(".daterangepicker").css("display", "block");
  }
});


///////top 버튼
window.onscroll = function () {
  scrollFunction();

  if ($(window).scrollTop() > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
};


function topFunction() {
  document.documentElement.scrollTop = 0;
}



