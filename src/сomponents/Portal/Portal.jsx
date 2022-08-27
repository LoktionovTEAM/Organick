//* ============================================ Компонент "Портал" ========================================*\\

//? МОДУЛИ:
import { useEffect, useMemo } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'


export const Portal = ({ children }) => {

	const modalRootElement = useMemo(() => document.createElement('div'), [])

	modalRootElement.id = 'modal-root'

	useEffect(() => {
		document.body.appendChild(modalRootElement)
		return () => {
			document.body.removeChild(modalRootElement)
		}
	})

	return createPortal(children, modalRootElement)
}

Portal.propTypes = {
	children: PropTypes.node,
}

Portal.dafaultProps = {
	children: null,
}
