//* ================================= Компонент "Изображение WebP" ========================================*\\

//? МОДУЛИ:
import PropTypes from 'prop-types'
import classNames from 'classnames'

//? СТИЛИ:
import './ImgWebP.scss'

export default function ImgWebP({ className, src, srcWebP, type, alt, width, height, circle, ...attrs }) {

	if (!src) {
		src = `https://via.placeholder.com/${width}x${height}`
	}

	const classes = classNames(
		className,
		{ circle },
	)

	return (
		<picture>
			<source srcSet={srcWebP} type={type} />
			<img className={classes} src={src} alt={alt} width={width} height={height} {...attrs} />
		</picture>
	)
}

ImgWebP.propTypes = {
	className: PropTypes.string,
	src: PropTypes.string,
	srcWebP: PropTypes.string,
	type: PropTypes.string,
	alt: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number,
	circle: PropTypes.bool,
}

ImgWebP.dafaultProps = {
	className: '',
	src: '',
	srcWebP: '',
	type: 'image/webp',
	alt: 'image name',
	width: 100,
	height: 100,
	circle: false,
}

