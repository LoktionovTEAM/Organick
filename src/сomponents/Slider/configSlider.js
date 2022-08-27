//* ============================================ Параметры слайдера "Swiper" ========================================*\\

//? МОДУЛИ
import { Keyboard, Navigation } from 'swiper'

//? СТИЛИ
import 'swiper/scss'

export const configSlider = {
	modules: [
		Keyboard,
		Navigation,
	],
	spaceBetween: 30,
	centeredSlides: true,
	slidesPerView: 1,
	loop: true,
	speed: 300,
	autoHeight: false,
	navigation: {
		nextEl: '.news-btn',
	},
	simulateTouch: false,
	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		480: {
			slidesPerView: 1,
		},
		640: {
			slidesPerView: 1,
		},
	},
}
