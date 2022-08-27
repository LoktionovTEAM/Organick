//* ============================================ Компонент "Логотип" ========================================*\\

//? МОДУЛИ:

import PropTypes from 'prop-types'
import classNames from 'classnames'

//? СТИЛИ:
import './logo.scss'

export default function Logo({ className, children, ...attrs }) {

	const classes = classNames(
		'logo',
		className,
	)

	return <div className={classes} {...attrs}>{children}</div>
	
}

Logo.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
}

Logo.dafaultProps = {
	className: '',
	children: null,
}
