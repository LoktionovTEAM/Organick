import HomePage from '../pages/HomePage/HomePage'
import AboutUsPage from '../pages/AboutUsPage/AboutUsPage'
import ShopPage from '../pages/ShopPage/ShopPage'
import NewsPage from '../pages/NewsPage/NewsPage'
import ContactUsPage from '../pages/ContactUsPage/ContactUsPage'
import AuthorizationPage from '../pages/AuthorizationPage/AuthorizationPage'
import CartPage from '../pages/CartPage/CartPage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'

export const routesApp = [
	{
		path: '/',
		name: 'Home',
		Component: HomePage,
	},
	{
		path: '/aboutUs',
		name: 'About Us',
		Component: AboutUsPage,
	},
	{
		path: '/shop',
		name: 'Shop',
		Component: ShopPage,
	},
	{
		path: '/news',
		name: 'News',
		Component: NewsPage,
	},
	{
		path: '/contactUs',
		name: 'Contact Us',
		Component: ContactUsPage,
	},
	{
		path: '/authorization',
		name: 'Authorization',
		Component: AuthorizationPage,
	},
	{
		path: '/cart',
		name: 'Cart',
		Component: CartPage,
	},
	{
		path: '*',
		name: 'Not Found',
		Component: NotFoundPage,
	},
]

export const routesNavMenu = [
	{
		path: '/',
		name: 'Home',
		Component: HomePage,
	},
	{
		path: '/aboutUs',
		name: 'About Us',
		Component: AboutUsPage,
	},
	{
		path: '/shop',
		name: 'Shop',
		Component: ShopPage,
	},
	{
		path: '/news',
		name: 'News',
		Component: NewsPage,
	},
	{
		path: '/contactUs',
		name: 'Contact Us',
		Component: ContactUsPage,
	},
]


