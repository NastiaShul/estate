/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/form.js":
/*!****************************!*\
  !*** ./js/modules/form.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");



function form(formSelector) {

	const form = document.querySelectorAll(formSelector);

	const message = {
		loading: "Loading...",
		success: "Thank you! We will call you soon",
		failure: "Something went wrong...",
	};

	form.forEach(item => {
		bindPostData(item);
	})

	function bindPostData(form) {
		form.addEventListener("submit", (e) => {
			e.preventDefault();

			const statusMessage = document.createElement("div");
			statusMessage.style.cssText = `
			justify-content: center;
			text-align: center;
			margin: 15px 0 0 0;
			color: #FF8A63;
			text-transform: uppercase;
			`;
			statusMessage.textContent = message.loading;
			form.insertAdjacentElement("afterend", statusMessage);


			const formData = new FormData(form);

			const json = JSON.stringify(Object.fromEntries(formData.entries()));

			(0,_services_services__WEBPACK_IMPORTED_MODULE_1__.postData)("http://localhost:3000/requests", json)
				.then(data => {
					console.log(data);
					statusMessage.textContent = message.success;
					setTimeout(() => {
						statusMessage.remove();
						(0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)(".modal");
					}, 4000);
				})
				.catch(() => {
					statusMessage.textContent = message.failure;
					setTimeout(() => {
						statusMessage.remove();
						(0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)(".modal");
					}, 5000);
				})
				.finally(() => {
					form.reset();
				})

		});
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "openModal": () => (/* binding */ openModal)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);



/***/ }),

/***/ "./js/modules/openBlocks.js":
/*!**********************************!*\
  !*** ./js/modules/openBlocks.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function openBlocks(triggerSelector) {
	const trigger = document.querySelectorAll(triggerSelector);

	trigger.forEach(item => {
		item.addEventListener("click", () => {
			const parent = item.parentNode;

			parent.classList.toggle("menu-footer--active");
		})
	});
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (openBlocks);

/***/ }),

/***/ "./js/modules/scrollDown.js":
/*!**********************************!*\
  !*** ./js/modules/scrollDown.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function scrollDown(btnScroll, contentSelector) {
	const btnScrollDown = document.querySelector(btnScroll),
		content = document.querySelector(contentSelector);

	btnScrollDown.addEventListener("click", () => {
		content.scrollIntoView({ behavior: "smooth" });
	});

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollDown);

/***/ }),

/***/ "./js/modules/slideCards.js":
/*!**********************************!*\
  !*** ./js/modules/slideCards.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slideCards);

/***/ }),

/***/ "./js/modules/slideContent.js":
/*!************************************!*\
  !*** ./js/modules/slideContent.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slideContent);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {

	const tabs = document.querySelectorAll(tabsSelector),
		tabsContent = document.querySelectorAll(tabsContentSelector),
		tabsParent = document.querySelector(tabsParentSelector);

	function hideTabContent() {
		tabsContent.forEach(item => {
			item.style.display = "none";
		});
		tabs.forEach(item => {
			item.classList.remove(activeClass);
		});
	}

	function showTabContent(i = 0) {
		tabsContent[i].style.display = "block";
		tabs[i].classList.add(activeClass);
	}

	hideTabContent();
	showTabContent();

	tabsParent.addEventListener("click", event => {
		let target = event.target;
		console.log('target', target);

		if (target) {
			tabs.forEach((item, i) => {
				if (item == target || item == target.parentElement) {
					hideTabContent();
					showTabContent(i);
				}
			})
		}
	});
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postData": () => (/* binding */ postData)
/* harmony export */ });

const postData = async (url, data) => {
	const res = await fetch(url, {
		method: "POST",
		headers: {
			"Content-type": "application/json"
		},
		body: data,
	});

	return await res.json();
};



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/form */ "./js/modules/form.js");
/* harmony import */ var _modules_openBlocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/openBlocks */ "./js/modules/openBlocks.js");
/* harmony import */ var _modules_scrollDown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/scrollDown */ "./js/modules/scrollDown.js");
/* harmony import */ var _modules_slideContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slideContent */ "./js/modules/slideContent.js");
/* harmony import */ var _modules_slideCards__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slideCards */ "./js/modules/slideCards.js");









window.addEventListener("DOMContentLoaded", () => {
	const modalTimerId = setTimeout(() => (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__.openModal)(".modal", modalTimerId), 50000);

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



	(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])(".cards-req__item", ".body-requirements__img", ".cards-req", "active-requirements");
	(0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"])("[data-modal]", ".modal", "[data-close]", ".modal__body", modalTimerId);
	(0,_modules_form__WEBPACK_IMPORTED_MODULE_2__["default"])("form");
	(0,_modules_openBlocks__WEBPACK_IMPORTED_MODULE_3__["default"])(".main-footer__label");
	(0,_modules_scrollDown__WEBPACK_IMPORTED_MODULE_4__["default"])("[data-scroll]", ".listings__container");
	(0,_modules_slideContent__WEBPACK_IMPORTED_MODULE_5__["default"])({
		slide: ".listings__card",
		nextArrow: "[data-next-list]",
		prevArrow: "[data-prev-list]",
		wrapper: ".listings__wrapper",
		field: ".listings__inner",
	});
	(0,_modules_slideContent__WEBPACK_IMPORTED_MODULE_5__["default"])({
		slide: ".news-card",
		nextArrow: "[data-next-news]",
		prevArrow: "[data-prev-news]",
		wrapper: ".news-room__wrapper",
		field: ".news-room__inner",
	});
	(0,_modules_slideCards__WEBPACK_IMPORTED_MODULE_6__["default"])(".card-testimonials__body", ".next-arrow", ".prev-arrow");


});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map