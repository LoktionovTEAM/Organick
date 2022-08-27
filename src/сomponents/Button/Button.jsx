//* ============================================ Компонент "Кнопка" ========================================*\\

//? МОДУЛИ:
import PropTypes from 'prop-types'
import classNames from 'classnames'

//? СТИЛИ:
import './button.scss'

export default function Button({ className, onClick, disabled, active, children, ...attrs }) {

	const classes = classNames(
		'btn',
		className,
		{ active },
	)

	return (
		<button className={classes} onClick={onClick} disabled={disabled} {...attrs}>
			{children}
		</button>
	)

}

Button.propTypes = {
	className: PropTypes.string,
	onClick: PropTypes.func,
	disabled: PropTypes.bool,
	active: PropTypes.bool,
	children: PropTypes.node,
}

Button.dafaultProps = {
	className: '',
	onClick: () => {},
	disabled: false,
	active: false,
	children: 'Default button',
}
