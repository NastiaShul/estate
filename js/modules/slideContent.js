function slideContent({ slide, nextArrow, prevArrow, wrapper, field }) {
	const slides = document.querySelectorAll(slide),
		next = document.querySelector(nextArrow),
		prev = document.querySelector(prevArrow),
		slidesWrapper = document.querySelector(wrapper),
		slidesField = document.querySelector(field),
		width = window.getComputedStyle(slidesWrapper).width;

	let offset = 0;

	prev.style.display = "none";

	slidesField.style.width = 100 * slides.length + "%";
	slides.forEach(slide => {
		slide.style.width = width;
	});

	function deleteNotDigits(str) {
		return +str.replace(/\D/g, "");
	}

	next.addEventListener("click", () => {

		if (offset == deleteNotDigits(width) * (slides.length - 1)) {
			prev.style.display = "none";
			offset = 0;
		} else {
			prev.style.display = "";
			offset += deleteNotDigits(width);
		}

		slidesField.style.transform = `translateX(-${offset}px)`;
	});

	prev.addEventListener("click", () => {

		if (offset != 0) {
			offset -= deleteNotDigits(width);
		} else {
			prev.style.display = "none";
		}

		slidesField.style.transform = `translateX(-${offset}px)`;
	});
}

export default slideContent;