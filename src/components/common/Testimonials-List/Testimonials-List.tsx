import { TestimonialCard } from '../Testimonial-Card/TestimonialCard'
import { TestimonialsListProps } from './types'

export const TestimonialsList = ({ testimonials }: TestimonialsListProps) => {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
			{testimonials.map(testimonial => (
				<TestimonialCard key={testimonial.id} testimonial={testimonial} />
			))}
		</div>
	)
}
