//* ============================================ Компонент "Бургер меню" ========================================*\\

//? МОДУЛИ:
import PropTypes from 'prop-types'
import classNames from 'classnames'

//? СТИЛИ:
import './burgerMenu.scss'


export default function BurgerMenu({ className, onClick, active, disabled, children, ...attrs }) {

	const classes = classNames(
		'burger-menu',
		className,
		{ active },
		{ disabled },
	)

	return (
		<div className={classes} onClick={disabled ? null : onClick} {...attrs}>
			{children}
		</div>
	)

}

BurgerMenu.propTypes = {
	className: PropTypes.string,
	onClick: PropTypes.func,
	active: PropTypes.bool,
	disabled: PropTypes.bool,
	children: PropTypes.node,
}

BurgerMenu.dafaultProps = {
	className: '',
	onClick: () => {},
	active: false,
	disabled: false,
	children: null,
}
