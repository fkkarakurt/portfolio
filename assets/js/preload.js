$(window).load(function () {
  $("#preload").addClass("is_active");
  setTimeout(function () {
    $("#preload").addClass("is_loaded");
  }, 4000);
  setTimeout(function () {
    $("#preload_second").addClass("is_loaded");
  }, 1800);
});
