//* ============================================ Компонент "Социальные ссылки" ========================================*\\

//? МОДУЛИ:
import PropTypes from 'prop-types'
import classNames from 'classnames'

//? СТИЛИ:
import './social.scss'

export default function Social({ children, className, ...attrs }) {

	const classes = classNames(
		'social',
		className,
	)
	return <div className={classes} {...attrs}>{children}</div>
}

Social.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
}

Social.dafaultProps = {
	className: '',
	children: null,
}