//scroll
$(document).ready(function () {
	$("#scroll, #scroll-btn, #scroll-link, #header__nav").on("click", "a", function (event) {
					event.preventDefault();
					let id = $(this).attr('href'),
							top = $(id).offset().top;
					$('body,html').animate({
									scrollTop: top
							}
							, 1000);
			}
	);
});