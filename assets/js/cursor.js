var cursor = document.querySelector(".cursor");
var cursorII = document.querySelector(".cursorII");
document.addEventListener("mousemove", function (e) {
  cursor.style.cssText = cursorII.style.cssText =
    "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});
