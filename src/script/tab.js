//tab
$(document).ready(function () {
    $(".about__item").click(function () {
        $(this)
            .addClass("active")
            .removeClass("disable");
        $(this)
            .siblings()
            .removeClass("active")
            .addClass("disable");
        $(".about__tab")
            .css("display", "none")
            .eq($(this).index())
            .css("display", "block");
    });
  });