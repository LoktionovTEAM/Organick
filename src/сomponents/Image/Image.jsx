//* ============================================ Компонент "Изображение" ========================================*\\

//? МОДУЛИ:
import PropTypes from 'prop-types'
import classNames from 'classnames'

//? СТИЛИ:
import './image.scss'

export default function Image({src, alt, className, width, height, circle, ...attrs}) {

	if (!src) {
		src = `https://via.placeholder.com/${width}x${height}`
	}

	const classes = classNames(
		className,
		{ circle },
	)

	return <img src={src} alt={alt} className={classes} width={width} height={height} {...attrs} />

}

Image.propTypes = {
	src: PropTypes.string,
	alt: PropTypes.string,
	className: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number,
	circle: PropTypes.bool,
}

Image.dafaultProps = {
	src: '',
	alt: 'image name',
	className: '',
	width: 100,
	height: 100,
	circle: false,
};
