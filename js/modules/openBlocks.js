function openBlocks(triggerSelector) {
	const trigger = document.querySelectorAll(triggerSelector);

	trigger.forEach(item => {
		item.addEventListener("click", () => {
			const parent = item.parentNode;

			parent.classList.toggle("menu-footer--active");
		})
	});
}

export default openBlocks;