//* ============================================ Компонент страница "Не найдено" ========================================*\\

//? МОДУЛИ:
import { useNavigate } from 'react-router-dom'

//? КОМПОНЕНТЫ:
import Page from '../../сomponents/Page'
import Wrap from '../../сomponents/Wrap'
import Title from '../../сomponents/Title'
import Text from '../../сomponents/Text'
import ImgWebP from '../../сomponents/ImgWebP'
import Button from '../../сomponents/Button'

//? РЕСУРСЫ:
import IMGmoving from '../../assets/img/notFound/notFound_moving.png'
import IMGmovingWebP from '../../assets/img/notFound/notFound_moving.webp'

//? СТИЛИ:
import '../NotFoundPage/NotFoundPage.scss'

export default function NotFoundPage() {

	const navigate = useNavigate()
	const goBack = () => navigate(-1)

	return (
		<Page tag='div' className='not-found'>
			<Wrap tag='div' className='not-found-wrap'>
				<ImgWebP
					className='not-found__img'
					src={IMGmoving}
					srcSet={IMGmovingWebP}
					type='image/webp'
					alt='moving'
					width={680}
					height={408}
				/>
				<Title tag='h2' className='overtitle not-found__title'>
					Oops! Page not found!
				</Title>
				<Text tag='p' className='not-found__text'>
					Looks like the page you're looking for has moved to a new address.
				</Text>
				<Button className='not-found__btn' onClick={goBack}>
					Go back
				</Button>
			</Wrap>
		</Page>
	)
	
}

