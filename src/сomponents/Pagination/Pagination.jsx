//* ============================================ Компонент "Пагинация" ========================================*\\

//? МОДУЛИ:
import PropTypes from 'prop-types'
import classNames from 'classnames'

//? КОМПОНЕНТЫ:
import ListGroup from '../ListGroup'
import ListGroupItem from '../ListGroupItem'
import Button from '../../сomponents/Button'

//? СТИЛИ:
import './pagination.scss'

export default function Pagination({ tag: Tag, className, productsPerPage, totalProducts, paginate, currentPage, setCurrentPage, ...attrs }) {

	const classes = classNames(
		'pagination',
		className,
	)

	const pageNumbers = []
	for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
		pageNumbers.push(i)
	}

	const nextPage = () => {

		if (currentPage < Math.ceil(totalProducts / productsPerPage)) {
			setCurrentPage((prev) => prev + 1)
		}
	}

	const prevPage = () => {

		if (currentPage > 1) {
			setCurrentPage((prev) => prev - 1)
		}
	}

	return (
		<Tag className={classes} {...attrs}>
			<Button
				className='product-cards-pagination__btn-prev'
				onClick={prevPage}
				children='&#10094;'
			/>
			<ListGroup
				tag='ul'
				className='product-cards-pagination__list'
				children={pageNumbers.map((item, index) => (
					<ListGroupItem
						tag='li'
						className='product-cards-pagination__item'
						key={item + index}
						children={
							<Button
								className={`product-cards-pagination__btn ${currentPage === item && 'active'}`}
								onClick={() => paginate(item)}
								children={item}
							/>
						}
					/>
				))}
			/>
			<Button
				className='product-cards-pagination__btn-next'
				onClick={nextPage}
				children='&#10095;'
			/>
		</Tag>
	)
}

Pagination.propTypes = {
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	className: PropTypes.string,
}

Pagination.dafaultProps = {
	tag: 'div',
	className: '',
}
