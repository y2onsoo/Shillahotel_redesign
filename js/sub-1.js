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

$("#category li").click(function (e) {
  const gubun = $(e.target.parentNode).index();
  $("#category_main").empty();

  if (gubun == 0) {
    $("#category_main").append(`<div class="sub-info sub-info-1">
    <div class="sub-info-1-text">
      <h2>서울신라호텔 소개</h2>
      <p>
        <i class="fa-solid fa-house"></i>
        <span>> introduction ></span>
        <span> <a href="#">About The Shilla Seoul</a> </span>
      </p>
    </div>
    <div class="sub-info-1-img">
      <div class="sub-info-sns-wrap">
        <i class="sub-icon fa-brands fa-instagram"></i>
        <i class="sub-icon fa-brands fa-facebook"></i>
        <i class="sub-icon fa-brands fa-square-twitter"></i>
      </div>
    </div>
  </div>`);
  } else if (gubun == 1) {
    $("#category_main").append(`<div class="sub-info sub-info-1">
    <div class="sub-info-1-text">
      <h2>서울신라호텔 소개</h2>
      <p>
        <i class="fa-solid fa-house"></i>
        <span>> introduction ></span>
        <span> <a href="#">About The Shilla Seoul</a> </span>
      </p>
    </div>
    <div class="sub-info-1-img">
      <div class="sub-info-sns-wrap">
        <i class="sub-icon fa-brands fa-instagram"></i>
        <i class="sub-icon fa-brands fa-facebook"></i>
        <i class="sub-icon fa-brands fa-square-twitter"></i>
      </div>
    </div>
  </div>`);
  // <div class="sub-info sub-info-2">
  //   <div class="sub-info-2-text">
  //     <h2>호텔정보</h2>
  //     <p>
  //       <i class="fa-solid fa-house"></i>
  //       <span>> 소개 ></span>
  //       <span> <a href="#">호텔정보</a> </span>
  //     </p>
  //   </div>
  //   <div class="sub-info-2-img">
  //     <div class="sub-info-sns-wrap">
  //       <i class="sub-icon fa-brands fa-instagram"></i>
  //       <i class="sub-icon fa-brands fa-facebook"></i>
  //       <i class="sub-icon fa-brands fa-square-twitter"></i>
  //     </div>
  //   </div>
  // </div>
  } else if (gubun == 2) {
    $("#category_main").append(`<div class="sub-info sub-info-3">
    <div class="sub-info-3-text">
      <h2>층별안내도</h2>
      <p>
        <i class="fa-solid fa-house"></i>
        <span>> introduction ></span>
        <span> <a href="#">층별안내도</a> </span>
      </p>
    </div>
    <div class="sub-info-3-img"></div>
  </div>`);
  } else if (gubun == 3) {
    $("#category_main").append(`<div class="sub-info sub-info-4">
    <div class="sub-info-4-text">
      <h2>오시는길</h2>
      <p>
        <i class="fa-solid fa-house"></i>
        <span>> introduction ></span>
        <span> <a href="#">오시는길</a> </span>
      </p>
    </div>
    <div class="sub-info-4-img">
      <div class="sub-info-4-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.9641833707997!2d127.00267597638042!3d37.55590762473672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2ed7f0d9e75%3A0x49ec999d2ee31371!2z7ISc7Jq47Iug65287Zi47YWU!5e0!3m2!1sko!2skr!4v1682304806821!5m2!1sko!2skr"
          width="100%"
          height="100%"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div class="sub-info-4-map-text"></div>
    </div>
  </div>`);
  } else {
    $("#category_main").append(`<div>정보가 없습니다.</div>`);
  }
});
