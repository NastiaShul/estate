function scrollDown(btnScroll, contentSelector) {
	const btnScrollDown = document.querySelector(btnScroll),
		content = document.querySelector(contentSelector);

	btnScrollDown.addEventListener("click", () => {
		content.scrollIntoView({ behavior: "smooth" });
	});

}

export default scrollDown;