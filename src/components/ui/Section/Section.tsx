import { Container } from '../Container/Container'
import { SectionProps } from './types'

export const Section = ({
	id,
	title,
	description,
	children,
	className = '',
	background = 'white',
}: SectionProps) => {
	const bgClasses = {
		white: 'bg-white',
		light: 'bg-gray-50',
		blue: 'bg-blue-50',
	}

	return (
		<section id={id} className={`py-20 ${bgClasses[background]} ${className}`}>
			<Container>
				{(title || description) && (
					<div className='text-center mb-16'>
						{title && (
							<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
								{title}
							</h2>
						)}
						{description && (
							<p className='text-xl text-gray-600 max-w-3xl mx-auto'>
								{description}
							</p>
						)}
					</div>
				)}
				{children}
			</Container>
		</section>
	)
}
