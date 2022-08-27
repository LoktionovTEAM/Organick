//* ============================================ Компонент "Обвертка" ========================================*\\

//? МОДУЛИ:

import PropTypes from 'prop-types'
import classNames from 'classnames'

//? СТИЛИ:
import './wrap.scss'

export default function Wrap({ tag: Tag, className, children, ...attrs }) {

	const classes = classNames(
		'wrap',
		className,
	)

	return (
		<Tag className={classes} {...attrs}>
			{children}
		</Tag>
	)

}

Wrap.propTypes = {
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	className: PropTypes.string,
	children: PropTypes.node,
}

Wrap.dafaultProps = {
	tag: 'div',
	className: '',
	children: null,
}
