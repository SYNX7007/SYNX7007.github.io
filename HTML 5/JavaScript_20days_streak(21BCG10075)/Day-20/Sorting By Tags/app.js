$(document).ready(function () {
  $(".Red").click(function () {
    $(".red").show();
    $(".green").hide();
    $(".yellow").hide();
  });
  $(".Green").click(function () {
    $(".red").hide();
    $(".green").show();
    $(".yellow").hide();
  });
  $(".Yellow").click(function () {
    $(".red").hide();
    $(".green").hide();
    $(".yellow").show();
  });
  $(".all").click(function () {
    $(".red").show();
    $(".green").show();
    $(".yellow").show();
  });
});
