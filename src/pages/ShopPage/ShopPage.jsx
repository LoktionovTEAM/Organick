//* ==================================== Компонент страница "Магазин" ========================================*\\

//? МОДУЛИ:
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import ContentLoader from 'react-content-loader'
import { IMaskInput } from 'react-imask'

//? КОМПОНЕНТЫ:
import Page from '../../сomponents/Page'
import Wrap from '../../сomponents/Wrap'
import Box from '../../сomponents/Box'
import Header from '../../сomponents/Header'
import Title from '../../сomponents/Title'
import Text from '../../сomponents/Text'
import ImgWebP from '../../сomponents/ImgWebP'
import IconSVG from '../../сomponents/IconSVG'
import Form from '../../сomponents/Form'
import ListGroup from '../../сomponents/ListGroup'
import ListGroupItem from '../../сomponents/ListGroupItem'
import Card from '../../сomponents/Card'
import Button from '../../сomponents/Button'
import Pagination from '../../сomponents/Pagination'

//? ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ:
import { searhProductMask } from '../../pages/AuthorizationPage/maskForms' //? маска формы поиска по продукции

//? РЕДЮСЕРЫ:
import {
	fetchProducts,
	setSearchValue,
	clearSearchValue,
	autocompleteSearch,
	searchProductName,
} from '../../store/reducers/productsSlice'
import {
	setItemInCart
} from '../../store/reducers/cartSlice'

//? СТИЛИ:
import '../ShopPage/ShopPage.scss'

export default function ShopPage() {

	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchProducts())
	}, [dispatch])

	const products = useSelector((state) => state.products.products)
	const {
		productsLoading,
		productsError,
		productsSearchValue,
	} = useSelector((state) => state.products)
	const filterNameProducts = useSelector((state) => state.products.filterNameProducts)
	const [isOpenSearchAutocomplete, setIsOpenSearchAutocomplete] = useState(false)

	const [currentPage, setCurrentPage] = useState(1)
	const [productsPerPage] = useState(3)
	const paginate = (pageNumber) => setCurrentPage(pageNumber)
	const lastProductIndex = currentPage * productsPerPage
	const firstProductIndex = lastProductIndex - productsPerPage
	const currentProducts = filterNameProducts.slice(firstProductIndex, lastProductIndex)

	const onChangeHandlerInputSearch = (e) => {
		setCurrentPage(1)
		dispatch(setSearchValue(e.target.value))
		dispatch(searchProductName())
	}

	const clickHandlerInputSearch = () => {
		setIsOpenSearchAutocomplete(true)
	}

	const clickHandlerItemAutocompleteSearch = (e) => {
		dispatch(autocompleteSearch(e.target.textContent))
		dispatch(searchProductName())
		setIsOpenSearchAutocomplete(false)
	}

	return (
		<Page tag='div' className='shop'>
			<Header className='shop-header' />
			<Wrap tag='div' className='shop-wrap'>
					<Text tag='p' className='overtitle shop__overtitle'>
						Shop
					</Text>
					<Title tag='h2' className='shop__title'>
						Our Products
					</Title>
					{productsError && (
						<Text
							tag='p'
							className='message-error-loading shop__message-error-loading'>{`Unfortunately, something went wrong while downloading data from the server! ${productsError}`}</Text>
					)}
					<Form className='form-search'>
						<IconSVG className='form-search__icon-search' name='Search' idsymbol='search' />
						<IMaskInput
							className='form-search__input'
							name='search'
							type='text'
							value={productsSearchValue}
							mask={searhProductMask}
							maxLength={100}
							placeholder='Search in the product...'
							onChange={onChangeHandlerInputSearch}
							onClick={clickHandlerInputSearch}
							autoComplete='off'
						/>
						{productsSearchValue && (
							<IconSVG
								className='form-search__icon-clear'
								name='Сlear'
								idsymbol='waste-can'
								onClick={() => dispatch(clearSearchValue())}
							/>
						)}
						<ListGroup tag='ul' className='form-search__autocomplete autocomplete-form-search'>
							{
								productsSearchValue && isOpenSearchAutocomplete
									? filterNameProducts.map((product) => (
											<ListGroupItem
												tag='li'
												className='autocomplete-form-search__item'
												onClick={clickHandlerItemAutocompleteSearch}
												key={product.id}>
												{product.name}
											</ListGroupItem>
									  ))
									:
									  null
							}
						</ListGroup>
					</Form>
					<Card className='shop__product-cards'>
						<ListGroup tag='ul' className='products-cards'>
							{(productsLoading === 'loading' ? [...Array(3)] : currentProducts).map(
								(product, index) => (
									<ListGroupItem
										tag='li'
										className='products-cards__item'
										key={index}
									>
										{
											productsLoading === 'loading' ? (
												<CSSTransition
													classNames='products-cards-anim'
													in={productsLoading === 'loading'}
													timeout={700}
													unmountOnExit>
													<ContentLoader
														speed={2}
														width={271}
														height={340}
														viewBox='0 0 271 340'
														backgroundColor='#ffffff'
														foregroundColor='#E0E0E0'>
														<circle cx='573' cy='437' r='15' />
														<rect x='0' y='15' rx='7' ry='7' width='113' height='32' />
														<rect x='548' y='430' rx='2' ry='2' width='140' height='10' />
														<circle cx='579' cy='430' r='4' />
														<circle cx='588' cy='441' r='16' />
														<rect x='0' y='58' rx='7' ry='7' width='220' height='210' />
														<rect x='0' y='282' rx='7' ry='7' width='110' height='15' />
														<rect x='0' y='304' rx='3' ry='3' width='220' height='3' />
														<rect x='0' y='314' rx='7' ry='7' width='131' height='15' />
														<rect x='162' y='313' rx='8' ry='8' width='59' height='15' />
														<circle cx='586' cy='418' r='23' />
														<circle cx='577' cy='429' r='9' />
														<rect x='220' y='241' rx='0' ry='0' width='1' height='0' />
													</ContentLoader>
												</CSSTransition>
											) : (
												<>
													<Text tag='p' className='products-cards__category'>
														{product.category}
													</Text>
													<ImgWebP
														className='products-cards__img'
														src={product.imgUrl}
														srcSet={product.imgUrlWebP}
														type='image/webp'
														alt={product.name}
														width={200}
														height={170}
													/>
													<Title tag='h3' className='products-cards__title'>
														{product.name}
													</Title>
													<Box tag='div' className='products-cards__cost-box'>
														<Text tag='p' className='products-cards__cost crossed'>{`${
															product.currency
														} ${product.cost.toFixed(2)}`}</Text>
														<Text tag='p' className='products-cards__discount-cost'>{`${
															product.currency
														} ${product.discountCost.toFixed(2)}`}</Text>
														<Text tag='p' className='products-cards__rating'>
															{product.rating}
														</Text>
													</Box>
													<Button className='products-cards__btn'>
														<IconSVG
															className='products-cards-btn__icon'
															name='add-to-cart'
															idsymbol='append'
															onClick={() => dispatch(setItemInCart(product))}
														/>
													</Button>
												</>
											)
										}
									</ListGroupItem>
								)
							)}
						</ListGroup>
					</Card>
					{productsLoading === 'resolved' && (
						<Pagination
							tag='div'
							className='product-cards-pagination'
							productsPerPage={productsPerPage}
							totalProducts={products.length}
							paginate={paginate}
							currentPage={currentPage}
							setCurrentPage={setCurrentPage}
							lastProductIndex={lastProductIndex}
						/>
					)}
			</Wrap>
		</Page>
	)
}

