//* ============================================ Компонент "Навигационное меню" ========================================*\\

//? МОДУЛИ:
import PropTypes from 'prop-types'
import classNames from 'classnames'

//? СТИЛИ:
import './navMenu.scss'

export default function NavMenu({ className, active, children, ...attrs }) {

	const classes = classNames(
		'nav',
		className,
		{ active },
	)

	return (
		<nav className={classes} {...attrs}>
			{children}
		</nav>
	)
	
}

NavMenu.propTypes = {
	className: PropTypes.string,
	active: PropTypes.bool,
	children: PropTypes.node,
}

NavMenu.dafaultProps = {
	className: '',
	active: false,
	children: null,
}
