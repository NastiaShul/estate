import { openModal, closeModal } from "./modal";
import { postData } from "../services/services";

function form(formSelector) {

	const form = document.querySelector(formSelector);

	const message = {
		loading: "Loading...",
		success: "Thank you! We will call you soon",
		failure: "Something went wrong...",
	};

	bindPostData(form);

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

			postData("http://localhost:3000/requests", json)
				.then(data => {
					console.log(data);
					statusMessage.textContent = message.success;
					setTimeout(() => {
						statusMessage.remove();
						closeModal(".modal");
					}, 4000);
				})
				.catch(() => {
					statusMessage.textContent = message.failure;
					setTimeout(() => {
						statusMessage.remove();
						closeModal(".modal");
					}, 5000);
				})
				.finally(() => {
					form.reset();
				})

		});
	}
}

export default form;