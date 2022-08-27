//* ============================================ Компонент "Поле ввода" ========================================*\\

//? МОДУЛИ:

import PropTypes from 'prop-types'
import classNames from 'classnames'

//? СТИЛИ:
import './input.scss'


export default function Input({ id, className, label, error, requiredMess, children, ...attrs }) {

	const classes = classNames(
		'input',
		className,
		{ error },
	)

	return (

		<div className={`${className}-box`}>
			{label && (
				<label className={`${className}-label`} htmlFor={id}>
					{label}
				</label>
			)}
			<input name={id} id={id} className={classes} {...attrs} />
			{attrs.required && <span className={`${className}-required`}>{requiredMess}</span>}
			{error && <span className={`${className}-error`}>{error}</span>}
			{children}
		</div>
	)
}

Input.propTypes = {
	id: PropTypes.string.isRequired,
	className: PropTypes.string,
	label: PropTypes.string,
	error: PropTypes.string,
	requiredMess: PropTypes.string,
	children: PropTypes.node,
}

Input.dafaultProps = {
	className: '',
	label: '',
	error: '',
	requiredMess: '',
	children: null,
}
