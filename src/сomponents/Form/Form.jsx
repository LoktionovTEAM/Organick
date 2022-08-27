//* ============================================ Компонент "Форма" ========================================*\\

//? МОДУЛИ:
import PropTypes from 'prop-types'
import classNames from 'classnames'

//? СТИЛИ:
import './form.scss'

export default function Form({ className, children, ...attrs }) {

	const classes = classNames(
		'form',
		className,
	)

	return (
		<form className={classes} {...attrs}>
			{children}
		</form>
	)
	
}

Form.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
}

Form.dafaultProps = {
	className: '',
	children: null,
}