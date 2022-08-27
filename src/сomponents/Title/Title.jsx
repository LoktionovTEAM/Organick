//* ============================================ Компонент "Заголовок" ========================================*\\

//? МОДУЛИ:
import PropTypes from 'prop-types'
import classNames from 'classnames'

//? СТИЛИ:
import './title.scss'

export default function Title({ tag: Tag, className, children, ...attrs }) {

	const classes = classNames(
		'title',
		className,
	)

	return (
		<Tag className={classes} {...attrs}>
			{children}
		</Tag>
	)

}

Title.propTypes = {
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	className: PropTypes.string,
	children: PropTypes.node,
}

Title.dafaultProps = {
	tag: 'h1',
	className: '',
	children: null,
}
