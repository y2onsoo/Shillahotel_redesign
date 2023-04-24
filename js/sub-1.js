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