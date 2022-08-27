//* ==================================== Компонент "Шапка сайта" ========================================*\\

//? МОДУЛИ:
import React, { useState } from 'react'
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { useSelector } from 'react-redux'

//? КОМПОНЕНТЫ:
import NavMenu from '../NavMenu'
import ListGroup from '../ListGroup'
import ListGroupItem from '../ListGroupItem'
import Wrap from '../Wrap'
import Logo from '../Logo'
import ImgWebP from '../ImgWebP'
import Text from '../../сomponents/Text'
import IconSVG from '../IconSVG'
import BurgerMenu from '../BurgerMenu'
import Box from '../Box'

//? ДАННЫЕ:
import { routesNavMenu } from '../../routes/routesNavigation'

//? РЕСУРСЫ:
import IMGlogo from '../../assets/img/logo.png'
import IMGlogoWebP from '../../assets/img/logo.webp'

//? СТИЛИ:
import './header.scss'

export default function Header({ className, ...attrs }) {

	const classes = classNames(
		'header',
		className,
	)
	const navigate = useNavigate()
	const location = useLocation()
	const { totalQuantity } = useSelector((state) => state.cart)
	const body = document.body
	const [isActiveBurgerMenu, setIsActiveBurgerMenu] = useState(false)

	const handlerClickBurgerMenu = () => {
		setIsActiveBurgerMenu(!isActiveBurgerMenu)
		!isActiveBurgerMenu && (location.pathname === '/cart' || location.pathname === '/authorization')
			? body.classList.add('lock')
			: body.classList.remove('lock')
	}

	const handlerClickNavLink = () => {
		!isActiveBurgerMenu && setIsActiveBurgerMenu(false)
	}

	window.addEventListener('resize', resetNav)

	function resetNav() {
		!isActiveBurgerMenu && setIsActiveBurgerMenu(false)
		body.classList.contains('lock') && body.classList.remove('lock')
	}

	const handlerClickBtnAuthorization = (e) => {
		e.currentTarget.classList.contains('active') && navigate(-1)
	}

	const handlerClickBtnCart = (e) => {
		e.currentTarget.classList.contains('active') && navigate(-1)
	}

	return (
		<header className={classes} {...attrs}>
			<Wrap tag='div' className='header-wrap'>
				<Logo className='header-logo'>
					<Link to='/' className='logo__link header-logo__link'>
						<ImgWebP
							className='logo__img header-logo__img'
							src={IMGlogo}
							srcSet={IMGlogoWebP}
							type='image/webp'
							alt='Organick'
							width={150}
							height={42}
						/>
					</Link>
				</Logo>
				<NavMenu className='navmenu' active={isActiveBurgerMenu}>
					<ListGroup tag='ul' className='navmenu__list'>
						{routesNavMenu.map((route) => (
							<ListGroupItem tag='li' className='navmenu__item' key={route.path}>
								<NavLink
									to={route.path}
									className='navmenu__link'
									onClick={() => handlerClickNavLink()}>
									{route.name}
								</NavLink>
							</ListGroupItem>
						))}
					</ListGroup>
				</NavMenu>
				<Box tag='div' className='header__btn-box'>
					<NavLink
						to='/authorization'
						className='header__btn-authorization btn-authorization-header'
						onClick={(e) => handlerClickBtnAuthorization(e)}>
						<IconSVG
							className='btn-authorization-header__icon'
							name='authorization'
							idsymbol='users'
						/>
					</NavLink>
					<NavLink
						to='/cart'
						className='header__btn-cart btn-cart-header'
						onClick={(e) => handlerClickBtnCart(e)}>
						<IconSVG className='btn-cart-header__icon' name='cart' idsymbol='cart' />
						<Text
							tag='p'
							className='btn__title btn-cart-header__text'
						>{`Сart ${totalQuantity}`}</Text>
					</NavLink>
				</Box>
				<BurgerMenu active={isActiveBurgerMenu} onClick={handlerClickBurgerMenu}>
					<svg
						className={isActiveBurgerMenu ? `burger active` : `burger`}
						viewBox='0 0 100 100'
						width='80'
					>
						<path
							className='line top'
							d='m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20'
						/>
						<path className='line middle' d='m 70,50 h -40' />
						<path
							className='line bottom'
							d='m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20'
						/>
					</svg>
				</BurgerMenu>
			</Wrap>
		</header>
	)
}

Header.propTypes = {
	className: PropTypes.string,
}

Header.dafaultProps = {
	className: '',
}
