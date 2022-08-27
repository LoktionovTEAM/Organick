//* ============================================ Компонент "Обвертка" ========================================*\\

//? МОДУЛИ:
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

//? СТИЛИ:
import './box.scss'

export default function Box({ tag: Tag, className, children, ...attrs }) {

	const classes = classNames(
		'box',
		className,
	)

	return (
		<Tag className={classes} {...attrs}>
			{children}
		</Tag>
	)

}

Box.propTypes = {
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	className: PropTypes.string,
	children: PropTypes.node,
}

Box.dafaultProps = {
	children: null,
	className: '',
	tag: 'div',
}
