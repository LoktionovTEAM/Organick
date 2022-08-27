//* ============================================ Компонент "Страница" ========================================*\\

//? МОДУЛИ:
import PropTypes from 'prop-types'
import classNames from 'classnames'

//? СТИЛИ:
import './page.scss'

export default function Page({ tag: Tag, className, children, ...attrs }) {

	const classes = classNames(
		'page',
		className,
	)

	return (
		<Tag className={classes} {...attrs}>
			{children}
		</Tag>
	)
	
}

Page.propTypes = {
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	className: PropTypes.string,
	children: PropTypes.node,
}

Page.dafaultProps = {
	tag: 'div',
	className: '',
	children: null,
}
