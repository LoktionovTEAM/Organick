//* ============================================ Компонент "Иконка SVG" ========================================*\\

//? МОДУЛИ:
import PropTypes from 'prop-types'
import classNames from 'classnames'

//? СТИЛИ:
import './iconSVG.scss'

//? РЕСУРСЫ:
import iconsSVG from './iconsSVG.svg';

export default function IconSVG({
	idsymbol,
	className,
	fill,
	stroke,
	size,
	onClick,
	name,
	disabled,
	...attrs
}) {

	const classes = classNames(
		'icon',
		className,
		{ func: onClick },
		{ disabled },
	)

	return (
		<svg
			className={classes}
			idsymbol={idsymbol}
			fill={fill}
			stroke={stroke}
			width={size}
			height={size}
			onClick={disabled ? null : onClick}
			aria-labelledby={`icon-${name}`}
			name={name}
			{...attrs}>
			<title id={`icon-${name}`}>{name}</title>
			<use xlinkHref={`${iconsSVG}#${idsymbol}`} />
		</svg>
	)
}

IconSVG.propTypes = {
	idsymbol: PropTypes.string,
	size: PropTypes.number,
	className: PropTypes.string,
	onClick: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
	disabled: PropTypes.bool,
	name: PropTypes.string,
	fill: PropTypes.string,
	stroke: PropTypes.string,
}

IconSVG.dafaultProps = {
	idsymbol: '',
	size: null,
	className: '',
	onClick: null,
	disabled: false,
	name: '',
	fill: '#00000',
	stroke: '',
}
