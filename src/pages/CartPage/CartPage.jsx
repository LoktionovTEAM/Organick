//* ==================================== Компонент страница "Корзина" ========================================*\\

//? МОДУЛИ:
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

//? РЕДЮСЕРЫ:
import {
	increaseItemToCart,
	decreaseItemToCart,
	deleteItemFromCart,
	clearItemFromCart,
} from '../../store/reducers/cartSlice'
import { sendNewOrder } from '../../store/reducers/ordersSlice'

//? КОМПОНЕНТЫ:
import Page from '../../сomponents/Page'
import Wrap from '../../сomponents/Wrap'
import Box from '../../сomponents/Box'
import Header from '../../сomponents/Header'
import Title from '../../сomponents/Title'
import Text from '../../сomponents/Text'
import ImgWebP from '../../сomponents/ImgWebP'
import IconSVG from '../../сomponents/IconSVG'
import ListGroupItem from '../../сomponents/ListGroupItem'
import Button from '../../сomponents/Button'
import Modal from '../../сomponents/Modal'

//? РЕСУРСЫ:
import IMGbasket from '../../assets/img/cart/cart_picnic-basket.png'
import IMGbasketWebP from '../../assets/img/cart/cart_picnic-basket.webp'
import IMGregister from '../../assets/img/authorization/authorization-register.png'
import IMGregisterWebP from '../../assets/img/authorization/authorization-register.webp'
import IMGpurchase from '../../assets/img/cart/cart_purchase.png'
import IMGpurchaseWebP from '../../assets/img/cart/cart_purchase.webp'

//? СТИЛИ:
import '../CartPage/CartPage.scss'

export default function CartPage() {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const { isUserIdentified, identifiedUser } = useSelector((state) => state.users)
	const { ordersStatusLoading } = useSelector((state) => state.orders)
	const { itemsInCart, totalCost, totalQuantity } = useSelector((state) => state.cart)
	const [isOpenModalOrder, setIsOpenModalOrder] = useState(false)

	const handlerBtnOrderProducts = (ordersStatusLoading) => {
		const itemsInOrder = itemsInCart.map((item) => {
			return {
				name: item.name,
				cost: item.cost,
				discountCost: item.discountCost,
				currency: item.currency,
				quantity: item.quantity,
				amount: item.amount,
			}
		})

		const dataOrder = { dataOrder: new Date().toLocaleString() }
		const totalQuantityProducts = { totalQuantityProducts: `${totalQuantity} pieces` }
		const totalCostOrder = { totalCostOrder: `${totalCost.toFixed(2)} ₽` }
		const order = {
			order: [dataOrder, ...identifiedUser, ...itemsInOrder, totalQuantityProducts, totalCostOrder],
		}

		if (isUserIdentified === true) {
			dispatch(sendNewOrder(order))
			if ((ordersStatusLoading = 'resolved')) {
				openModalOrder()
				dispatch(clearItemFromCart())
			}
		} else {
			openModalOrder()
		}
	}

	const openModalOrder = () => {
		setIsOpenModalOrder(true)
	}

	const closeModalOrder = () => {
		setIsOpenModalOrder(false)
		if (!isUserIdentified) {
			navigate('/authorization')
		}
	}

	return (
		<Page tag='div' className='cart'>
			<Header className='cart-header' />
			<Wrap tag='div' className='cart-wrap'>
				<Title tag='h2' className='overtitle cart__title'>
					Cart
				</Title>
				<Text tag='p' className='cart__subtitle'>
					{itemsInCart.length > 0 ? 'Your order' : 'Unfortunately, your shopping cart is empty!'}
				</Text>
				{itemsInCart.length > 0 ? (
					<Box tag='div' className='cart__full full-cart'>
						<Box tag='div' className='full-cart__title-colum title-colum-full-cart'>
							<Text tag='p' className='title-colum-full-cart__img'>
								Product image
							</Text>
							<Text tag='p' className='title-colum-full-cart__name'>
								Product name
							</Text>
							<Text tag='p' className='title-colum-full-cart__quantity'>
								Quantity product
							</Text>
							<Text tag='p' className='title-colum-full-cart__cost-per-piece'>
								Cost per piece
							</Text>
							<Text tag='p' className='title-colum-full-cart__amount'>
								The amount
							</Text>
							<Box tag='div' className='title-colum-full-cart__del'>
								<Text tag='p'>Clear cart</Text>
								<IconSVG
									name='Clear cart'
									idsymbol='waste-can'
									onClick={() => {
										dispatch(clearItemFromCart())
									}}
								/>
							</Box>
						</Box>
						<TransitionGroup component='ul' className='cart-products'>
							{itemsInCart.map((product) => (
								<CSSTransition key={product.id} timeout={500} classNames='cart-products-item-anim'>
									<ListGroupItem tag='li' className='cart-products-item'>
										<Box tag='div' className='cart-products-box'>
											<ImgWebP
												className='cart-products__img'
												src={product.imgUrl}
												srcSet={product.imgUrlWebP}
												type='image/webp'
												alt={product.name}
												width={70}
												height={40}
											/>
											<Title tag='h3' className='cart-products__title'>
												{product.name}
											</Title>
											<Box tag='div' className='cart-products__quantity quantity-cart-products'>
												<IconSVG
													className='quantity-cart-products__btn-less'
													name='less'
													idsymbol='minus'
													onClick={() => {
														dispatch(decreaseItemToCart(product))
													}}
												/>
												<Text tag='div' className='quantity-cart-products__value'>
													{product.quantity}
												</Text>
												<IconSVG
													className='quantity-cart-products__btn-more'
													name='more'
													idsymbol='plus'
													onClick={() => {
														dispatch(increaseItemToCart(product))
													}}
												/>
											</Box>
											<Box tag='div' className='cart-products__cost cost-cart-products'>
												<Text tag='p' className='cost-cart-products__was crossed'>{`${
													product.currency
												} ${product.cost.toFixed(2)}`}</Text>
												<Text tag='p' className='cost-cart-products__now'>{`${
													product.currency
												} ${product.discountCost.toFixed(2)}`}</Text>
											</Box>
											<Text tag='p' className='cart-products__sum'>{`${
												product.currency
											} ${product.amount.toFixed(2)}`}</Text>
											<IconSVG
												className='cart-products__btn-del'
												name='delete product'
												idsymbol='delete'
												onClick={() => {
													dispatch(deleteItemFromCart(product.id))
												}}
											/>
										</Box>
									</ListGroupItem>
								</CSSTransition>
							))}
						</TransitionGroup>
						<Box tag='div' className='full-cart__total-cost total-cost-full-cart'>
							<Text tag='p' className='total-cost-full-cart__title'>
								TOTAL:
							</Text>
							<Text
								tag='p'
								className='total-cost-full-cart__quantity'>{`${totalQuantity} pc`}</Text>
							<Text tag='p' className='total-cost-full-cart__value'>{`₽ ${totalCost.toFixed(
								2,
							)}`}</Text>
							<Button
								className='btn--basic total-cost-full-cart__btn'
								onClick={() => handlerBtnOrderProducts()}>
								To pay
							</Button>
						</Box>
					</Box>
				) : (
					<Box tag='div' className='cart__empty empty-cart'>
						<ImgWebP
							className='empty-cart__img'
							src={IMGbasket}
							srcSet={IMGbasketWebP}
							type='image/webp'
							alt='moving'
							width={408}
							height={272}
						/>
						<Box tag='div' className='empty-cart__text-box text-box-empty-cart'>
							<Text tag='span' className='text-box-empty-cart__item'>
								Visit the{' '}
								<Link to='/shop' className='text-box-empty-cart__link'>
									shop
								</Link>
								, to start shopping.
							</Text>
						</Box>
					</Box>
				)}
			</Wrap>
			<Modal className='modal-order' isOpen={isOpenModalOrder} onClose={closeModalOrder}>
				<Box tag='div' className='modal-order-info'>
					{isUserIdentified === true && ordersStatusLoading === 'resolved' ? (
						<>
							<Title tag='h3' className='overtitle modal-order-info__overtitle'>
								Order Information
							</Title>
							<ImgWebP
								className='modal-order-info__img'
								src={IMGpurchase}
								srcSet={IMGpurchaseWebP}
								type='image/webp'
								alt='purchases'
								width={334}
								height={299}
								style={{
									width: '24.6rem',
									height: '22rem',
								}}
							/>
							<Text tag='p' className='modal-order-info__text'>
								Thank you, your order is accepted! Our manager will contact you soon to clarify the
								details!
							</Text>
						</>
					) : (
						<>
							<Title tag='h3' className='overtitle modal-order-info__overtitle'>
								Please register
							</Title>
							<ImgWebP
								className='modal-order-info__img'
								src={IMGregister}
								srcSet={IMGregisterWebP}
								type='image/webp'
								alt='register'
								width={176}
								height={204}
							/>
							<Text tag='p' className='modal-order-info__text'>
								We apologize for the inconvenience, but the purchase of goods in our store is only
								available to registered users! Please register or login to your account with valid
								data!
							</Text>
						</>
					)}
				</Box>
			</Modal>
		</Page>
	)
}
