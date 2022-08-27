//* ==================================== Компонент страница "Домашняя" ========================================*\\

//? КОМПОНЕНТЫ:
import Page from '../../сomponents/Page'
import Wrap from '../../сomponents/Wrap'
import Box from '../../сomponents/Box'
import Header from '../../сomponents/Header'
import Title from '../../сomponents/Title'
import Text from '../../сomponents/Text'

//? СТИЛИ:
import '../HomePage/HomePage.scss'

export default function HomePage() {

	return (
		<Page tag='div' className='home'>
			<>
				<Header className='home-header'/>
				<Wrap tag='div' className='home-wrap'>
					<Box tag='div' className='home__info info-home'>
						<>
							<Text tag='p' className='overtitle info-home__overtitle'>
								Made with nature
							</Text>
							<Title tag='h1' className='info-home__title'>
								Welcome to the world of nature and organic
							</Title>
						</>
					</Box>
				</Wrap>
			</>
		</Page>
	)

}

