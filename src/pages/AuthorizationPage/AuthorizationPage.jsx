//* ==================================== Компонент страница "Авторизация" ========================================*\\

//? МОДУЛИ:
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { IMaskInput } from 'react-imask'
import { useFormik } from 'formik'
import * as yup from 'yup'

//? РЕДЮСЕРЫ:
import { fetchUsers, sendNewUser, checkingUserRegistration } from '../../store/reducers/usersSlice'

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
import Button from '../../сomponents/Button'
import Social from '../../сomponents/Social'
import LinkHref from '../../сomponents/LinkHref'
import Modal from '../../сomponents/Modal'

//? ДАННЫЕ:
import { listSocialLinks } from '../../сomponents/Social/listSocialLinks'
import { nameMask, emailMask, passwordMask } from '../../pages/AuthorizationPage/maskForms'

//? РЕСУРСЫ:
import IMGregister from '../../assets/img/authorization/authorization-register.png'
import IMGregisterWebP from '../../assets/img/authorization/authorization-register.webp'
import IMGwelcome from '../../assets/img/authorization/authorization-organick.png'
import IMGwelcomeWebP from '../../assets/img/authorization/authorization-organick.webp'

//? СТИЛИ:
import '../AuthorizationPage/AuthorizationPage.scss'

export default function AuthorizationPage() {

	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { itemsInCart } = useSelector((state) => state.cart)
	const {
		users,
		isUserIdentified,
	} = useSelector((state) => state.users)

	useEffect(() => {
		dispatch(fetchUsers())
	}, [dispatch])

	const [isOpenModalRegistration, setIsOpenModalRegistration] = useState(false)
	const [isOpenModalEntry, setIsOpenModalEntry] = useState(false)
	const [isPassVisible, setIsPassVisible] = useState(false)
	const [isRegisteredUser, setIsRegisteredUser] = useState(false)
	const [isEntry, setIsEntry] = useState(false)

	const validatFormRegistration = useFormik({
		initialValues: {
			name: '',
			email: '',
			password: '',
		},
		validationSchema: yup.object().shape({
			name: yup
				.string()
				.matches(/^[A-z0-9_.-]{2,30}$/, '*Valid characters: _.-')
				.required('*The field is required...'),
			email: yup
				.string()
				.matches(
					/^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/i,
					'*Email format: username@host.name',
				)
				.email('*Invalid email...')
				.required('*The field is required...'),
			password: yup
				.string()
				// .matches(
				// 	/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/,
				// 	'*At least 8 characters are required: !@#$&*',
				// )
				.required('*The field is required...'),
		}),
		onSubmit: (values, formikBag) => {
			handlerBtnRegistration(values)
			formikBag.resetForm()
			isPassVisible && setIsPassVisible(false)
		},
	})

	const validatFormEntry = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: yup.object().shape({
			email: yup
				.string()
				.matches(
					/^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/i,
					'*Email format: username@host.name',
				)
				.email('*Invalid email...')
				.required('*The field is required...'),
			password: yup
				.string()
				// .matches(
				// 	/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/,
				// 	'*At least 8 characters are required: !@#$&*',
				// )
				.required('*The field is required...'),
		}),
		onSubmit: (values, formikBag) => {
			handlerBtnEntry(values)
			formikBag.resetForm()
			isPassVisible && setIsPassVisible(false)
		},
	})

	const handlerBtnEntry = (values) => {
		const foundUser = users.find(
			(item) => item.email === values.email && item.password === values.password,
		)
		openModalEntry()
		if (foundUser) {
			dispatch(checkingUserRegistration(values))
		}
		else {
			setIsEntry(false)
		}
	}

	const switchVisibilPass = () => {
		setIsPassVisible(!isPassVisible)
	}

	const changeFormAuthorization = () => {
		setIsEntry(!isEntry)
	}

	const handlerBtnRegistration = (values) => {
		const foundRegistrationUser = users.some(
			(item) =>
				item.name === values.name ||
				item.email === values.email
		)

		if (foundRegistrationUser) {
			openModalRegistration()
			setIsRegisteredUser(true)
		} else {
			dispatch(sendNewUser(values))
			openModalRegistration()
			setIsRegisteredUser(false)
		}
	}

	const openModalRegistration = () => {
		setIsOpenModalRegistration(true)
	}

	const closeModalRegistration = () => {
		setIsOpenModalRegistration(false)
		setIsEntry(true)
	}

	const openModalEntry = () => {
		setIsOpenModalEntry(true)
	}

	const closeModalEntry = () => {
		setIsOpenModalEntry(false)
		if (isUserIdentified) {
			itemsInCart.length > 0 ? navigate('/cart') : navigate('/')
		}
	}

	return (
		<Page tag='div' className='authorization'>
			<Header className='authorization-header' />
			<Wrap tag='div' className='authorization-wrap'>
				<Title tag='h2' className='overtitle authorization__overtitle'>
					Authorization
				</Title>
				<Box tag='div' className='authorization-form-box'>
					<Box
						tag='div'
						className={`authorization__registration registration-authorization ${
							isEntry ? 'is-txl' : ''
						}`}>
						<Form
							id='form-registration'
							className='authorization__form-registration form-registration-authorization'
							method=''
							action=''
							onSubmit={validatFormRegistration.handleSubmit}>
							<Title tag='h3' className='form-registration-authorization__title'>
								Create Account
							</Title>
							<Social className='contact-us-social'>
								<ListGroup tag='ul' className='contact-us-social__list'>
									{listSocialLinks.map((item, index) => (
										<ListGroupItem
											tag='li'
											className='contact-us-social__item'
											key={`listSocialLinks item ${index}`}>
											<LinkHref
												href={item.url}
												className='contact-us-social__link'
												target='_blank'>
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
							<Text tag='p' className='form-registration-authorization__text'>
								or use email for registration
							</Text>
							<IMaskInput
								className={
									validatFormRegistration.errors.name && validatFormRegistration.touched.name
										? `form-registration-authorization__input-name error`
										: `form-registration-authorization__input-name`
								}
								name='name'
								type='text'
								placeholder='*Name'
								value={validatFormRegistration.values.name}
								mask={nameMask}
								maxLength={30}
								onChange={validatFormRegistration.handleChange}
								onBlur={validatFormRegistration.handleBlur}
							/>
							{validatFormRegistration.errors.name && validatFormRegistration.touched.name ? (
								<Text tag='div' className='text--error'>
									{validatFormRegistration.errors.name}
								</Text>
							) : null}
							<IMaskInput
								className={
									validatFormRegistration.errors.email && validatFormRegistration.touched.email
										? `form-registration-authorization__input-email error`
										: `form-registration-authorization__input-email`
								}
								name='email'
								type='text'
								placeholder='*Email'
								value={validatFormRegistration.values.email}
								mask={emailMask}
								maxLength={50}
								onChange={validatFormRegistration.handleChange}
								onBlur={validatFormRegistration.handleBlur}
							/>
							{validatFormRegistration.errors.email && validatFormRegistration.touched.email ? (
								<Text tag='div' className='text--error'>
									{validatFormRegistration.errors.email}
								</Text>
							) : null}
							<Box tag='div' className='form-registration-authorization__input-password-box'>
								<IMaskInput
									className={
										validatFormRegistration.errors.password &&
										validatFormRegistration.touched.password
											? `form-registration-authorization__input-password error`
											: `form-registration-authorization__input-password`
									}
									name='password'
									type={!isPassVisible ? 'password' : 'text'}
									placeholder='*Password'
									value={validatFormRegistration.values.password}
									mask={passwordMask}
									maxLength={30}
									onBlur={validatFormRegistration.handleBlur}
									onChange={validatFormRegistration.handleChange}
								/>
								{validatFormRegistration.values.password.length >= 1 ? (
									<IconSVG
										className={`btn-show-password ${isPassVisible ? 'active' : ''}`}
										name={isPassVisible ? 'hidden' : 'show'}
										idsymbol={isPassVisible ? 'eye-blocked' : 'eye'}
										onClick={() => switchVisibilPass()}
									/>
								) : null}
							</Box>
							{validatFormRegistration.errors.password &&
							validatFormRegistration.touched.password ? (
								<Text tag='div' className='text--error'>
									{validatFormRegistration.errors.password}
								</Text>
							) : null}
							<Button
								className='form-registration-authorization__btn btn-form-registration btn--author'
								type='submit'>
								<Text tag='p' className='btn-form-registration__text'>
									SIGN UP
								</Text>
							</Button>
						</Form>
					</Box>
					<Box
						tag='div'
						className={`authorization__entry entry-authorization ${
							isEntry ? 'is-txl is-z200' : ''
						}`}>
						<Form
							id='form-entry'
							className='authorization__form-entry form-entry-authorization'
							method=''
							action=''
							onSubmit={validatFormEntry.handleSubmit}>
							<Title tag='h3' className='form-entry-authorization__title'>
								Sign in to Website
							</Title>
							<Social className='contact-us-social'>
								<ListGroup tag='ul' className='contact-us-social__list'>
									{listSocialLinks.map((item, index) => (
										<ListGroupItem
											tag='li'
											className='contact-us-social__item'
											key={`listSocialLinks item ${index}`}>
											<LinkHref
												href={item.url}
												className='contact-us-social__link'
												target='_blank'>
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
							<Text tag='span' className='form-entry-authorization__text'>
								or use your email account
							</Text>
							<IMaskInput
								className={
									validatFormEntry.errors.email && validatFormEntry.touched.email
										? `form-entry-authorization__input-email error`
										: `form-entry-authorization__input-email`
								}
								name='email'
								type='text'
								placeholder='*Email'
								value={validatFormEntry.values.email}
								mask={emailMask}
								maxLength={50}
								onChange={validatFormEntry.handleChange}
								onBlur={validatFormEntry.handleBlur}
							/>
							{validatFormEntry.errors.email && validatFormEntry.touched.email ? (
								<Text tag='div' className='text--error'>
									{validatFormEntry.errors.email}
								</Text>
							) : null}
							<Box tag='div' className='form-entry-authorization__input-password-box'>
								<IMaskInput
									className={
										validatFormEntry.errors.password && validatFormEntry.touched.password
											? `form-entry-authorization__input-password error`
											: `form-entry-authorization__input-password`
									}
									name='password'
									type={!isPassVisible ? 'password' : 'text'}
									placeholder='*Password'
									value={validatFormEntry.values.password}
									mask={passwordMask}
									maxLength={30}
									onBlur={validatFormEntry.handleBlur}
									onChange={validatFormEntry.handleChange}
								/>
								{validatFormEntry.values.password.length >= 1 ? (
									<IconSVG
										className={`btn-show-password ${isPassVisible ? 'active' : ''}`}
										name={isPassVisible ? 'hidden' : 'show'}
										idsymbol={isPassVisible ? 'eye-blocked' : 'eye'}
										onClick={() => switchVisibilPass()}
									/>
								) : null}
							</Box>
							{validatFormEntry.errors.password && validatFormEntry.touched.password ? (
								<Text tag='div' className='text--error'>
									{validatFormEntry.errors.password}
								</Text>
							) : null}
							<LinkHref href='#' className='form-entry-authorization__link' target='_blank'>
								Forgot your password?
							</LinkHref>
							<Button
								className='form-entry-authorization__btn btn-form-entry btn--author'
								type='submit'>
								<Text tag='p' className='btn-form-entry__text'>
									SIGN IN
								</Text>
							</Button>
						</Form>
					</Box>
					<Box
						tag='div'
						className={`authorization__switch switch-authorization ${
							isEntry ? 'is-gx is-txr' : ''
						}`}>
						<Box
							tag='div'
							className={`switch-authorization__circle ${isEntry ? 'is-txr' : ''}`}
						/>
						<Box
							tag='div'
							className={`switch-authorization__circle switch-authorization__circle--t ${
								isEntry ? 'is-txr' : ''
							}`}
						/>
						<Box
							tag='div'
							className={`switch-authorization__container ${isEntry ? 'is-hidden' : ''}`}>
							<Title tag='h3' className='switch-authorization__title'>
								Welcome Back !
							</Title>
							<Text tag='p' className='switch-authorization__text'>
								To keep connected with us please login with your personal info
							</Text>
							<Button
								className='switch-authorization__button btn--author'
								form='form-registration'
								type='reset'
								onClick={changeFormAuthorization}>
								<Text tag='p' className='btn__text'>
									SIGN IN
								</Text>
							</Button>
						</Box>
						<Box
							tag='div'
							className={`switch-authorization__container ${isEntry ? '' : 'is-hidden'}`}>
							<Title tag='h3' className='switch-authorization__title'>
								Hello Friend !
							</Title>
							<Text tag='p' className='switch-authorization__text'>
								Enter your personal details and start journey with us
							</Text>
							<Button
								className='switch-authorization__button btn--author'
								form='form-entry'
								type='reset'
								onClick={changeFormAuthorization}>
								<Text tag='p' className='btn__text'>
									SIGN UP
								</Text>
							</Button>
						</Box>
					</Box>
				</Box>
			</Wrap>
			<Modal
				className='modal-registration'
				isOpen={isOpenModalRegistration}
				onClose={closeModalRegistration}>
				<Box tag='div' className='modal-registration-info'>
					<Title tag='h3' className='overtitle modal-registration-info__overtitle'>
						{!isRegisteredUser ? `Thank you for registering!` : `The user is registered!`}
					</Title>
					<ImgWebP
						className='modal-registration-info__img'
						src={IMGregister}
						srcSet={IMGregisterWebP}
						type='image/webp'
						alt='register'
						width={176}
						height={204}
					/>
					<Text tag='p' className='modal-registration-info__text'>
						{!isRegisteredUser
							? `Thank you for registering for Organick! To keep in touch with us, make and pay for
								purchases, participate in promotions and tastings, log in to your account!`
							: `The user with the specified credentials is already registered! Please check the
								validity of the data you entered, register under other data or log in to your
								account in the login form!`}
					</Text>
				</Box>
			</Modal>
			<Modal className='modal-entry' isOpen={isOpenModalEntry} onClose={closeModalEntry}>
				<Box tag='div' className='modal-entry-info'>
					{isUserIdentified === true ? (
						<>
							<Title tag='h3' className='overtitle modal-entry-info__overtitle'>
								Welcome Back !
							</Title>
							<ImgWebP
								className='modal-entry-info__img'
								src={IMGwelcome}
								srcSet={IMGwelcomeWebP}
								type='image/webp'
								alt='organick'
								width={334}
								height={299}
								style={{
									width: '24.6rem',
									height: '22rem',
								}}
							/>
							<Text tag='p' className='modal-entry-info__text'>
								Welcome to the online health food store for the whole family! No more dyes and
								flavors, food additives and flavor enhancers. Only natural products for the normal
								functioning of a healthy body. We wish you a good mood and pleasant shopping!
							</Text>
						</>
					) : (
						<>
							<Title tag='h3' className='overtitle modal-entry-info__overtitle'>
								Please register !
							</Title>
							<ImgWebP
								className='modal-entry-info__img'
								src={IMGregister}
								srcSet={IMGregisterWebP}
								type='image/webp'
								alt='register'
								width={176}
								height={204}
							/>
							<Text tag='p' className='modal-entry-info__text'>
								Unfortunately, there is no user with the credentials you specified! Please register
								to stay in touch with us, or check the validity of the data you entered!
							</Text>
						</>
					)}
				</Box>
			</Modal>
		</Page>
	)
}
