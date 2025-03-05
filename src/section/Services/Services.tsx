import * as LucideIcons from 'lucide-react'
import { Section } from '../../components/ui/Section/Section'
import servicesData from '../../data/services.json'
import { Service } from '../../types'

const Services = () => {
	const getIconComponent = (iconName: string) => {
		const LucideIcon = LucideIcons[
			iconName as keyof typeof LucideIcons
		] as React.ComponentType<{ size?: number; className?: string }>

		return LucideIcon ? (
			<LucideIcon size={40} className='text-blue-600' />
		) : null
	}

	return (
		<Section
			id='services'
			title='Nos Services'
			description='Nous proposons une gamme complète de services de rénovation pour répondre à tous vos besoins.'
			background='light'
		>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
				{servicesData.map((service: Service) => (
					<div
						key={service.id}
						className='bg-white rounded-lg shadow-md p-8 transition-transform duration-300 hover:transform hover:scale-105'
					>
						<div className='mb-4'>{getIconComponent(service.icon)}</div>
						<h3 className='text-xl font-bold text-gray-900 mb-3'>
							{service.title}
						</h3>
						<p className='text-gray-600'>{service.description}</p>
					</div>
				))}
			</div>
		</Section>
	)
}

export default Services
