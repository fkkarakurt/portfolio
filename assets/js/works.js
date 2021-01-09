$(function () {
  $(".fkOver")
    .delay(100)
    .queue(function () {
      $(this).addClass("load");
    });
  $(".fkContent")
    .delay(1000)
    .queue(function () {
      $(this).addClass("load");
    });
  $("#logo,#meslek,nav,#copyright")
    .delay(1400)
    .queue(function () {
      $(this).addClass("load");
    });
  $(".backgroundAnim")
    .delay(1800)
    .queue(function () {
      $(this).addClass("load");
    });
});

$(function () {
  $("#menuAbout").click(function () {
    if ($(this).hasClass("on")) {
      $(this).removeClass("on");
      $("#about").removeClass("is_active");
      $(this).text("about");
      $("body").css("position", "inherit");
    } else {
      $(this).addClass("on");
      $(this).addClass("on");
      $("#about").addClass("is_active");
      $(this).text("close");
      $("body").css("position", "fixed");
    }
  });
});

$(function () {
  $(".ileriMetin").hover(function () {
    if ($(".ileriContent").hasClass("is_active")) {
      $(".ileriContent").removeClass("is_active");
      $(".ileriOver").removeClass("is_active");
      $(this).removeClass("is_active");
    } else {
      $(".ileriContent").addClass("is_active");
      $(".ileriOver").addClass("is_active");
      $(this).addClass("is_active");
    }
  });
});

$(window).scroll(function () {
  var windowHeight = $(window).height(),
    topWindow = $(window).scrollTop();
  $(
    ".esnekI,.esnekII,.esnekIII,.esnekBilgiItem,#ziyaret,.emegiGecenKutuItem,.emegiGecenBaslik,.uzunMetin"
  ).each(function () {
    var targetPosition = $(this).offset().top;
    if (topWindow > targetPosition - windowHeight + 200) {
      $(this).addClass("is_visible");
    } else {
      $(this).removeClass("is_visible");
    }
  });
});
