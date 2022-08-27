//* ============================================ Компонент "Футер" ========================================*\\

//? МОДУЛИ:
import PropTypes from 'prop-types'
import classNames from 'classnames'

//? СТИЛИ:
import './footer.scss'

export default function Footer({ className, children, ...attrs }) {

	const classes = classNames(
		'footer',
		className,
	)

	return (
		<footer className={classes} {...attrs}>
			{children}
		</footer>
	)

}

Footer.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
}

Footer.dafaultProps = {
	className: '',
	children: null,
}