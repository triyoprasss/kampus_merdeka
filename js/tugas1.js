//kucing-------------------------------------------------
$("document").ready(function () {
  $(".kucing").click(function () {
    $(this).css({
      background: "url('images/kucing.jpeg')",
      "background-size": "cover",
    });
  });
  $(".kucing").click(function () {
    $("<audio></audio>")
      .attr({
        src: "audio/kucing.mp3",
        volume: 0.4,
        autoplay: "autoplay",
      })
      .appendTo("body");
  });
  $(".kucing").mouseout(function () {
    $(this).css({
      background: "rgb(226, 76, 240)",
    });
  });

  //kuda----------------------------------------------
  $(".kuda").click(function () {
    $(this).css({
      background: "url('images/kuda.jpg')",
      "background-size": "cover",
    });
  });
  $(".kuda").click(function () {
    $("<audio></audio>")
      .attr({
        src: "audio/kuda.mp3",
        volume: 0.4,
        autoplay: "autoplay",
      })
      .appendTo("body");
  });
  $(".kuda").mouseout(function () {
    $(this).css({
      background: "rgb(226, 76, 240)",
    });
  });

  //Ayam------------------------------------------------
  $(".ayam").click(function () {
    $(this).css({
      background: "url('images/ayam.jpg')",
      "background-size": "cover",
    });
  });
  $(".ayam").click(function () {
    $("<audio></audio>")
      .attr({
        src: "audio/ayam.mp3",
        volume: 0.4,
        autoplay: "autoplay",
      })
      .appendTo("body");
  });
  $(".ayam").mouseout(function () {
    $(this).css({
      background: "rgb(226, 76, 240)",
    });
  });

  //Anjing
  $(".anjing").click(function () {
    $(this).css({
      background: "url('images/anjay.jpg')",
      "background-size": "cover",
    });
  });
  $(".anjing").click(function () {
    $("<audio></audio>")
      .attr({
        src: "audio/anjing.mp3",
        volume: 0.4,
        autoplay: "autoplay",
      })
      .appendTo("body");
  });
  $(".anjing").mouseout(function () {
    $(this).css({
      background: "rgb(226, 76, 240)",
    });
  });
});
