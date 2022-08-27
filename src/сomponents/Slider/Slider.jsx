//* ============================================ Компонент "Слайдер-Swiper" ========================================*\\

//? МОДУЛИ:
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Swiper, SwiperSlide } from 'swiper/react'

//? СТИЛИ:
import './slider.scss'

export default function Slider({ configSlider, className, slides, ...attrs }) {

	const classes = classNames(
		'slider',
		className,
	)


	return (
		<Swiper
			{...configSlider}
			className={classes}
			slides={slides}
			{...attrs}>
			{slides.map((slideContent, index) => (
				<SwiperSlide className={`${className}-slide`} key={`slides slideContent ${index}`} virtualIndex={index}>
					{slideContent}
				</SwiperSlide>
			))}
		</Swiper>
	)

}

Slider.propTypes = {
	configSlider: PropTypes.object.isRequired,
	className: PropTypes.string.isRequired,
	slides: PropTypes.array,
}

Slider.dafaultProps = {
	configSlider: {},
	className: '',
	slides: [],
}
