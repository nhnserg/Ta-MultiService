import { ArrowRight } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Button from '../../components/ui/Button/Button'
import { Container } from '../../components/ui/Container/Container'
import slides from '../../data/heroSlides.json'

const Hero = () => {
	return (
		<section id='accueil' className='relative h-screen flex items-center'>
			<Swiper
				modules={[Autoplay, Pagination, Navigation, EffectFade]}
				effect='fade'
				slidesPerView={1}
				loop={true}
				autoplay={{
					delay: 5000,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				className='h-full'
			>
				{slides.map(slide => (
					<SwiperSlide key={slide.id}>
						<div
							className='h-full bg-cover bg-center relative'
							style={{ backgroundImage: `url(${slide.image})` }}
						>
							<div className='absolute inset-0 bg-black bg-opacity-60'></div>
							<div className='container h-full flex items-center relative z-10'>
								<Container className='z-10 text-white'>
									<div className='max-w-3xl'>
										<h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-4'>
											{slide.title}
										</h1>
										<p className='text-xl md:text-2xl mb-8'>{slide.subtitle}</p>
										<div className='flex flex-col sm:flex-row gap-4'>
											<Button
												variant='primary'
												icon={<ArrowRight size={20} />}
												onClick={() =>
													document
														.getElementById('contact')
														?.scrollIntoView({ behavior: 'smooth' })
												}
											>
												Demander un devis gratuit
											</Button>
											<Button
												variant='outline'
												onClick={() =>
													document
														.getElementById('projets')
														?.scrollIntoView({ behavior: 'smooth' })
												}
											>
												Découvrir nos réalisations
											</Button>
										</div>
									</div>
								</Container>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	)
}

export default Hero
