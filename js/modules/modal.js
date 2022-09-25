function openModal(modalSelector, modalTimerId) {
	modal = document.querySelector(modalSelector);

	modal.style.display = "block";
	document.body.style.overflow = "hidden";

	console.log(modalTimerId);
	if (modalTimerId) {
		clearInterval(modalTimerId);
	}
}

function closeModal(modalSelector) {
	modal = document.querySelector(modalSelector);

	modal.style.display = "";
	document.body.style.overflow = "";
}

function modal(triggerSelector, modalSelector, closeBtn, modalBodySelector, modalTimerId) {
	const modalTrigger = document.querySelectorAll(triggerSelector),
		modal = document.querySelector(modalSelector),
		modalCloseBtn = document.querySelector(closeBtn),
		modalBody = document.querySelector(modalBodySelector);

	modalTrigger.forEach(item => {
		item.addEventListener("click", () => openModal(modalSelector, modalTimerId));
	});

	modalCloseBtn.addEventListener("click", () => closeModal(modalSelector));

	modal.addEventListener("click", (e) => {
		if (e.target == modalBody) {
			closeModal(modalSelector);
		}
	});

	document.addEventListener("keydown", (e) => {
		if (e.code === "Escape" && modal.style.display == "block") {
			closeModal(modalSelector);
		}
	});

	function showModalByScroll() {
		if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
			openModal(modalSelector, modalTimerId);
			window.removeEventListener("scroll", showModalByScroll);
		}
	}

	window.addEventListener("scroll", showModalByScroll);
}

export default modal;
export { openModal };
export { closeModal };