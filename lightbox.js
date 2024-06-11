$(document).ready(function () {
  /* Open lightbox on image click */
  $("#gallery").on("click", ".card img", function () {
    $(".backdrop")
      .animate({ opacity: ".50" }, 300, "linear")
      .css("display", "block");
    $(".box").fadeIn();

    // Check if lightbox has an image
    if ($(".box").contents("img")) {
      $(".box").contents().remove("img"); // If true, clear image
    }

    // Get image source
    var imgSrc = $(this).attr("src");
    var img = $("<img>").attr("src", imgSrc); // Create new image element with src

    $(".box").append(img); // Insert duplicated element in another element
  });

  /* Click to close lightbox */
  $(".close, .backdrop").click(function () {
    $(".backdrop").animate({ opacity: "0" }, 300, "linear", function () {
      $(".backdrop").css("display", "none");
    });
    $(".box").fadeOut();
  });
});
