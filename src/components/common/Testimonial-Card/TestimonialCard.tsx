import { Star } from 'lucide-react'
import { TestimonialCardProps } from './types'

export const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
	return (
		<div className='bg-white rounded-lg shadow-md p-8 transition-transform duration-300 hover:transform hover:scale-105'>
			<div className='flex items-center mb-4'>
				<img
					src={testimonial.image}
					alt={testimonial.name}
					className='w-12 h-12 rounded-full object-cover mr-4'
				/>
				<div>
					<h3 className='text-lg font-semibold text-gray-900'>
						{testimonial.name}
					</h3>
					<p className='text-gray-600'>{testimonial.role}</p>
				</div>
			</div>

			<div className='flex mb-4'>
				{[...Array(5)].map((_, i) => (
					<Star
						key={i}
						size={18}
						className={
							i < testimonial.rating
								? 'text-yellow-400 fill-current'
								: 'text-gray-300'
						}
					/>
				))}
			</div>

			<p className='text-gray-600 italic'>"{testimonial.content}"</p>
		</div>
	)
}
