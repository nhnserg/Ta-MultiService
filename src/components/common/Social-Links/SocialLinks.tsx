import { Facebook, Instagram, Linkedin } from 'lucide-react'
import footerData from '../../../data/footerData.json'

const iconMap = {
	Facebook,
	Instagram,
	Linkedin,
} as const

export const SocialLinks = () => (
	<div className='flex space-x-4'>
		{footerData.socialLinks.map(({ icon, url }) => {
			const IconComponent = iconMap[icon as keyof typeof iconMap]
			return (
				<a
					key={icon}
					href={url}
					className='text-gray-400 hover:text-white transition-colors'
				>
					<IconComponent size={20} />
				</a>
			)
		})}
	</div>
)
