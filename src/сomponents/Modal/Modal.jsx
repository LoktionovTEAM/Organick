//* ============================================ Компонент "Модальное окно" ========================================*\\

//? МОДУЛИ:
import PropTypes from 'prop-types'
import classNames from 'classnames'

//? КОМПОНЕНТЫ:
import IconSVG from '../IconSVG'
import Box from '../Box'
import { Portal } from '../Portal/Portal'

//? СТИЛИ:
import './modal.scss'

const Modal = ({ className, isOpen, onClose, children }) => {

	const classes = classNames(
		'modal',
		className,
		{ isOpen },
	)

	const classes1 = classNames(
		'modal__content',
		`${className}__content`,
		{ isOpen },
	)

	const classes2 = classNames(
		'modal__icon-close',
		`${className}__icon-close`,
	)

	isOpen ? document.body.classList.add('lock') : document.body.classList.remove('lock')

	return (
		<>
			{isOpen && (
				<Portal>
					<Box tag='div' className={classes} onClick={onClose}>
						<Box
							tag='div'
							className={classes1}
							onClick={(e) => e.stopPropagation()}
							>
							<IconSVG
								className={classes2}
								name='close'
								idsymbol='delete'
								onClick={onClose}
							/>
							{children}
						</Box>
					</Box>
				</Portal>
			)}
		</>
	)
}

Modal.propTypes = {
	className: PropTypes.string.isRequired,
	isOpen: PropTypes.bool,
	onClose: PropTypes.func,
	children: PropTypes.node,
}

Modal.dafaultProps = {
	className: '',
	isOpen: false,
	onClose: () => {},
	children: null,
}

export default Modal
