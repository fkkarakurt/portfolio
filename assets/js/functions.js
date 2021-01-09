$(function () {
  $(".karoselMerkezIMG")
    .delay(5500)
    .queue(function () {
      $(this).addClass("load");
    });
  $(".karoselMerkezBaslik h2")
    .delay(5800)
    .queue(function () {
      $(this).addClass("load");
    });
  $("#sayac")
    .delay(6000)
    .queue(function () {
      $(this).addClass("load");
    });
  $("#logo,#meslek,nav,#copyright")
    .delay(5800)
    .queue(function () {
      $(this).addClass("load");
    });
  $(".karoselUp h2,.karoselUnder h2")
    .delay(6000)
    .queue(function () {
      $(this).addClass("load");
    });
  $(".hoverGecikmesi")
    .delay(7400)
    .queue(function () {
      $(this).addClass("load");
    });
});

// hover

$(function () {
  $(".linkHover").hover(function () {
    if ($(".karoselMerkezIMGBef").hasClass("is_active")) {
      $(".karoselMerkezIMGBef").removeClass("is_active");
      $(".karoselMerkezIMGAft").removeClass("is_active");
      $(".karoselMerkezBaslik").removeClass("is_active");
      $(".karoselMerkezBaslikPlace").removeClass("is_active");
      $("body").removeClass("on");
    } else {
      $(".karoselMerkezIMGBef").addClass("is_active");
      $(".karoselMerkezIMGAft").addClass("is_active");
      $(".karoselMerkezBaslik").addClass("is_active");
      $(".karoselMerkezBaslikPlace").addClass("is_active");
      $("body").addClass("on");
    }
  });
});

// click-menu

$(function () {
  $("#menuAbout").click(function () {
    if ($(this).hasClass("on")) {
      $(this).removeClass("on");
      $("#about").removeClass("is_active");
      $(this).text("about");
    } else {
      $(this).addClass("on");
      $(this).addClass("on");
      $("#about").addClass("is_active");
      $(this).text("close");
    }
  });
});

// one page

$(function () {
  var ANIMATION_DELAY = 1000;
  var IMAGE_CHANGE_DELAY = 400;
  var LOADING_DELAY = 700;
  var IMAGE_DIR = "assets/img/";
  var $countNum = $("#sayacSayi");
  var $maxNum = $("#maxSayi");
  var $cursel = $("#karosel");
  var $link = $("#karosel .linkHover");
  var $centerImg = $(".karoselMerkezIMG");
  var $before = $(".karoselMerkezIMGBef");
  var $beforeImg = $(".karoselMerkezIMGBef img");
  var $after = $(".karoselMerkezIMGAft");
  var $afterImg = $(".karoselMerkezIMGAft img");
  var $centerTitH2 = $(".karoselMerkezBaslik h2");
  var $curselUpH2 = $(".karoselUp h2");
  var $curselUnderH2 = $(".curselUnder h2");

  var TITLES = [
    ["FOREIGN<br>SWORD", "works/foreign.html"],
    ["TAYLOR's<br>REVENGE", "works/taylor.html"],
    ["BOAT<br>DISASTER", "works/boat.html"],
  ];

  /* 2 photos for filter if need*/
  var IMAGES = [
    ["viking.png", "viking.png"],
    ["bloodTaylor.png", "bloodTaylor.png"],
    ["boatdisaster.png", "boatdisaster.png"],
  ];

  var itemcount = TITLES.length;
  var clientY = 0;
  var isAnimating = false;
  var currentIndex = 0;

  var setScrollEvents = function () {
    $(window).on("touchstart", function (ev) {
      clientY = ev.originalEvent.changedTouches[0].clientY;
    });

    $(window).on("wheel mousewheel", function (ev) {
      var deltaY = ev.originalEvent.deltaY;
      var direction = deltaY < 0 ? "up" : "down";
      tryMove(direction);
    });

    $(window).on("touchmove", function (ev) {
      var nextClientY = ev.originalEvent.changedTouches[0].clientY;
      var direction = clientY < nextClientY ? "up" : "down";
      clientY = nextClientY;
      tryMove(direction);
    });
  };

  var preloadImage = function (path) {
    var img = new Image();
    img.src = IMAGE_DIR + path;
  };

  var preloadImages = function () {
    IMAGES.forEach(function (item) {
      preloadImage(item[0]);
      preloadImage(item[1]);
    });
  };

  var z2 = function (num) {
    return ("0" + num).slice(-2);
  };

  var tryMove = function (direction) {
    if (isAnimating || (direction !== "up" && direction !== "down")) return;
    isAnimating = true;

    switch (direction) {
      case "up":
        currentIndex -= 1;
        if (currentIndex < 0) {
          currentIndex = itemcount - 1;
        }

        break;
      case "down":
        currentIndex += 1;
        if (currentIndex >= itemcount) {
          currentIndex = 0;
        }
        break;
      default:
        return;
    }

    move(direction);
    setTimeout(function () {
      isAnimating = false;
    }, ANIMATION_DELAY);
  };

  var move = function (direction) {
    $cursel.addClass("stop " + direction);
    $cursel.offset();
    $cursel.removeClass("stop");
    $cursel.addClass("start");
    $centerImg.removeClass("load");

    updateNum();
    updateTitle();

    setTimeout(function () {
      $beforeImg.attr("src", IMAGE_DIR + IMAGES[currentIndex][0]);
      $afterImg.attr("src", IMAGE_DIR + IMAGES[currentIndex][1]);
    }, IMAGE_CHANGE_DELAY);

    setTimeout(function () {
      $cursel.removeClass("start " + direction);
      $centerImg.addClass("load");
    }, LOADING_DELAY);
  };

  var updateNum = function () {
    var num = z2(currentIndex + 1);
    $countNum.text(num);
  };

  var updateTitle = function () {
    var prevIndex = currentIndex - 1;
    var nextIndex = currentIndex + 1;

    if (prevIndex < 0) {
      prevIndex = itemcount - 1;
    }
    if (nextIndex >= itemcount) {
      nextIndex = 0;
    }

    $centerTitH2.html(TITLES[currentIndex][0]);
    $link.attr("href", TITLES[currentIndex][1]);
    $curselUpH2.html(TITLES[prevIndex][0]);
    $curselUnderH2.html(TITLES[nextIndex][0]);
  };

  preloadImages();
  updateNum();
  updateTitle();
  $maxNum.text(z2(itemcount));

  setTimeout(setScrollEvents, 6000);
});
