//* ============================================ Компонент "Пункты списка" ========================================*\\

//? МОДУЛИ:

import PropTypes from 'prop-types'
import classNames from 'classnames'

//? СТИЛИ:
import './listGroupItem.scss'

export default function ListGroupItem({ tag: Tag, className, disabled, active, children, ...attrs }) {
	if (attrs.href && Tag === 'li') {
		Tag = 'a'
	}

	const classes = classNames('list-group-item', className, { active }, { disabled })

	return (
		<Tag className={classes} {...attrs}>
			{children}
		</Tag>
	)
}

ListGroupItem.propTypes = {
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	className: PropTypes.string,
	disabled: PropTypes.bool,
	active: PropTypes.bool,
	children: PropTypes.node,
}

ListGroupItem.dafaultProps = {
	tag: 'li',
	className: '',
	disabled: false,
	active: false,
	children: null,
}
