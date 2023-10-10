document.addEventListener("DOMContentLoaded", function () {
	const prevButton = document.querySelector(".slider__btn-prev");
	const nextButton = document.querySelector(".slider__btn-next");
	const slider = document.querySelector(".slider__slider");
	const images = document.querySelectorAll(".slider__img");
	let currentIndex = 0;

	// Функция для отображения текущего слайда
	function showSlide(index) {
		images.forEach((img, i) => {
			if (i === index) {
				img.style.display = "block";
			} else {
				img.style.display = "none";
			}
		});
	}

	// Показать первый слайд при загрузке страницы
	showSlide(currentIndex);

	// Обработчик для кнопки "Next"
	nextButton.addEventListener("click", function () {
		currentIndex = (currentIndex + 1) % images.length;
		showSlide(currentIndex);
	});

	// Обработчик для кнопки "Prev"
	prevButton.addEventListener("click", function () {
		currentIndex = (currentIndex - 1 + images.length) % images.length;
		showSlide(currentIndex);
	});
});


const openButton = document.getElementById("contact");
const modal = document.getElementById("modal");
const closeButton = document.getElementById("btn-close");

function openModal() {
	modal.showModal();
}

function closeModal() {
	modal.close();
}

openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);