//* ============================================ Компонент "Авторские права" ========================================*\\

//? МОДУЛИ:
import PropTypes from 'prop-types'
import classNames from 'classnames'

//? СТИЛИ:
import './copyright.scss'

export default function Copyright({className, children, ...attrs}) {

	const classes = classNames(
		'copyright',
		className,
	)

	return (
		<div className={classes} {...attrs}>
			{children}
		</div>
	)
}

Copyright.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
}

Copyright.dafaultProps = {
	className: '',
	children: null,
}
