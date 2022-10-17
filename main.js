$(document).on("mousemove", function (e) {
  var cursor = $(".cursor");
  cursor.attr(
    "style",
    "top :" + (e.pageY - 22) + "px; left: " + (e.pageX - 12) + "px;"
  );
});
