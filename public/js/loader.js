/* =========================================
                Preloader
============================================ */
$(window).on("load", function () {
  // makes sure that whole site is loaded
  $("#preloader").animate({ width: "100%", height: "100%" }, "slow");

  setTimeout(function () {
    $("#preloader").animate(
      {
        transform: "translate(-50%, -50%)",
        width: "0%",
        height: "0%",
        top: "50%",
        right: "50%",
        bottom: "50%",
      },
      "slow"
    );
  }, 3000);
});
