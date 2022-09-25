import tabs from "./modules/tabs";
import modal from "./modules/modal";
import form from "./modules/form";
import openBlocks from "./modules/openBlocks";
import scrollDown from "./modules/scrollDown";
import slideContent from "./modules/slideContent";
import slideCards from "./modules/slideCards";
import { openModal } from "./modules/modal";

window.addEventListener("DOMContentLoaded", () => {
	const modalTimerId = setTimeout(() => openModal(".modal", modalTimerId), 50000);

	const scrollUp = document.querySelector(".scroll-top");
	window.addEventListener("scroll", () => {
		if (window.scrollY > 300) {
			scrollUp.style.opacity = "0.7";
		} else if (window.scrollY < 300) {
			scrollUp.style.opacity = "";
		}
	})
	scrollUp.addEventListener("click", () => {
		window.scrollTo(0, 0);
	});



	tabs(".cards-req__item", ".body-requirements__img", ".cards-req", "active-requirements");
	modal("[data-modal]", ".modal", "[data-close]", ".modal__body", modalTimerId);
	form("form");
	openBlocks(".main-footer__label");
	scrollDown("[data-scroll]", ".listings__container");
	slideContent({
		slide: ".listings__card",
		nextArrow: "[data-next-list]",
		prevArrow: "[data-prev-list]",
		wrapper: ".listings__wrapper",
		field: ".listings__inner",
	});
	slideContent({
		slide: ".news-card",
		nextArrow: "[data-next-news]",
		prevArrow: "[data-prev-news]",
		wrapper: ".news-room__wrapper",
		field: ".news-room__inner",
	});
	slideCards(".card-testimonials__body", ".next-arrow", ".prev-arrow");


});