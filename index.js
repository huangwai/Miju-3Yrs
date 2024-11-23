$(document).ready(function () {
  $("#pengsoo").on("click", function () {
    console.log("hi");
    $("#pengsoo").removeClass("crazy");
    $("#pengsoo").addClass("wakeUp");
    $("#face").addClass("face");
    $("#headset-band").addClass("band");
    $("#headset-bottom").addClass("headset");
    $("#glasses").addClass("glass");
    $("#glasses-frame").addClass("frame");
    $("#glasses-hand").addClass("hand");
    $("#working").addClass("working-hand");
    $("#working-hand1").css("animation-play-state", "paused");
    $("#working-hand2").css("animation-play-state", "paused");
    setTimeout(function () {
      $("#pengsoo").removeClass("wakeUp");
      $("#face").removeClass("face");
      $("#headset-band").removeClass("band");
      $("#headset-bottom").removeClass("headset");
      $("#glasses").removeClass("glass");
      $("#glasses-frame").removeClass("frame");
      $("#glasses-hand").removeClass("hand");
      $("#working").removeClass("working-hand");
      $("#pengsoo").addClass("crazy");
      $("#working-hand1").css("animation-play-state", "running");
      $("#working-hand2").css("animation-play-state", "running");
    }, 4500);
  });
});
