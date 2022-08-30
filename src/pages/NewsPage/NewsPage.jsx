//* ==================================== Компонент страница "Новости" ========================================*\\

//? КОМПОНЕНТЫ:
import Page from '../../сomponents/Page'
import Wrap from '../../сomponents/Wrap'
import Box from '../../сomponents/Box'
import Header from '../../сomponents/Header'
import Title from '../../сomponents/Title'
import Text from '../../сomponents/Text'
import ImgWebP from '../../сomponents/ImgWebP'
import IconSVG from '../../сomponents/IconSVG'
import Button from '../../сomponents/Button'
import Slider from '../../сomponents/Slider'

//? НАСТРОЙКИ:
import { configSlider } from '../../сomponents/Slider/configSlider'

//? РЕСУРСЫ:
import IMGtomato from '../../assets/img/news/news_tomato.jpg'
import IMGtomatoWebP from '../../assets/img/news/news_tomato.webp'
import IMGlettuce from '../../assets/img/news/news_lettuce.jpg'
import IMGlettuceWebP from '../../assets/img/news/news_lettuce.webp'
import IMGsaraTaylor from '../../assets/img/news/news_sara-taylor.jpg'
import IMGsaraTaylorWebP from '../../assets/img/news/news_sara-taylor.webp'

//? СТИЛИ:
import '../NewsPage/NewsPage.scss'

export default function NewsPage() {

	return (
		<Page tag='div' className='news'>
			<Header className='news-header' />
			<Wrap tag='div' className='news-wrap'>
				<Box tag='div' className='news-title-box'>
					<Text tag='p' className='overtitle news__overtitle'>
						News
					</Text>
					<Title tag='h2' className='news__title'>
						Discover The Recent Content About Organic Products
					</Title>
					<Button className='btn--basic news-btn'>
						<Text tag='p' className='btn__title'>
							More News
						</Text>
						<IconSVG className='btn__icon' name='More News' idsymbol='view' />
					</Button>
				</Box>
				<Slider
					configSlider={configSlider}
					className='news-slider'
					slides={[
						[
							<Box key='slide1' tag='div' className='news-slider-slide__facts facts-slide'>
								<Box tag='div' className='facts-slide-colum-left'>
									<ImgWebP
										className='facts-slide-colum-left__banner'
										src={IMGlettuce}
										srcSet={IMGlettuceWebP}
										type='image/webp'
										alt='lettuce'
										width={400}
										height={270}
									/>
									<Box tag='div' className='facts-slide-colum-left-box'>
										<Box tag='div' className='facts-slide-colum-left__author'>
											<IconSVG
												className='facts-slide-colum-left__icon'
												name='Author'
												idsymbol='author'
											/>
											<Text tag='p' className='facts-slide-colum-left__name'>
												Kristina Castle
											</Text>
										</Box>
										<Title tag='h3' className='facts-slide-colum-left__title'>
											Everything You Need to Know About Organic
										</Title>
										<Text tag='p' className='facts-slide-colum-left__article'>
											Organic farming is the only way that you still can experience the real world.
										</Text>
									</Box>
								</Box>
								<Box tag='div' className='facts-slide-colum-right'>
									<ImgWebP
										className='facts-slide-colum-right__banner'
										src={IMGtomato}
										srcSet={IMGtomatoWebP}
										type='image/webp'
										alt='tomato'
										width={400}
										height={270}
									/>
									<Box tag='div' className='facts-slide-colum-right-box'>
										<Box tag='div' className='facts-slide-colum-right__author'>
											<IconSVG
												className='facts-slide-colum-right__icon'
												name='author'
												idsymbol='author'
											/>
											<Text tag='p' className='facts-slide-colum-right__name'>
												Alex Louis
											</Text>
										</Box>
										<Title tag='h3' className='facts-slide-colum-right__title'>
											Organic Fruits: Surprising Benefits and Facts
										</Title>
										<Text tag='p' className='facts-slide-colum-right__article'>
											The world of nature has grown on the principles of health, ecology, and care.
										</Text>
									</Box>
								</Box>
							</Box>,
						],
						[
							<Box key='slide2' tag='div' className='news-slider-slide__nursery nursery-slide '>
								<Box tag='div' className='nursery-slide-colum-left' />
								<Box tag='div' className='news-colum-right nursery-slide-colum-right'>
									<Box tag='div' className='nursery-slide-colum-right-box'>
										<Text tag='p' className='overtitle nursery-slide-colum-right__overtitle'>
											Eco Friendly
										</Text>
										<Title tag='h3' className='nursery-slide-colum-right__title'>
											From Our Farm To Your Home
										</Title>
										<Box tag='div' className='nursery-slide-colum-right__info info-colum-right'>
											<Title tag='h4' className='info-colum-right__title'>
												Choose Your Products
											</Title>
											<Text tag='p' className='info-colum-right__text'>
												In our listing, we have several collections of organic products. This is the
												place where you need to choose the product you want.
											</Text>
											<Title tag='h4' className='info-colum-right__title'>
												Farmers Will Produce It
											</Title>
											<Text tag='p' className='info-colum-right__text'>
												The Product that you ordered will be verified that we have or not if have we
												will start to move on with the next step.
											</Text>
										</Box>
									</Box>
								</Box>
							</Box>,
						],
						[
							<Box key='slide3' tag='div' className='news-slider-slide__offers offers-slide'>
								<Box tag='div' className='offers-slide-colum-left'>
									<Box tag='div' className='offers-slide-box'>
										<Text tag='p' className='overtitle offers-slide__overtitle'>
											Natural!!
										</Text>
										<Title tag='h3' className='offers-slide__title'>
											Get Garden Fresh Fruits
										</Title>
									</Box>
								</Box>
								<Box tag='div' className='news-colum-right offers-slide-colum-right'>
									<Box tag='div' className='offers-slide-box'>
										<Text tag='p' className='overtitle offers-slide__overtitle'>
											Offer!!
										</Text>
										<Title tag='h3' className='offers-slide__title'>
											Get 10% off on Vegetables
										</Title>
									</Box>
								</Box>
							</Box>,
						],
						[
							<Box
								key='slide4'
								tag='div'
								className='news-slider-slide__testimonial testimonial-slide'>
								<Box tag='div' className='testimonial-slide-box'>
									<Text tag='p' className='overtitle testimonial-slide__overtitle'>
										Testimonial
									</Text>
									<Title tag='h2' className='testimonial-slide__title'>
										What Our Customer Saying?
									</Title>
									<ImgWebP
										className='testimonial-slide__img'
										src={IMGsaraTaylor}
										srcSet={IMGsaraTaylorWebP}
										type='image/webp'
										alt='Sara Taylor'
										width={108}
										height={108}
										circle
									/>
									<Text
										tag='div'
										className='testimonial-slide__feedback feedback-testimonial-slide'>
										The quality of organic produce is extremely high, the service is second to none
										and the taste of the food takes me back to my childhood when we were growing our
										own.
										<Text tag='p' className='feedback-testimonial-slide__author'>
											Sara Taylor
										</Text>
										<Text tag='p' className='feedback-testimonial-slide__post'>
											Consumer
										</Text>
									</Text>
								</Box>
							</Box>,
						],
					]}
				/>
			</Wrap>
		</Page>
	)

}

