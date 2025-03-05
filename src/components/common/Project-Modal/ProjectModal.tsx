import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Thumbs } from 'swiper/modules'
import { X } from 'lucide-react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/thumbs'
import { ProjectModalProps } from './types'

export const ProjectModal = ({
	project,
	onClose,
	thumbsSwiper,
	setThumbsSwiper,
}: ProjectModalProps) => {
	return (
		<div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80'>
			<div className='bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto'>
				<div className='p-6'>
					<div className='flex justify-between items-center mb-4'>
						<h3 className='text-2xl font-bold text-gray-900'>
							{project.title}
						</h3>
						<button
							onClick={onClose}
							className='text-gray-500 hover:text-gray-700'
							aria-label='Fermer'
						>
							<X size={24} />
						</button>
					</div>

					<div className='mb-6'>
						{project.images.length > 0 && (
							<Swiper
								modules={[Navigation, Pagination, Thumbs]}
								navigation
								pagination={{ clickable: true }}
								thumbs={{
									swiper:
										thumbsSwiper && !thumbsSwiper.destroyed
											? thumbsSwiper
											: null,
								}}
							>
								{project.images.map((image, index) => (
									<SwiperSlide key={index}>
										<img
											src={image}
											alt={`${project.title} - Image ${index + 1}`}
											className='w-full h-[400px] object-cover'
										/>
									</SwiperSlide>
								))}
							</Swiper>
						)}
					</div>

					<div className='mb-6'>
						{project.images.length > 1 && (
							<Swiper
								onSwiper={setThumbsSwiper}
								spaceBetween={10}
								slidesPerView={4}
								freeMode={true}
								watchSlidesProgress={true}
								modules={[Navigation, Thumbs]}
							>
								{project.images.map((image, index) => (
									<SwiperSlide key={index}>
										<img
											src={image}
											alt={`Thumbnail ${index + 1}`}
											className='w-full h-20 object-cover rounded'
										/>
									</SwiperSlide>
								))}
							</Swiper>
						)}
					</div>

					<div>
						<h4 className='text-lg font-semibold text-gray-900 mb-2'>
							Description
						</h4>
						<p className='text-gray-600'>{project.description}</p>
					</div>
				</div>
			</div>
		</div>
	)
}
