//* ============================================ Компонент "Карточка" ========================================*\\

//? МОДУЛИ:
import PropTypes from 'prop-types'
import classNames from 'classnames'

//? СТИЛИ:
import './Card.scss'

export default function Card({ className, children, ...attrs }) {

	const classes = classNames(
		'card',
		className,
	)

	return (
		<div className={classes} {...attrs}>
			{children}
		</div>
	)
};

Card.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
}

Card.dafaultProps = {
	className: '',
	children: null,
}
