function slideCards(slideCardsSelector, nextArrow, prevArrow) {

	const slideTesti = document.querySelectorAll(slideCardsSelector),
		nextTesti = document.querySelector(nextArrow),
		prevTesti = document.querySelector(prevArrow);

	let slideIndex = 1;

	showSlides(slideIndex);

	function showSlides(n) {
		if (n > slideTesti.length) {
			slideIndex = 1;
		}

		if (n < 1) {
			slideIndex = slideTesti.length;
		}

		slideTesti.forEach(item => {
			item.style.display = "none"
		});

		slideTesti[slideIndex - 1].style.display = "";
	}

	function plusSlides(n) {
		showSlides(slideIndex += n);
	}

	nextTesti.addEventListener("click", () => {
		plusSlides(+1);
	});

	prevTesti.addEventListener("click", () => {
		plusSlides(-1);
	});
}

export default slideCards;