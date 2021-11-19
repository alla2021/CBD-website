$(function() {
	$(".questions__title").on("click", function(e) {
		e.preventDefault();
		let $this = $(this);
		if (!$this.hasClass("questions-active")) {
			$(".questions__content").slideUp(400);
			$(".questions__title").removeClass("questions-active");
			$(".questions__arrow").removeClass("questions__rotate");
		}
		$this.toggleClass("questions-active");
		$this.next().slideToggle();
		$(".questions__arrow",this).toggleClass("questions__rotate");
	});
});