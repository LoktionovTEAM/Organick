//* ==================================== Компонент страница "О нас" ========================================*\\

//? МОДУЛИ:
import { Link } from 'react-router-dom'

//? КОМПОНЕНТЫ:
import Page from '../../сomponents/Page'
import Wrap from '../../сomponents/Wrap'
import Box from '../../сomponents/Box'
import Header from '../../сomponents/Header'
import Title from '../../сomponents/Title'
import Text from '../../сomponents/Text'
import ImgWebP from '../../сomponents/ImgWebP'
import IconSVG from '../../сomponents/IconSVG'

//? РЕСУРСЫ:
import IMGcitrus from '../../assets/img/aboutUs/about-us_citrus.png'
import IMGcitrusWebP from '../../assets/img/aboutUs/about-us_citrus.webp'
import IMGstandarts from '../../assets/img/aboutUs/about-us_standarts.png'
import IMGstandartsWebP from '../../assets/img/aboutUs/about-us_standarts.webp'
import IMGfoods from '../../assets/img/aboutUs/about-us_foods.png'
import IMGfoodsWebP from '../../assets/img/aboutUs/about-us_foods.webp'

//? СТИЛИ:
import '../AboutUsPage/AboutUsPage.scss'

export default function AboutUsPage() {

	return (
		<Page tag='div' className='about-us'>
			<Header className='about-us-header'/>
			<Wrap tag='div' className='about-us-wrap'>
				<ImgWebP
					className='about-us__banner'
					src={IMGcitrus}
					srcSet={IMGcitrusWebP}
					type='image/webp'
					alt='сitruses'
					width={400}
					height={270}
				/>
				<Box tag='div' className='about-us__info'>
					<Text tag='p' className='overtitle about-us__overtitle'>
						About Us
					</Text>
					<Title tag='h2' className='about-us__title'>
						We Believe in Organic Foods For Strong Health
					</Title>
					<Text tag='p' className='about-us__text'>
						Welcome to the world of natural and organic. Here you can discover the bounty of nature.
						We have grown on the principles of health, and care. We aim to give our customers a
						healthy chemical-free meal for perfect nutrition.
					</Text>
					<Box tag='div' className='about-us__text text-about-us'>
						<ImgWebP
							className='text-about-us__img'
							src={IMGfoods}
							srcSet={IMGfoodsWebP}
							type='image/webp'
							alt='organic foods only'
							width={20}
							height={20}
						/>
						<Box tag='div' className='text-about-us__txt'>
							<Title
								tag='h5'
							>
								Organic Foods Only
							</Title>
							<Text
								tag='p'
							>
								The Product that you ordered will be verified that we have or not if have we will
								start to move on with the next step.
							</Text>
						</Box>
					</Box>
					<Box tag='div' className='about-us__text text-about-us'>
						<ImgWebP
							className='text-about-us__img'
							src={IMGstandarts}
							srcSet={IMGstandartsWebP}
							type='image/webp'
							alt='quality standards'
							width={20}
							height={20}
						/>
						<Box tag='div' className='text-about-us__txt'>
							<Title
								tag='h5'
							>
								Quality Standards
							</Title>
							<Text
								tag='p'
							>
								Once your product is packed it will be delivered to your nearby locality you can
								directly visit the to buy the product.
							</Text>
						</Box>
					</Box>
					<Link to='/shop' className='btn btn--basic about-us__btn'>
						<Text tag='p' className='btn__title'>
							Shop Now
						</Text>
						<IconSVG className='btn__icon' name='Shop Now' idsymbol='view' />
					</Link>
				</Box>
			</Wrap>
		</Page>
	)
	
}
