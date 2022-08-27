//* ============================================ Компонент "Ссылка" ========================================*\\

//? МОДУЛИ:
import PropTypes from 'prop-types'
import classNames from 'classnames'

//? СТИЛИ:
import './linkHref.scss'

export default function Link({ href, className, onClick, disabled, active, children, ...attrs }) {

	const classes = classNames(
		'link',
		className,
		{ active },
	)

	return (
		<a href={href} className={classes} onClick={onClick} disabled={disabled} {...attrs}>
			{children}
		</a>
	)

}

Link.propTypes = {
	href: PropTypes.string,
	className: PropTypes.string,
	onClick: PropTypes.func,
	disabled: PropTypes.bool,
	active: PropTypes.bool,
	children: PropTypes.node,
}

Link.dafaultProps = {
	href: '',
	className: '',
	onClick: () => {},
	disabled: false,
	active: false,
	children: 'ссылка',
}
