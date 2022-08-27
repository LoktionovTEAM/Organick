//* ==================================== Компонент страница "Наши контакты" ========================================*\\

//? МОДУЛИ:
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IMaskInput } from 'react-imask'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'

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
import Button from '../../сomponents/Button'
import LinkHref from '../../сomponents/LinkHref'
import Logo from '../../сomponents/Logo'
import ListGroup from '../../сomponents/ListGroup'
import ListGroupItem from '../../сomponents/ListGroupItem'
import Copyright from '../../сomponents/Copyright'
import Social from '../../сomponents/Social'

//? ДАННЫЕ:
import { listSocialLinks } from '../../сomponents/Social/listSocialLinks'
import { emailMask } from '../AuthorizationPage/maskForms'

//? РЕСУРСЫ:
import IMGlogo from '../../assets/img/logo.png'
import IMGlogoWebP from '../../assets/img/logo.webp'

//? СТИЛИ:
import '../ContactUsPage/ContactUsPage.scss'

//? ССЫЛКИ:
const SUBSCRIBERS_URL = 'http://localhost:3001/subscribers'

export default function ContactUsPage() {

	const [isSubscriber, setIsSubscriber] = useState(false)
	const [isSubscriptionMessage, setIsSubscriptionMessage] = useState(false)
	const [subscribers, setSubscribers] = useState([])

	useEffect(() => {
		fetchSubscribers()
	}, [])

	const fetchSubscribers = async () => {
		axios
			.get(SUBSCRIBERS_URL)
			.then((response) => {
				const subscribersData = response.data
				setSubscribers(subscribersData)
				// console.log(`Данные от ${SUBSCRIBERS_URL} успешно получены:`, subscribersData)
			})
			.catch(function (error) {
				console.error(`Ошибка получения данных от ${SUBSCRIBERS_URL}:`, error)
			})
	}

	const handlerBtnSubscribe = (values) => {

		setIsSubscriptionMessage(true)
		const foundSubscriber = subscribers.find((item) => item.email === values.email)
		if (foundSubscriber) {
			setIsSubscriber(false)
		}
		else {
			axios
				.post(SUBSCRIBERS_URL, values)
				.then(() => {
					// console.log(`Данные успешно отправлены по адресу: ${SUBSCRIBERS_URL}`, values)
					const newSubscribers = [...subscribers, values]
					setSubscribers(newSubscribers)
				})
				.catch(function (error) {
					console.error(`Ошибка отправки данных по адресу: ${SUBSCRIBERS_URL}`, error)
				})
			setIsSubscriber(true)
		}
	}

	const validatFormSubscription = useFormik({
		initialValues: {
			email: ''
		},
		validationSchema: yup.object().shape({
			email: yup
				.string()
				.matches(
					/^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/i,
					'*Email format: username@host.name',
				)
				.email('*Invalid email...')
				.required('The field is required...'),
		}),
		onSubmit: (values, formikBag) => {
			handlerBtnSubscribe(values)
			formikBag.resetForm()
		},
	})

	return (
		<Page tag='div' className='contact-us'>
			<Header className='contact-us-header'/>
			<Wrap tag='div' className='contact-us-wrap'>
				<Form
					className='contact-us__form-subscription'
					onSubmit={validatFormSubscription.handleSubmit}>
					<Title tag='h5' className='form-subscription__title'>
						Subscribe Our Newsletter
					</Title>
					<Box tag='div' className='form-subscription__input-box'>
						<IMaskInput
							className={
								validatFormSubscription.errors.email && validatFormSubscription.touched.email
									? `form-subscription__input error`
									: `form-subscription__input`
							}
							name='email'
							type='text'
							value={validatFormSubscription.values.email}
							mask={emailMask}
							maxLength={100}
							placeholder={
								validatFormSubscription.errors.email && validatFormSubscription.touched.email
									? validatFormSubscription.errors.email
									: `Enter your email address...`
							}
							onChange={validatFormSubscription.handleChange}
							onBlur={validatFormSubscription.handleBlur}
						/>
					</Box>
					<Button className='btn--basic form-subscription__btn btn-form-subscription' type='submit'>
						<Text tag='p' className='btn__text btn-form-subscription__text'>
							Subscribe
						</Text>
						<IconSVG
							className={`btn__icon btn-form-subscription__icon-view`}
							name='Subscribe'
							idsymbol='view'
						/>
					</Button>
				</Form>
				<Box tag='div' className='contact-us__colum-box'>
					<Box tag='div' className='contact-us__colum colum-contact-us'>
						<Title tag='h5' className='colum-contact-us__title'>
							Contact Us
						</Title>
						<Text tag='p' className='colum-contact-us__email'>
							<strong>Email</strong>
							<LinkHref
								href='mailto:needhelp@organick.com'
							>
								needhelp@organick.com
							</LinkHref>
						</Text>
						<Text tag='p' className='colum-contact-us__phone'>
							<strong>Phone</strong>
							<LinkHref
								href='tel:12312541452'
							>
								123 (1254) 1452
							</LinkHref>
						</Text>
						<Text tag='p' className='colum-contact-us__address'>
							<strong>Address</strong>
							<LinkHref
								href='https://goo.gl/maps/1YesLdZjw1rGGur36'
								target='_blank'>
								88 Road, Brooklyn Street, USA
							</LinkHref>
						</Text>
					</Box>
					<Box tag='div' className='contact-us__colum'>
						<Logo className='contact-us-logo'>
							<Link to='/' className='logo__link contact-us-logo__link'>
								<ImgWebP
									className='logo__img contact-us-logo__img'
									src={IMGlogo}
									srcSet={IMGlogoWebP}
									type='image/webp'
									alt='Organick'
									width={150}
									height={42}
								/>
							</Link>
						</Logo>
						{!isSubscriptionMessage ? (
							<Text tag='p' className='contact-us__text'>
								We are a popular and farming company aspiring to be a leader in the Organic food
								industry.
							</Text>
						) : (
							<Text
								tag='p'
								className='contact-us__text'
								style={{
									color: '#7EB693',
								}}>
								{
									isSubscriber ? (
										<span>Thank you for subscribing to our newsletter!</span>
									) : (
										<span
											style={{
												color: '#ff0000',
											}}>
											You have already subscribed to our newsletter!
										</span>
									)
								}
							</Text>
						)}
						<Social className='contact-us-social'>
							<ListGroup tag='ul' className='contact-us-social__list'>
								{listSocialLinks.map((item) => (
									<ListGroupItem tag='li' className='contact-us-social__item' key={item.url}>
										<LinkHref href={item.url} className='contact-us-social__link' target='_blank'>
											<IconSVG
												className={`contact-us-social__icon-${item.name}`}
												name={item.name}
												idsymbol={item.idsymbol}
											/>
										</LinkHref>
									</ListGroupItem>
								))}
							</ListGroup>
						</Social>
					</Box>
					<Box tag='div' className='contact-us__colum colum-utility-pages'>
						<Title tag='h5' className='colum-utility-pages__title'>
							Utility Pages
						</Title>
						<Text tag='div' className='colum-utility-pages__text'>
							<p>Style Guide</p>
							<p>Protected</p>
							<p>Page Not Found</p>
							<p>Changelog</p>
							<p>Licenses</p>
						</Text>
					</Box>
				</Box>
				<Copyright className='contact-us__copyright'>
					Copyright © Organic | Designed VictorFlow | Developed by{' '}
					<LinkHref
						href='https://github.com/LoktionovTEAM'
						className='copyright__link'
						target='_blank'>
						Loktionov<span>TEAM</span>
						<span>&#xae;</span>
					</LinkHref>
				</Copyright>
			</Wrap>
		</Page>
	)
}
