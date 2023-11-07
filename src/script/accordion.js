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

//document.addEventListener("DOMContentLoaded", function() {
//	const titleElements = document.querySelectorAll(".questions__title");

//	titleElements.forEach(function(title) {
//	title.addEventListener("click", function(e) {
//		e.preventDefault();
//		if (!title.classList.contains("questions-active")) {
//			const contentElements = document.querySelectorAll(".questions__content");
//			const arrowElements = document.querySelectorAll(".questions__arrow");

//			contentElements.forEach(function(content) {
//			content.style.display = "none";
//			});

//			titleElements.forEach(function(title) {
//			title.classList.remove("questions-active");
//			});

//			arrowElements.forEach(function(arrow) {
//			arrow.classList.remove("questions__rotate");
//			});
//		}

//		title.classList.toggle("questions-active");
//		title.nextElementSibling.style.display = title.classList.contains("questions-active") ? "block" : "none";
//		const arrowElement = title.querySelector(".questions__arrow");
//		if (arrowElement) {
//			arrowElement.classList.toggle("questions__rotate");
//		}
//	});
//	});
//});
