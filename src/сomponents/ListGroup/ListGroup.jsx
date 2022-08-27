//* ============================================ Компонент "Группировка списка" ========================================*\\

//? МОДУЛИ:
import PropTypes from 'prop-types'
import classNames from 'classnames'

//? СТИЛИ:
import './listGroup.scss'

export default function ListGroup({ tag: Tag, className, children, ...attrs }) {

	const classes = classNames(
		'list-group',
		className,
	)

	return (
		<Tag className={classes} {...attrs}>
			{children}
		</Tag>
	)

}

ListGroup.propTypes = {
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	className: PropTypes.string,
	children: PropTypes.node,
}

ListGroup.dafaultProps = {
	tag: 'ul',
	className: '',
	children: null,
}
