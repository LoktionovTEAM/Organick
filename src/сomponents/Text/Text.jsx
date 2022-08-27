//* ============================================ Компонент "Текст" ========================================*\\

//? МОДУЛИ:
import PropTypes from 'prop-types'
import classNames from 'classnames'

//? СТИЛИ:
import './text.scss'

export default function Text({ tag: Tag, className, children, ...attrs }) {

	const classes = classNames(
		'text',
		className,
	)

	return (
		<Tag className={classes} {...attrs}>
			{children}
		</Tag>
	)

}

Text.propTypes = {
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	className: PropTypes.string,
	children: PropTypes.node,
}

Text.dafaultProps = {
	tag: 'p',
	className: '',
	children: null,
}
